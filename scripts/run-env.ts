import dotenv from "dotenv";
import { spawnSync } from "node:child_process";

const mode = process.argv[2];
const command = process.argv[3];

if (!mode || !command) {
  console.error("Usage: bun run <staging|production> -- <dev|build>");
  process.exit(1);
}

const envFile = `.env.${mode}`;

dotenv.config({ path: envFile, override: true });

const envName = process.env.DATOCMS_ENVIRONMENT;
let apiUrl = "https://graphql.datocms.com";
if (envName) {
  apiUrl = `${apiUrl}/environments/${envName}`;
}

const schemaToken =
  process.env.DATOCMS_MANAGEMENT_API_TOKEN ?? process.env.DATOCMS_API_TOKEN;
if (!schemaToken) {
  console.error(
    "Missing token: set DATOCMS_MANAGEMENT_API_TOKEN or DATOCMS_API_TOKEN.",
  );
  process.exit(1);
}

const schemaResult = spawnSync(
  "bun",
  [
    "x",
    "gql.tada",
    "generate",
    "schema",
    apiUrl,
    "--header",
    "X-Exclude-Invalid: true",
    "--header",
    `Authorization: ${schemaToken}`,
  ],
  { stdio: "inherit", env: process.env },
);
if (schemaResult.status !== 0) {
  process.exit(schemaResult.status ?? 1);
}

const linksResult = spawnSync("bun", ["./scripts/generate-link-map.ts"], {
  stdio: "inherit",
  env: process.env,
});
if (linksResult.status !== 0) {
  process.exit(linksResult.status ?? 1);
}

const astroResult = spawnSync(
  "bun",
  ["x", "astro", command, "--mode", mode, ...process.argv.slice(4)],
  { stdio: "inherit", env: process.env },
);

process.exit(astroResult.status ?? 1);
