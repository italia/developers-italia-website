import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import { defineConfig } from "astro/config";
import { readFileSync } from "fs";
import { resolve } from "path";

const softwareIdsFilePath = "./software-ids.json";
let softwareIds: { id: string; url: string | null }[] = [];

try {
  const fileContent = readFileSync(softwareIdsFilePath, "utf-8");
  softwareIds = JSON.parse(fileContent);
} catch (error) {
  console.error(
    `Error reading software IDs from ${softwareIdsFilePath}:`,
    error,
  );
}

const softwareRedirects = softwareIds.reduce(
  (redirects, { id, url }) => {
    redirects[`/it/software/${id}`] = {
      status: 301 as 301,
      destination: `https://catalogo-software.developers.italia.it/software/${id}`,
    };
    redirects[`/en/software/${id}`] = {
      status: 301 as 301,
      destination: `https://catalogo-software.developers.italia.it/software/${id}`,
    };
    redirects[`/it/software/${url}`] = {
      status: 301 as 301,
      destination: `https://catalogo-software.developers.italia.it/software/${id}`,
    };
    redirects[`/en/software/${url}`] = {
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

softwareRedirects["/it/software"] = {
  status: 301,
  destination: "https://catalogo-software.developers.italia.it/",
};

softwareRedirects["/en/software"] = {
  status: 301,
  destination: "https://catalogo-software.developers.italia.it/",
};

// URL del vecchio sito Jekyll (https://github.com/italia/developers.italia.it)
// rediretti (301) alla pagina equivalente o più affine del nuovo sito.
// Le sezioni con pagine generate e non enumerabili (/it/news/*, /it/api/*,
// /it/pa/* e i mirror /en/*) sono invece redirette con wildcard in
// vercel.json, perché i redirects di Astro non supportano sorgenti
// dinamiche in build statica.
// Vedi https://github.com/italia/developers-italia-website/issues/128
const legacyRedirects: Record<string, string> = {
  // --- it ---
  "/it/interoperabilita": "/it/interoperabilita-e-api",
  "/it/riuso": "/it/software-open-source",
  "/it/riuso/acquisizione": "/it/guide/adottare-software-a-riuso",
  "/it/riuso/dichiarazione": "/it/guide/adottare-software-a-riuso",
  "/it/riuso/pubblicazione": "/it/guide/pubblicare-software-per-la-pa",
  "/it/search": "/it/ricerca",
  "/it/faq": "/it/progetto",
  "/it/contatti": "/it/progetto",
  "/it/chi-siamo": "/it/progetto",
  "/it/come-partecipo": "/it/community",
  "/it/come-lo-uso": "/it/guide",
  "/it/cosa-fare": "/it/community",
  "/it/attivita": "/it/community",
  "/it/idee-gsoc": "/it/community",
  // Pagine delle piattaforme del vecchio sito
  "/it/anpr":
    "/it/piattaforme/anpr-anagrafe-nazionale-della-popolazione-residente",
  "/it/fse": "/it/piattaforme/fascicolo-sanitario-elettronico",
  "/it/io": "/it/piattaforme/io-lapp-dei-servizi-pubblici",
  "/it/noipa": "/it/piattaforme/noipa",
  "/it/pagopa": "/it/piattaforme/pagopa",
  "/it/pdnd": "/it/piattaforme/pdnd-piattaforma-digitale-nazionale-dati",
  "/it/schema": "/it/piattaforme/schema",
  // Piattaforme senza una pagina equivalente nel nuovo sito
  "/it/18app": "/it/piattaforme",
  "/it/cie": "/it/piattaforme",
  "/it/datigov": "/it/piattaforme",
  "/it/dcc": "/it/piattaforme",
  "/it/designers": "/it/piattaforme",
  "/it/docs-italia": "/it/piattaforme",
  "/it/fatturapa": "/it/piattaforme",
  "/it/indicepa": "/it/piattaforme",
  "/it/otello": "/it/piattaforme",
  "/it/piattaforma-contratti-pubblici": "/it/piattaforme",
  "/it/spid": "/it/piattaforme",

  // --- en ---
  "/en/interoperability": "/en/interoperability-and-apis",
  "/en/reuse": "/en/open-source-software",
  "/en/reuse/acquisition": "/en/guides/adopt-reusable-software",
  "/en/reuse/publication":
    "/en/guides/publishing-software-for-the-public-sector",
  "/en/faq": "/en/project",
  "/en/contacts": "/en/project",
  "/en/get-involved": "/en/community",
  "/en/how": "/en/guides",
  "/en/to-do": "/en/community",
  "/en/issues": "/en/community",
  "/en/gsoc-ideas": "/en/community",
  "/en/legal-notice": "/en/legal-notices",
  "/en/anpr": "/en/platforms/anpr-national-registry-of-the-resident-population",
  "/en/io": "/en/platforms/io-lapp-for-public-services",
  "/en/noipa": "/en/platforms/noipa",
  "/en/pagopa": "/en/platforms/pagopa",
  "/en/18app": "/en/platforms",
  "/en/cie": "/en/platforms",
  "/en/datigov": "/en/platforms",
  "/en/dcc": "/en/platforms",
  "/en/designers": "/en/platforms",
  "/en/docs-italia": "/en/platforms",
  "/en/fatturapa": "/en/platforms",
  "/en/indicepa": "/en/platforms",
  "/en/otello": "/en/platforms",
  "/en/spid": "/en/platforms",
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
  redirects: { ...softwareRedirects, ...legacyRedirects },
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
