import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Manage upload filters");

  console.log("Update existing fields/fieldsets");

  console.log(
    'Update Single-line string field "Background color" (`background_color`) in block model "FAQ section" (`faq_section`)',
  );
  await client.fields.update("Ycmrj0lNTwO2Z8wYcic9jw", {
    appearance: {
      addons: [],
      editor: "SEKZYn5iRdWsSRZfVcxUmw",
      parameters: {
        collection:
          '{\n  "extends": [\n    "backgroundLightColorsNoPrimary"\n  ]\n}',
      },
      field_extension: "visualSelect",
    },
  });

  console.log(
    'Update Single-line string field "Background color" (`background_color`) in block model "Support channels section" (`support_channels_section`)',
  );
  await client.fields.update("Y5f4Ed-IQny_KHnEzmp3ow", {
    position: 1,
    appearance: {
      addons: [],
      editor: "SEKZYn5iRdWsSRZfVcxUmw",
      parameters: {
        collection:
          '{\n  "extends": [\n    "backgroundLightColorsNoPrimary"\n  ]\n}',
      },
      field_extension: "visualSelect",
    },
  });

  console.log(
    'Update Single-line string field "Background color" (`background_color`) in block model "Text + accordion" (`text_accordion`)',
  );
  await client.fields.update("XYkYnr6zTZSJTaqu-jxhfw", {
    appearance: {
      addons: [],
      editor: "SEKZYn5iRdWsSRZfVcxUmw",
      parameters: {
        collection:
          '{\n  "extends": [\n    "backgroundLightColorsNoPrimary"\n  ]\n}',
      },
      field_extension: "visualSelect",
    },
  });
}
