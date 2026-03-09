import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import { defineConfig } from "astro/config";
import { resolve } from "path";

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
  redirects: {
    "/": "/it",
  },
  vite: {
    resolve: {
      alias: {
        "/^@(.*)$/": resolve("./src/*"),
        "@splidejs/splide/src/css/core/index": resolve(
          "node_modules/@splidejs/splide/src/css/core/index.scss",
        ),
        "@font-assets": "/node_modules/bootstrap-italia/dist/fonts",
      },
    },
  },
});
