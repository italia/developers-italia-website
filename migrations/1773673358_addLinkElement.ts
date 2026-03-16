import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Create new models/block models");

  console.log('Create block model "Card service" (`card_service`)');
  await client.itemTypes.create(
    {
      id: "Om27rthoTNiekMEFeTCmjQ",
      name: "Card service",
      api_key: "card_service",
      modular_block: true,
      draft_saving_active: false,
      hint: "https://www.datocms-assets.com/166118/1769597668-external-link.png",
      inverse_relationships_enabled: false,
    },
    {
      skip_menu_item_creation: true,
      schema_menu_item_id: "MJT0YTYVQZGvoJ6jY64W5Q",
    },
  );

  console.log("Creating new fields/fieldsets");

  console.log(
    'Create Modular Content (Single block) field "card" (`card`) in block model "Card service" (`card_service`)',
  );
  await client.fields.create("Om27rthoTNiekMEFeTCmjQ", {
    id: "NgMwbrmHQKCfp4nhUK7_Yg",
    label: "card",
    field_type: "single_block",
    api_key: "card",
    validators: {
      single_block_blocks: { item_types: ["fhF1HPNNQlKNy5KNGfLtuw"] },
      required: {},
    },
    appearance: {
      addons: [],
      editor: "frameless_single_block",
      parameters: {},
    },
    default_value: null,
  });

  console.log("Update existing fields/fieldsets");

  console.log(
    'Update Structured text field "Content" (`content`) in block model "Article structured text" (`structured_text`)',
  );
  await client.fields.update("arBIa9zIQeOjyueDykCqGw", {
    validators: {
      required: {},
      structured_text_blocks: {
        item_types: [
          "CUjz6lUdSTam7sSU7fqWGw",
          "IRda12RgS6maZGJoAyWaKw",
          "IzWzz4YeQcqJ7J34Xie2xg",
          "Lx5afhIlRzS2IxfP0urtSA",
          "NUwINVMPRTCl0alUb9zAag",
          "Nwki1YZWRhqgFtIM3Hdgqw",
          "Om27rthoTNiekMEFeTCmjQ",
          "SYB-ZWCvQq2KdO_yrUxS2g",
          "UKWQ1GcrSWy1u0UVIWhNLg",
          "UXCUVsLhQJ2bxgV07x8t5w",
          "bSjFz6cBSnWfCOaqR-RWVg",
          "fhF1HPNNQlKNy5KNGfLtuw",
        ],
      },
      structured_text_inline_blocks: { item_types: [] },
      structured_text_links: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [],
      },
    },
  });

  console.log(
    'Update Structured text field "Article structured text" (`content`) in model "Article" (`article`)',
  );
  await client.fields.update("VACT72qFRYq6ztu2QwKCLg", {
    validators: {
      structured_text_blocks: {
        item_types: [
          "CUjz6lUdSTam7sSU7fqWGw",
          "HZqkL_jAQhOLDzlnGQ2pDg",
          "IRda12RgS6maZGJoAyWaKw",
          "IzWzz4YeQcqJ7J34Xie2xg",
          "Lx5afhIlRzS2IxfP0urtSA",
          "NUwINVMPRTCl0alUb9zAag",
          "Nwki1YZWRhqgFtIM3Hdgqw",
          "Om27rthoTNiekMEFeTCmjQ",
          "SYB-ZWCvQq2KdO_yrUxS2g",
          "UKWQ1GcrSWy1u0UVIWhNLg",
          "UXCUVsLhQJ2bxgV07x8t5w",
          "bSjFz6cBSnWfCOaqR-RWVg",
          "fhF1HPNNQlKNy5KNGfLtuw",
        ],
      },
      structured_text_inline_blocks: { item_types: [] },
      structured_text_links: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [],
      },
    },
  });

  console.log("Finalize models/block models");

  console.log('Update block model "Card service" (`card_service`)');
  await client.itemTypes.update("Om27rthoTNiekMEFeTCmjQ", {
    presentation_title_field: { id: "NgMwbrmHQKCfp4nhUK7_Yg", type: "field" },
    presentation_image_field: { id: "NgMwbrmHQKCfp4nhUK7_Yg", type: "field" },
  });

  console.log("Manage schema menu items");

  console.log(
    'Update block schema menu item for block model "Card service" (`card_service`)',
  );
  await client.schemaMenuItems.update("MJT0YTYVQZGvoJ6jY64W5Q", {
    position: 0,
    parent: { id: "VAm7EnFdQduM8T51t9jihw", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "External link" (`external_link`)',
  );
  await client.schemaMenuItems.update("WvjRSKZ3TTCDVqhXOIZ7FA", {
    position: 34,
    parent: null,
  });

  console.log(
    'Update block schema menu item for block model "Link block" (`link_block`)',
  );
  await client.schemaMenuItems.update("MnzIB4fRRoa4lmvgoDOm0A", {
    position: 35,
  });

  console.log(
    'Update block schema menu item for block model "Internal link" (`internal_link`)',
  );
  await client.schemaMenuItems.update("bl5SfY47T3O2riKCWSdkkQ", {
    position: 33,
  });

  console.log(
    'Update model schema menu item for model "Global setting" (`global_setting`)',
  );
  await client.schemaMenuItems.update("Jp4buk4gRvuY-GR3I3c6bw", {
    position: 31,
  });

  console.log(
    'Update block schema menu item for block model "Download link" (`download_link`)',
  );
  await client.schemaMenuItems.update("OcTQpYdxREafOJ0nYnTJZA", {
    position: 32,
  });

  console.log(
    'Update model schema menu item for model "Schema migration" (`schema_migration`)',
  );
  await client.schemaMenuItems.update("OfZFdzftQBCRJllOPQzjjA", {
    position: 30,
  });
}
