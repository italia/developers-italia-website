import dotenv from "dotenv";

const envFile = `.env`;
dotenv.config({ path: envFile, override: true });

const envName = process.env.DATOCMS_ENVIRONMENT || "main";
const apiUrl = "https://graphql.datocms.com";
const apiKey =
  process.env.DATOCMS_MANAGEMENT_API_TOKEN ?? process.env.DATOCMS_API_TOKEN;
if (!apiKey) {
  console.error(
    "Missing apiKey: set DATOCMS_MANAGEMENT_API_TOKEN or DATOCMS_API_TOKEN.",
  );
  process.exit(1);
}

const headers = {
  Authorization: `Bearer ${apiKey}`,
  "X-Environment": `${envName}`,
  "X-Exclude-Invalid": "true",
  "Content-Type": "application/json",
};

import { writeFileSync } from "fs";
import { buildClientSchema, getIntrospectionQuery, printSchema } from "graphql";

const introspectionQuery = getIntrospectionQuery();

const response = await fetch(apiUrl, {
  method: "POST",
  headers: { ...headers, "Content-Type": "application/json" },
  body: JSON.stringify({ query: introspectionQuery }),
});

if (!response.ok) {
  console.error(`Request failed: ${response.status} ${response.statusText}`);
  process.exit(1);
}

const { data } = await response.json();
const schema = buildClientSchema(data);
const sdl = printSchema(schema);

writeFileSync("./src/graphql/schema.graphql", sdl, "utf-8");
console.log("schema.graphql written successfully");
