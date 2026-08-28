import { writeFileSync } from "fs";

const BASE_URL = "https://api.developers.italia.it/v1/software";
const INITIAL_URL = `${BASE_URL}?all=true&page[size]=100`;

interface SoftwareItem {
  id: string;
  url?: string;
  aliases?: string[];
  publiccodeYml?: string;
  active?: boolean;
  vitality?: unknown;
  createdAt?: string;
  updatedAt?: string;
  [key: string]: unknown;
}

interface SoftwareLinks {
  prev: string | null;
  next: string | null;
}

interface SoftwareResponse {
  data: SoftwareItem[];
  links: SoftwareLinks;
}

function resolveNextUrl(
  next: string | null,
  currentUrl: string,
): string | null {
  if (!next) return null;
  return new URL(next, currentUrl).toString();
}

function cleanGitUrl(url?: string): string | null {
  const newUrl = url
    ? url.replace(/\.git$/, ".html").replace(/https?:\/\//, "")
    : null;
  if (!newUrl?.endsWith(".html")) {
    return newUrl + ".html";
  }
  return newUrl;
}

async function fetchAllSoftwareIds(): Promise<
  { id: string; url: string | null }[]
> {
  const ids: { id: string; url: string | null }[] = [];
  let url: string | null = INITIAL_URL;
  let page = 1;

  while (url) {
    console.log(`Fetching page ${page}: ${url}`);

    const res: Response = await fetch(url, {
      headers: { Accept: "application/json" },
    });

    if (!res.ok) {
      throw new Error(
        `Request failed (${res.status} ${res.statusText}) for URL: ${url}`,
      );
    }

    const body = (await res.json()) as SoftwareResponse;

    const data = Array.isArray(body.data) ? body.data : [];
    for (const item of data) {
      if (item && item.id) {
        const aliases = Array.isArray(item.aliases) ? item.aliases : [];
        const newUrl = cleanGitUrl(item.url) ?? null;
        ids.push({
          id: item.id,
          url: newUrl,
        });

        for (const alias of aliases) {
          const newAliasUrl = cleanGitUrl(alias) ?? null;
          if (newAliasUrl !== newUrl) {
            ids.push({ id: item.id, url: newAliasUrl });
          }
        }
      }
    }

    const next = body?.links?.next ?? null;
    url = resolveNextUrl(next, url);
    page++;
  }

  return ids;
}

const allIds: { id: string; url: string | null }[] =
  await fetchAllSoftwareIds();

console.log(`\nTotal IDs collected: ${allIds.length}`);
console.log(allIds.map((id) => id.id).join("\n"));

const outputFilePath = "./software-ids.json";
writeFileSync(outputFilePath, JSON.stringify(allIds, null, 4), "utf-8");
console.log(`\nAll IDs saved to ${outputFilePath}`);

export { fetchAllSoftwareIds };
export type { SoftwareItem, SoftwareLinks, SoftwareResponse };
