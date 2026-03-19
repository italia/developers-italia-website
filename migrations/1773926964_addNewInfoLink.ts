import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Create new models/block models");

  console.log('Create block model "List external link" (`list_external_link`)');
  await client.itemTypes.create(
    {
      id: "Vtse6ZCgT2uB4Uh3wh0ikg",
      name: "List external link",
      api_key: "list_external_link",
      modular_block: true,
      draft_saving_active: false,
      inverse_relationships_enabled: false,
    },
    {
      skip_menu_item_creation: true,
      schema_menu_item_id: "HF7TC7qySTKyAELTYZGoFQ",
    },
  );

  console.log("Creating new fields/fieldsets");

  console.log(
    'Create Modular Content (Multiple blocks) field "links" (`links`) in block model "List external link" (`list_external_link`)',
  );
  await client.fields.create("Vtse6ZCgT2uB4Uh3wh0ikg", {
    id: "BHNYLiqCQqefg9balw4xdw",
    label: "links",
    field_type: "rich_text",
    api_key: "links",
    validators: {
      rich_text_blocks: { item_types: ["fhF1HPNNQlKNy5KNGfLtuw"] },
    },
    appearance: {
      addons: [],
      editor: "rich_text",
      parameters: { start_collapsed: false },
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
          "Vtse6ZCgT2uB4Uh3wh0ikg",
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
    'Update Modular Content (Multiple blocks) field "Links" (`links`) in block model "List item with resources" (`list_item_resource`)',
  );
  await client.fields.update("EIIvI2vuTtqtoKaUXuUBVQ", {
    validators: {
      rich_text_blocks: {
        item_types: [
          "Nwki1YZWRhqgFtIM3Hdgqw",
          "e0A0ntUCRWSlbmg1-sSF0A",
          "fhF1HPNNQlKNy5KNGfLtuw",
        ],
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
          "Vtse6ZCgT2uB4Uh3wh0ikg",
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

  console.log("Manage menu items");

  console.log('Update menu item "Webinar ed eventi"');
  await client.menuItems.update("GHKJ1kfCSTqWtw900Tgq2w", { position: 4 });

  console.log('Update menu item "Contenuto esterno"');
  await client.menuItems.update("O75KPv-JQsahJ9TbZ_hd_Q", { position: 6 });

  console.log('Update menu item "Articoli interni senza sidebar"');
  await client.menuItems.update("SF3QYUoPS-SA8qFDRWfZMA", { position: 3 });

  console.log('Update menu item "Lista di link e risorse"');
  await client.menuItems.update("dEfittUwTb64JZGR_S2BJQ", { position: 5 });

  console.log("Manage schema menu items");

  console.log(
    'Update block schema menu item for block model "List external link" (`list_external_link`)',
  );
  await client.schemaMenuItems.update("HF7TC7qySTKyAELTYZGoFQ", {
    parent: { id: "fc2HKkRSSq2MAOVxit4j9Q", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "List item with resources" (`list_item_resource`)',
  );
  await client.schemaMenuItems.update("TSlMhyvFSCClFDc-XYmsvA", {
    position: 18,
  });

  console.log('Update model schema menu item "Articles"');
  await client.schemaMenuItems.update("HfMDZsX6RS6OJCfEGE2cUw", {
    position: 13,
  });

  console.log('Update model schema menu item "Pages"');
  await client.schemaMenuItems.update("JGmx124qRvqJiP3rJ4Cufw", {
    position: 14,
  });

  console.log('Update block schema menu item "Section block"');
  await client.schemaMenuItems.update("GfAca4qoTAegUR6oaGmmxQ", {
    position: 8,
  });

  console.log('Update block schema menu item "Atoms"');
  await client.schemaMenuItems.update("WMk6e5CwQCOCiC_iV0e-DA", {
    position: 12,
  });

  console.log('Update block schema menu item "Navigation"');
  await client.schemaMenuItems.update("N4pGvMpZQoa7NDkSri-tlA", {
    position: 26,
  });

  console.log(
    'Update block schema menu item "Components Articles and Resources"',
  );
  await client.schemaMenuItems.update("VAm7EnFdQduM8T51t9jihw", {
    position: 5,
  });

  console.log('Update block schema menu item "Components Catalogue Pages"');
  await client.schemaMenuItems.update("PHPtVvVcT6Sm8UP585yU1A", {
    position: 6,
  });

  console.log('Update block schema menu item "Components Global Settings"');
  await client.schemaMenuItems.update("B9pAqZC-R_aNW2aep_TvTg", {
    position: 7,
  });

  console.log(
    'Update block schema menu item "Components Home and Standard Pages"',
  );
  await client.schemaMenuItems.update("N98z0TCPROK9ijNG3DlE2A", {
    position: 4,
  });

  console.log('Update block schema menu item "Old"');
  await client.schemaMenuItems.update("f6iIC8NsQMKvtVgMJ61F-g", {
    position: 31,
  });

  console.log(
    'Update model schema menu item for model "Global setting" (`global_setting`)',
  );
  await client.schemaMenuItems.update("Jp4buk4gRvuY-GR3I3c6bw", {
    position: 30,
  });

  console.log('Update model schema menu item "Webinar"');
  await client.schemaMenuItems.update("C-EXbRV_TfOQEvjqKoJ-Ew", {
    position: 22,
  });

  console.log('Update model schema menu item "Resource"');
  await client.schemaMenuItems.update("c42xanSrTcGTzZUF1rsuzw", {
    position: 25,
  });

  console.log('Update block schema menu item "Components"');
  await client.schemaMenuItems.update("LIGiN-0eTfea06jXmCO0vA", {
    position: 10,
  });

  console.log('Update model schema menu item "News"');
  await client.schemaMenuItems.update("Tk0nCGLoTRehKT5ZSXBz5A", {
    position: 24,
  });

  console.log('Update model schema menu item "Chart"');
  await client.schemaMenuItems.update("D63GZe7CSX6xqQmqjQtG9Q", {
    position: 16,
  });

  console.log('Update model schema menu item "Insight"');
  await client.schemaMenuItems.update("Q96U2sdZQ3yes8_lF6EUcA", {
    position: 17,
  });

  console.log('Update model schema menu item "Story"');
  await client.schemaMenuItems.update("HajK_tQXSGKJ5foj8eu1jQ", {
    position: 23,
  });

  console.log(
    'Update model schema menu item for model "Schema migration" (`schema_migration`)',
  );
  await client.schemaMenuItems.update("OfZFdzftQBCRJllOPQzjjA", {
    position: 29,
  });

  console.log('Update block schema menu item "List"');
  await client.schemaMenuItems.update("fc2HKkRSSq2MAOVxit4j9Q", {
    position: 27,
  });
}
