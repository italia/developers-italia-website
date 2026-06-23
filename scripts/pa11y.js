#!/usr/bin/env node

/**
 * parse_sitemap.mjs
 *
 * Recursively fetches and parses a sitemap XML (including sitemap index files)
 * and prints every page URL to stdout.
 *
 * Usage:
 *   node parse_sitemap.mjs <sitemap_url>
 *
 * Requirements: Node.js 18+ (uses built-in fetch + zlib)
 */

import { gunzipSync } from "zlib";

import fs from "fs";
import pa11y from "pa11y";

const DIR = "./.pa11y";

// ---------------------------------------------------------------------------
// fetch_xml
// Fetches an XML file from a URL, decompressing it if it is gzip-encoded.
// ---------------------------------------------------------------------------
async function fetchXml(url) {
  const res = await fetch(url, {
    headers: { "Accept-Encoding": "gzip, deflate" },
    redirect: "follow",
  });

  if (!res.ok) {
    throw new Error(`HTTP ${res.status} ${res.statusText} — ${url}`);
  }

  const buffer = Buffer.from(await res.arrayBuffer());

  // Decompress if the URL ends in .gz OR the server sent gzip content
  const isGzip =
    url.endsWith(".gz") ||
    (res.headers.get("content-encoding") || "").includes("gzip");

  if (isGzip) {
    try {
      return gunzipSync(buffer).toString("utf-8");
    } catch {
      // Already decompressed transparently by fetch — return as-is
      return buffer.toString("utf-8");
    }
  }

  return buffer.toString("utf-8");
}

// ---------------------------------------------------------------------------
// decodeXmlEntities
// Decodes the five standard XML/HTML character entities.
// ---------------------------------------------------------------------------
function decodeXmlEntities(str) {
  return str
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&");
}

// ---------------------------------------------------------------------------
// extractTextNodes
// Minimal XPath-style text extractor using regex.
// Pulls the text content of every <tag>…</tag> occurrence.
// ---------------------------------------------------------------------------
function extractTextNodes(xml, tag) {
  const results = [];
  const re = new RegExp(`<${tag}[^>]*>([^<]+)</${tag}>`, "g");
  let match;
  while ((match = re.exec(xml)) !== null) {
    const value = decodeXmlEntities(match[1].trim());
    if (value) results.push(value);
  }
  return results;
}

// ---------------------------------------------------------------------------
// parseSitemap
// Recursively parses a sitemap (or sitemap index) and prints page URLs.
// ---------------------------------------------------------------------------
async function parseSitemap(url) {
  let xml;
  try {
    xml = await fetchXml(url);
  } catch (err) {
    process.stderr.write(`Warning: could not fetch ${url} — ${err.message}\n`);
    return;
  }

  // Sitemap index — contains <sitemap><loc>…</loc></sitemap> entries
  const subSitemaps = extractTextNodes(xml, "loc").filter((loc) => {
    // Keep only URLs that appear inside a <sitemap> block
    const sitemapBlockRe = /<sitemap[\s\S]*?<\/sitemap>/g;
    let block;
    while ((block = sitemapBlockRe.exec(xml)) !== null) {
      if (block[0].includes(loc)) return true;
    }
    return false;
  });

  // Regular sitemap — contains <url><loc>…</loc></url> entries
  const pages = [];
  const urlBlockRe = /<url[\s\S]*?<\/url>/g;
  let urlBlock;
  while ((urlBlock = urlBlockRe.exec(xml)) !== null) {
    const locs = extractTextNodes(urlBlock[0], "loc");
    pages.push(...locs);
  }

  // for (const page of pages) {
  //     process.stdout.write(page + "\n");
  // }

  // Recurse into sub-sitemaps
  for (const subUrl of subSitemaps) {
    await parseSitemap(subUrl);
  }

  return pages;
}

// ---------------------------------------------------------------------------
// Entry point
// ---------------------------------------------------------------------------
const [, , sitemapUrl] = process.argv;

if (!sitemapUrl) {
  process.stderr.write("Error: no argument provided.\n");
  process.stderr.write("Usage: node parse_sitemap.mjs <sitemap_url>\n");
  process.exit(1);
}

const urls = await parseSitemap(sitemapUrl).catch((err) => {
  process.stderr.write(`Fatal: ${err.message}\n`);
  process.exit(1);
});

const escapeHTML = (s) => {
  if (!s) return "";
  return s
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
};

const pa11yOptions = {
  runners: ["axe", "htmlcs"],
};

const results = [];
let markdownReport = "# Accessibility Report\n";

if (urls) {
  for (const url of urls) {
    console.log(`- ${url}`);
    const result = await pa11y(url, pa11yOptions);
    results.push(result);
    markdownReport += `<details>
        <summary>${result.issues.length > 0 ? "❌" : "✅"} ${result.pageUrl} - ${result.documentTitle}</summary>
        <br>`;
    markdownReport += `\n\n## ${result.pageUrl} - ${result.documentTitle}\n\n`;
    markdownReport += `| message | code | context | selector | description | help |\n`;
    markdownReport += `|---------|------|---------|----------|-------------|------|\n`;
    for (const issue of result.issues) {
      markdownReport += `| ${issue.message} | ${issue.code} | ${escapeHTML(issue.context)} | ${issue.selector} | ${escapeHTML(issue.runnerExtras?.description)} | ${escapeHTML(issue.runnerExtras?.help)} |\n`;
    }
    markdownReport += `</details>\n\n`;
  }
}

if (!fs.existsSync(DIR)) {
  fs.mkdirSync(DIR);
}

fs.writeFileSync(`${DIR}/pa11y-results.json`, JSON.stringify(results, null, 2));
fs.writeFileSync(`${DIR}/pa11y-results.md`, markdownReport);
