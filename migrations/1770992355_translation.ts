import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Manage upload filters");

  console.log('Install plugin "AI Translations"');
  await client.plugins.create({
    id: "Pe71pAx5Q0yd6_GM95bQAQ",
    package_name: "datocms-plugin-ai-translations",
  });
  await client.plugins.update("Pe71pAx5Q0yd6_GM95bQAQ", {
    parameters: {
      apiKey: "",
      prompt:
        'You are an expert translator specializing in CMS content translation.\n\nTRANSLATION REQUIREMENTS:\n- Translate the content accurately while preserving the original meaning and intent\n- Maintain the tone, style, and formality level of the original content\n- Keep all names, trademarks, and brand identifiers unchanged unless they have official translations\n- Preserve any existing formatting where appropriate\n- Translate idiomatic expressions to their equivalent in the target language\n- Adapt cultural references appropriately for the target locale when necessary\n- Maintain the same paragraph structure and flow as the source text\n\nCONTEXT UTILIZATION:\nThe following record context contains related fields from the same content record.\nUse this context to:\n1. Maintain consistent terminology across all related fields\n2. Understand the content\'s domain and purpose\n3. Preserve any unique characteristics or preferences indicated in other fields\n4. Match writing style and voice evident in the record\n\n{recordContext}\n\nICU MESSAGE FORMAT HANDLING:\n- You may encounter ICU Message Format strings (e.g., "{gender, select, male {He said} female {She said}}")\n- You MUST preserve the structure, keywords, and variable keys exactly\n- ONLY translate the human-readable content inside the brackets\n\n\nTRANSLATION REQUEST:\nTranslate the following content from {fromLocale} to {toLocale}:\n\n{fieldValue}\n\nOUTPUT INSTRUCTIONS:\n- Return ONLY the translated text without commentary\n- Do not include phrases like "Here is the translation" or similar\n- Never wrap the entire output in quotes\n- Never mention that you\'re an AI\n- Do not add any explanations, notes, or disclaimers\n- Do not generate HTML or markdown formatting unless it was present in the original\n- Maintain any special characters or symbols that should be preserved\n',
      vendor: "deepl",
      gptModel: "None",
      deeplApiKey: "",
      geminiModel: "gemini-1.5-flash",
      deeplUseFree: true,
      googleApiKey: "",
      deeplEndpoint: "auto",
      anthropicModel: "claude-3.5-haiku-latest",
      deeplFormality: "default",
      anthropicApiKey: "",
      deeplGlossaryId: "",
      deeplIgnoreTags: "notranslate,ph",
      enableDebugging: false,
      translationFields: [
        "single_line",
        "markdown",
        "wysiwyg",
        "textarea",
        "slug",
        "json",
        "seo",
        "structured_text",
        "rich_text",
        "file",
      ],
      deeplGlossaryPairs: "",
      deeplSplittingTags: "",
      translateBulkRecords: true,
      translateWholeRecord: true,
      deeplNonSplittingTags: "a,code,pre,strong,em,ph,notranslate",
      deeplPreserveFormatting: true,
      rolesToBeExcludedFromThisPlugin: [],
      modelsToBeExcludedFromThisPlugin: [],
      apiKeysToBeExcludedFromThisPlugin: [],
    },
  });
}
