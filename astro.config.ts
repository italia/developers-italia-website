import { defineConfig } from "astro/config";
import { resolve } from "path";
import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL,
  integrations: [sitemap()],
  adapter: vercel(),
  vite: {
    resolve: {
      alias: {
        "@splidejs/splide/src/css/core/index": resolve(
          "node_modules/@splidejs/splide/src/css/core/index.scss",
        ),
      },
    },
  },
});
