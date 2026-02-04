import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Create new models/block models");

  console.log('Create block model "Supporting brand" (`supporting_brand`)');
  await client.itemTypes.create(
    {
      id: "FfQ1tV9TQHG1rkthHrShnw",
      name: "Supporting brand",
      api_key: "supporting_brand",
      modular_block: true,
      draft_saving_active: false,
      inverse_relationships_enabled: false,
    },
    {
      skip_menu_item_creation: true,
      schema_menu_item_id: "c3Ah2OIESSSD3Uat75dwtQ",
    },
  );

  console.log("Creating new fields/fieldsets");

  console.log(
    'Create Single-line string field "Brand logo" (`brand_logo`) in block model "Supporting brand" (`supporting_brand`)',
  );
  await client.fields.create("FfQ1tV9TQHG1rkthHrShnw", {
    id: "Yf_jMJZ0QpCdcdrpbmbAfQ",
    label: "Brand logo",
    field_type: "string",
    api_key: "brand_logo",
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "SEKZYn5iRdWsSRZfVcxUmw",
      parameters: {
        collection:
          '{\n  "extends": [\n    "iconList"\n  ],\n  "presentation": {\n    "type": "carousel",\n    "width": "100px"\n  }\n}',
      },
      field_extension: "visualSelect",
    },
    default_value: null,
  });

  console.log(
    'Create Single-line string field "Label" (`label`) in block model "Supporting brand" (`supporting_brand`)',
  );
  await client.fields.create("FfQ1tV9TQHG1rkthHrShnw", {
    id: "G-XWVmmgQNCy4RpK_NZ8Tg",
    label: "Label",
    field_type: "string",
    api_key: "label",
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    default_value: null,
  });

  console.log(
    'Create Single-line string field "Url" (`url`) in block model "Supporting brand" (`supporting_brand`)',
  );
  await client.fields.create("FfQ1tV9TQHG1rkthHrShnw", {
    id: "cF14xBXDRtaI9DvGAOHNjA",
    label: "Url",
    field_type: "string",
    api_key: "url",
    validators: { required: {}, format: { predefined_pattern: "url" } },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    default_value: null,
  });

  console.log(
    'Create Single-line string field "Brand logo" (`brand_logo`) in block model "Brand" (`brand`)',
  );
  await client.fields.create("CTrt_dG9RcuokSxQmsa5TQ", {
    id: "A5bt6cYeRIiVPy7zREIcCg",
    label: "Brand logo",
    field_type: "string",
    api_key: "brand_logo",
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "SEKZYn5iRdWsSRZfVcxUmw",
      parameters: {
        collection:
          '{\n  "extends": [\n    "iconList"\n  ],\n  "presentation": {\n    "type": "carousel",\n    "width": "100px"\n  }\n}',
      },
      field_extension: "visualSelect",
    },
    default_value: null,
  });

  console.log("Update existing fields/fieldsets");

  console.log(
    'Update Single-line string field "Url" (`url`) in block model "Brand" (`brand`)',
  );
  await client.fields.update("QyRyYJVqS_O8rbzuWQngOg", { position: 4 });

  console.log(
    'Update Single-line string field "Brand logo" (`brand_logo`) in block model "Brand" (`brand`)',
  );
  await client.fields.update("A5bt6cYeRIiVPy7zREIcCg", { position: 2 });

  console.log(
    'Update Single-line string field "Main logo" (`main_logo`) in block model "Brand" (`brand`)',
  );
  await client.fields.update("WE54rogWRVSH6cZ2F1VxNg", {
    label: "Main logo",
    api_key: "main_logo",
  });

  console.log(
    'Update Modular Content (Multiple blocks) field "Utility" (`utility`) in model "Layout" (`layout`)',
  );
  await client.fields.update("DQjejF_9R_-BYzkGSGCUHQ", {
    validators: {
      rich_text_blocks: {
        item_types: ["FfQ1tV9TQHG1rkthHrShnw", "fhF1HPNNQlKNy5KNGfLtuw"],
      },
    },
  });

  console.log("Finalize models/block models");

  console.log('Update block model "Supporting brand" (`supporting_brand`)');
  await client.itemTypes.update("FfQ1tV9TQHG1rkthHrShnw", {
    presentation_title_field: { id: "cF14xBXDRtaI9DvGAOHNjA", type: "field" },
  });

  console.log("Manage schema menu items");

  console.log(
    'Update block schema menu item for block model "Supporting brand" (`supporting_brand`)',
  );
  await client.schemaMenuItems.update("c3Ah2OIESSSD3Uat75dwtQ", {
    position: 0,
    parent: { id: "WMk6e5CwQCOCiC_iV0e-DA", type: "schema_menu_item" },
  });

  console.log('Update model schema menu item for model "Lang" (`lang`)');
  await client.schemaMenuItems.update("d_cfpGK1Qd-gPD1Wj1lVbg", {
    position: 23,
  });

  console.log(
    'Update block schema menu item for block model "External link" (`external_link`)',
  );
  await client.schemaMenuItems.update("WvjRSKZ3TTCDVqhXOIZ7FA", {
    position: 27,
  });

  console.log(
    'Update block schema menu item for block model "Internal link" (`internal_link`)',
  );
  await client.schemaMenuItems.update("bl5SfY47T3O2riKCWSdkkQ", {
    position: 28,
  });

  console.log(
    'Update model schema menu item for model "Global setting" (`global_setting`)',
  );
  await client.schemaMenuItems.update("Jp4buk4gRvuY-GR3I3c6bw", {
    position: 24,
  });

  console.log(
    'Update block schema menu item for block model "Download link" (`download_link`)',
  );
  await client.schemaMenuItems.update("OcTQpYdxREafOJ0nYnTJZA", {
    position: 29,
  });

  console.log('Update model schema menu item "Webinar"');
  await client.schemaMenuItems.update("C-EXbRV_TfOQEvjqKoJ-Ew", {
    position: 19,
  });

  console.log('Update model schema menu item "Resource"');
  await client.schemaMenuItems.update("c42xanSrTcGTzZUF1rsuzw", {
    position: 22,
  });

  console.log('Update block schema menu item "Navigation"');
  await client.schemaMenuItems.update("N4pGvMpZQoa7NDkSri-tlA", {
    position: 25,
  });

  console.log('Update block schema menu item "List"');
  await client.schemaMenuItems.update("fc2HKkRSSq2MAOVxit4j9Q", {
    position: 26,
  });

  console.log('Update model schema menu item "Story"');
  await client.schemaMenuItems.update("HajK_tQXSGKJ5foj8eu1jQ", {
    position: 20,
  });

  console.log('Update model schema menu item "News"');
  await client.schemaMenuItems.update("Tk0nCGLoTRehKT5ZSXBz5A", {
    position: 21,
  });

  console.log('Update model schema menu item "Chart"');
  await client.schemaMenuItems.update("D63GZe7CSX6xqQmqjQtG9Q", {
    position: 17,
  });

  console.log('Update model schema menu item "Insight"');
  await client.schemaMenuItems.update("Q96U2sdZQ3yes8_lF6EUcA", {
    position: 18,
  });

  console.log(
    'Update model schema menu item for model "Schema migration" (`schema_migration`)',
  );
  await client.schemaMenuItems.update("OfZFdzftQBCRJllOPQzjjA", {
    position: 30,
  });
}
