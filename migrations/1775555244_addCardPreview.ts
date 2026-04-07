import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Creating new fields/fieldsets");

  console.log(
    'Create Single-line string field "Background color" (`background_color`) in block model "Cards section with tab" (`news_feed`)',
  );
  await client.fields.create("RH3d7bWeSlSt4w-W7s3_wg", {
    id: "LNHUMOVTTZuPgUIqxfEGfw",
    label: "Background color",
    field_type: "string",
    api_key: "background_color",
    appearance: {
      addons: [],
      editor: "SEKZYn5iRdWsSRZfVcxUmw",
      parameters: {
        collection: '{\n  "extends": [\n    "backgroundColors"\n  ]\n}',
      },
      field_extension: "visualSelect",
    },
    default_value: "default",
  });

  console.log("Update existing fields/fieldsets");

  console.log(
    'Update Single-line string field "Background color" (`background_color`) in block model "Cards section with tab" (`news_feed`)',
  );
  await client.fields.update("LNHUMOVTTZuPgUIqxfEGfw", { position: 1 });

  console.log(
    'Update Multiple links field "News" (`news`) in block model "Story tab" (`story_tab`)',
  );
  await client.fields.update("GINwrqLbTP2Ef3IQZ7S-Og", {
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [
          "PeXbTb7tRvCzyyICsUoedw",
          "T-HlXkO8SEWb8JYh5FuYCQ",
          "X7ndzI_yTeeyKZWJ8KtKGQ",
          "ZO62cMfeSpmP2tBt7g_u6g",
        ],
      },
      size: { min: 1, max: 4 },
    },
    appearance: {
      addons: [],
      editor: "links_select",
      parameters: { filters: [] },
    },
  });
}
