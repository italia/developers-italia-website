import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Creating new fields/fieldsets");

  console.log(
    'Create Single-line string field "Background color" (`background_color`) in block model "Cards hub with filter" (`catalogue_feed`)',
  );
  await client.fields.create("T9sEB1HSTya0PUQkEV2i_A", {
    id: "LUbxdSWIQG-LRpzQNuv7Rw",
    label: "Background color",
    field_type: "string",
    api_key: "background_color",
    appearance: {
      addons: [],
      editor: "SEKZYn5iRdWsSRZfVcxUmw",
      parameters: {
        collection:
          '{\n  "extends": [\n    "backgroundLightColorsNoPrimary"\n  ]\n}',
      },
      field_extension: "visualSelect",
    },
    default_value: "default",
  });

  console.log("Update existing fields/fieldsets");

  console.log(
    'Update Single-line string field "Background color" (`background_color`) in block model "Cards hub with filter" (`catalogue_feed`)',
  );
  await client.fields.update("LUbxdSWIQG-LRpzQNuv7Rw", { position: 1 });

  console.log("Finalize models/block models");

  console.log('Update block model "Cards hub with filter" (`catalogue_feed`)');
  await client.itemTypes.update("T9sEB1HSTya0PUQkEV2i_A", {
    presentation_title_field: { id: "LUbxdSWIQG-LRpzQNuv7Rw", type: "field" },
  });

  console.log("Manage menu items");

  console.log('Update menu item "Articoli interni catalogo"');
  await client.menuItems.update("SF3QYUoPS-SA8qFDRWfZMA", {
    label: "Articoli interni catalogo",
  });
}
