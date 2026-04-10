import type { Document, SiteLocale } from "@graphql/types";
import { Client } from "@opensearch-project/opensearch";
import dotenv from "dotenv";
import * as fs from "fs";
import * as path from "path";

const mode = process.argv[2];

if (!mode) {
  console.error(
    "Usage: bun run ./scripts/index-opensearch.ts <staging|production>",
    process.argv,
  );
  process.exit(1);
}

const envFile = `.env.${mode}`;

dotenv.config({ path: envFile, override: true });

const HOST = process.env.OPENSEARCH_HOST;
const USERNAME = process.env.OPENSEARCH_USERNAME;
const PASSWORD = process.env.OPENSEARCH_PASSWORD;
const INDEX_NAME_PREFIX = process.env.OPENSEARCH_INDEX_NAME;
const CONTENT_PATH = path.join(process.cwd(), "dist", "client", "indexing");

if (!HOST || !USERNAME || !PASSWORD || !CONTENT_PATH || !INDEX_NAME_PREFIX) {
  console.warn(
    "⚠️  Missing environment variables for OpenSearch (HOST, USERNAME, PASSWORD, CONTENT_PATH, INDEX_NAME_PREFIX).",
  );
  console.warn("Indexing will be skipped.\n");
  process.exit(0);
}

function getBulkBody(documents: Document[], INDEX_NAME: string) {
  return documents.flatMap((doc) => [
    { index: { _index: INDEX_NAME, _id: doc.slug } },
    doc,
  ]);
}

const deleteIndex = async (client: Client, index: string) => {
  try {
    console.log(`OPENSEARCH: DELETING INDEX ${index}`);
    await client.indices.delete({ index, ignore_unavailable: true });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Error deleting index ${index}:`, error.message);
    }
  }
};

const createIndex = async (
  client: Client,
  index: string,
  analyzerLang: string = "standard",
) => {
  console.log(`OPENSEARCH: CREATING INDEX ${index} (Lang: ${analyzerLang})`);
  await client.indices.create({
    index,
    body: {
      settings: {
        number_of_shards: 1,
        number_of_replicas: 0,
      },
      mappings: {
        properties: {
          title: {
            type: "text",
            analyzer: analyzerLang,
          },
          content: {
            type: "text",
            analyzer: analyzerLang,
          },
          url: { type: "keyword" },
        },
      },
    },
  });
};

const loadDocumentsIntoIndex = async (
  client: Client,
  index: string,
  documents: Document[],
) => {
  console.log(`OPENSEARCH: LOADING ${documents.length} DOCUMENTS`);
  const body = getBulkBody(documents, index);

  const { body: bulkResponse } = await client.bulk({ body, refresh: true });

  if (bulkResponse.errors) {
    console.error(`Errors during BULK indexing for ${index}`);
  }
};

const refreshIndex = async (client: Client, index: string) => {
  console.log(`ELASTIC: REFRESH INDEX ${index}`);
  await client.indices.refresh({ index });
};

async function runIndexing() {
  const client = new Client({
    node: HOST,
    auth: {
      username: USERNAME!,
      password: PASSWORD!,
    },
  });

  if (!fs.existsSync(CONTENT_PATH)) {
    console.error(
      `Error: Content file not found at ${CONTENT_PATH}. Please make sure to run 'astro build'.`,
    );
    return;
  }
  const files = fs.readdirSync(CONTENT_PATH);

  for (const file of files) {
    const lang = file.split(".")[0] as SiteLocale;

    const INDEX_NAME = INDEX_NAME_PREFIX + lang;

    console.log(`Starting indexing on ${HOST}/${INDEX_NAME}`);

    const rawContent = fs.readFileSync(path.join(CONTENT_PATH, file), "utf8");
    const { analyzer, documents } = JSON.parse(rawContent);

    if (documents.length === 0) {
      console.log("No documents to index. Abort operation.");
      return;
    }

    try {
      await deleteIndex(client, INDEX_NAME);
      await createIndex(client, INDEX_NAME, analyzer);
      await loadDocumentsIntoIndex(client, INDEX_NAME, documents);
      await refreshIndex(client, INDEX_NAME);

      console.log(`SUCCESS: Indexing completed for ${INDEX_NAME}`);
    } catch (error) {
      console.error(`FAILED: Indexing error for ${INDEX_NAME}:`, error);
    }
  }
}

runIndexing();
