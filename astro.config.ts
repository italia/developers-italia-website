import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import { defineConfig } from "astro/config";
import { readFileSync } from "fs";
import { resolve } from "path";

const softwareIdsFilePath = "./software-ids.txt";
let softwareIds: string[] = [];

try {
  const fileContent = readFileSync(softwareIdsFilePath, "utf-8");
  softwareIds = fileContent
    .split("\n")
    .map((id) => id.trim())
    .filter(Boolean);
} catch (error) {
  console.error(
    `Error reading software IDs from ${softwareIdsFilePath}:`,
    error,
  );
}

const softwareRedirects = softwareIds.reduce(
  (redirects, id) => {
    redirects[`/software/${id}`] = {
      status: 301 as 301,
      destination: `https://catalogo-software.developers.italia.it/software/${id}`,
    };
    return redirects;
  },
  {} as Record<
    string,
    { status: 301 | 302 | 303 | 307 | 308 | 300 | 304; destination: string }
  >,
);

softwareRedirects["/"] = {
  status: 301,
  destination: "/it",
};

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL,
  i18n: {
    defaultLocale: "it",
    locales: ["it", "en"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes("component-inventory") &&
        !page.includes("/search") &&
        !page.includes("/ricerca"),
      i18n: {
        defaultLocale: "it",
        locales: {
          it: "it",
          en: "en",
        },
      },
    }),
    react(),
  ],
  adapter: vercel(),
  redirects: softwareRedirects,
  vite: {
    ssr: {
      noExternal: ["graph-italia-components"],
    },
    resolve: {
      alias: {
        "/^@(.*)$/": resolve("./src/*"),
        "@splidejs/splide/src/css/core/index": resolve(
          "node_modules/@splidejs/splide/src/css/core/index.scss",
        ),
        "@bootstrap-src": "/node_modules/bootstrap-italia/src",
      },
    },
  },
  build: {
    inlineStylesheets: "always",
  },
});
