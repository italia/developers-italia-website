import { buildClient } from "@datocms/cma-client-node";
import { readFileSync } from "fs";
import { resolve } from "path";

const token = process.env.DATOCMS_MANAGEMENT_API_TOKEN;
const FIELD_ID = process.env.DATOCMS_VISUAL_SELECT_PLUGIN_ID;
const environment = process.env.DATOCMS_ENVIRONMENT;
const outputPath = `src/config/options-visual-select.json`;

if (!token || !FIELD_ID || !environment) {
  throw new Error(
    "DATOCMS_MANAGEMENT_API_TOKEN, DATOCMS_VISUAL_SELECT_PLUGIN_ID, and DATOCMS_ENVIRONMENT are required to sync plugin options.",
  );
}
const client = buildClient({ apiToken: token, environment });

async function syncOptions() {
  try {
    const jsonPath = resolve(outputPath);
    const rawData = readFileSync(jsonPath, "utf8");
    const optionsData = JSON.parse(rawData);
    const visualOptions = JSON.stringify(optionsData, null, 2);

    console.log('Update settings of plugin "Visual Select"');

    await client.plugins.update(FIELD_ID!, {
      parameters: {
        presets: visualOptions,
      },
    });

    console.log("✅ Exit with success!");
  } catch (error) {
    console.error("❌ Exit with error:", error);
  }
}

syncOptions();
