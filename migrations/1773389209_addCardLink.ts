import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Create new models/block models");

  console.log('Create block model "Link block" (`link_block`)');
  await client.itemTypes.create(
    {
      id: "aeygeiQFTXeez9IeCl6Ypw",
      name: "Link block",
      api_key: "link_block",
      modular_block: true,
      draft_saving_active: false,
      hint: "",
      inverse_relationships_enabled: false,
    },
    {
      skip_menu_item_creation: true,
      schema_menu_item_id: "MnzIB4fRRoa4lmvgoDOm0A",
    },
  );

  console.log('Create block model "Card Link" (`card_link`)');
  await client.itemTypes.create(
    {
      id: "bF1SMG-UQMyunhfCxlObLA",
      name: "Card Link",
      api_key: "card_link",
      modular_block: true,
      draft_saving_active: false,
      hint: "",
      inverse_relationships_enabled: false,
    },
    {
      skip_menu_item_creation: true,
      schema_menu_item_id: "KVpU7PTQQaaocu6TtULA9Q",
    },
  );

  console.log('Create block model "Card link list" (`card_link_list`)');
  await client.itemTypes.create(
    {
      id: "eYC6ITddSYSZVRiO1Ldt3g",
      name: "Card link list",
      api_key: "card_link_list",
      modular_block: true,
      draft_saving_active: false,
      hint: "https://www.datocms-assets.com/166118/1769598680-vertical-cards-container.png",
      inverse_relationships_enabled: false,
    },
    {
      skip_menu_item_creation: true,
      schema_menu_item_id: "UsEnKBG_SL-L1cnL6WQx6A",
    },
  );

  console.log("Creating new fields/fieldsets");

  console.log(
    'Create Single link field "Link " (`link`) in block model "Link block" (`link_block`)',
  );
  await client.fields.create("aeygeiQFTXeez9IeCl6Ypw", {
    id: "cqsgj2QjQ-WRsAEbeG_6og",
    label: "Link ",
    field_type: "link",
    api_key: "link",
    validators: {
      item_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [
          "MK1luhfjT5-vyrmLiB0Qeg",
          "PeXbTb7tRvCzyyICsUoedw",
          "T-HlXkO8SEWb8JYh5FuYCQ",
          "ZO62cMfeSpmP2tBt7g_u6g",
          "c5DDst-qS8q_9mYv71XK9w",
        ],
      },
    },
    appearance: {
      addons: [],
      editor: "link_select",
      parameters: { filters: [] },
    },
    default_value: null,
  });

  console.log(
    'Create Single-line string field "External url" (`external_url`) in block model "Link block" (`link_block`)',
  );
  await client.fields.create("aeygeiQFTXeez9IeCl6Ypw", {
    id: "MYFpLcVdTzeAkLXRRrU1YA",
    label: "External url",
    field_type: "string",
    api_key: "external_url",
    validators: { format: { predefined_pattern: "url" } },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    default_value: null,
  });

  console.log(
    'Create Single-line string field "Title" (`title`) in block model "Card Link" (`card_link`)',
  );
  await client.fields.create("bF1SMG-UQMyunhfCxlObLA", {
    id: "bRTrmVATRu2DTiGHx0JtKA",
    label: "Title",
    field_type: "string",
    api_key: "title",
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    default_value: null,
  });

  console.log(
    'Create Multiple-paragraph text field "Paragraph" (`paragraph`) in block model "Card Link" (`card_link`)',
  );
  await client.fields.create("bF1SMG-UQMyunhfCxlObLA", {
    id: "VMZ1wiSZRUeP-8GM_Jw3Uw",
    label: "Paragraph",
    field_type: "text",
    api_key: "paragraph",
    appearance: {
      addons: [],
      editor: "markdown",
      parameters: {
        toolbar: [
          "heading",
          "bold",
          "italic",
          "strikethrough",
          "code",
          "unordered_list",
          "ordered_list",
          "quote",
          "link",
          "image",
          "fullscreen",
        ],
      },
    },
    default_value: null,
  });

  console.log(
    'Create Single asset field "Image" (`image`) in block model "Card Link" (`card_link`)',
  );
  await client.fields.create("bF1SMG-UQMyunhfCxlObLA", {
    id: "RhLbtGx7R427Vo7zhX0FCw",
    label: "Image",
    field_type: "file",
    api_key: "image",
    validators: { required: {} },
    appearance: { addons: [], editor: "file", parameters: {} },
    default_value: null,
  });

  console.log(
    'Create Modular Content (Single block) field "Link" (`link`) in block model "Card Link" (`card_link`)',
  );
  await client.fields.create("bF1SMG-UQMyunhfCxlObLA", {
    id: "W_F3ZyuRTVK-mYhtdbfa7w",
    label: "Link",
    field_type: "single_block",
    api_key: "link",
    hint: "Scegli il tipo e compila solo il campo corrispondente",
    validators: {
      single_block_blocks: { item_types: ["aeygeiQFTXeez9IeCl6Ypw"] },
      required: {},
    },
    appearance: {
      addons: [],
      editor: "framed_single_block",
      parameters: { start_collapsed: false },
    },
    default_value: null,
  });

  console.log(
    'Create Single-line string field "Background color" (`background_color`) in block model "Card link list" (`card_link_list`)',
  );
  await client.fields.create("eYC6ITddSYSZVRiO1Ldt3g", {
    id: "JPfQgJr8Sk2gl2eCKyUUYA",
    label: "Background color",
    field_type: "string",
    api_key: "background_color",
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "SEKZYn5iRdWsSRZfVcxUmw",
      parameters: {
        collection: '{\n  "extends": [\n    "backgroundColors"\n  ]\n}',
      },
      field_extension: "visualSelect",
    },
    default_value: null,
  });

  console.log(
    'Create Single-line string field "Title" (`title`) in block model "Card link list" (`card_link_list`)',
  );
  await client.fields.create("eYC6ITddSYSZVRiO1Ldt3g", {
    id: "QL3FOyqbQtO2tVicX1Debg",
    label: "Title",
    field_type: "string",
    api_key: "title",
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    default_value: null,
  });

  console.log(
    'Create Modular Content (Multiple blocks) field "List content" (`list_content`) in block model "Card link list" (`card_link_list`)',
  );
  await client.fields.create("eYC6ITddSYSZVRiO1Ldt3g", {
    id: "U3LOjs0cRSayDRsYauGAzw",
    label: "List content",
    field_type: "rich_text",
    api_key: "list_content",
    validators: {
      rich_text_blocks: { item_types: ["bF1SMG-UQMyunhfCxlObLA"] },
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
    'Update Modular Content (Multiple blocks) field "Content" (`content`) in model "Page" (`page`)',
  );
  await client.fields.update("GF7gIgNTSi6ithc2WsLnyg", {
    validators: {
      rich_text_blocks: {
        item_types: [
          "Awg0gTrzT1WtWycAQ5I-cw",
          "BqiyK44MT9eCdscz8pcESg",
          "BttQ-GOdSDCjRZinK2Hevw",
          "EAJfEdPjRVy9SJIOnQDM_w",
          "ISQ-koGkTSSMpTeQ7yX72w",
          "PtFD-_7RS_6HmJAq7R2c9g",
          "RH3d7bWeSlSt4w-W7s3_wg",
          "R9Sa8uDfTpSRaWMISQiDFg",
          "SC9fd201RBSV7s31u6zCKg",
          "UKWQ1GcrSWy1u0UVIWhNLg",
          "c2sA3G6uT_q4EBkYwbUqaw",
          "eYC6ITddSYSZVRiO1Ldt3g",
          "eoeVTiI4S362w9-yoe7i6g",
        ],
      },
    },
  });

  console.log(
    'Update Modular Content (Multiple blocks) field "Content" (`content`) in model "Homepage" (`homepage`)',
  );
  await client.fields.update("WZVHotolRE6evlVhD7wjTg", {
    validators: {
      rich_text_blocks: {
        item_types: [
          "Awg0gTrzT1WtWycAQ5I-cw",
          "BttQ-GOdSDCjRZinK2Hevw",
          "PtFD-_7RS_6HmJAq7R2c9g",
          "RH3d7bWeSlSt4w-W7s3_wg",
          "R9Sa8uDfTpSRaWMISQiDFg",
          "U50kKrnkSua6L3eIAEFHhA",
          "Y90FAsoITzyeuRK7Q4PtiQ",
          "eYC6ITddSYSZVRiO1Ldt3g",
        ],
      },
    },
  });

  console.log("Finalize models/block models");

  console.log('Update block model "Link block" (`link_block`)');
  await client.itemTypes.update("aeygeiQFTXeez9IeCl6Ypw", {
    presentation_title_field: { id: "MYFpLcVdTzeAkLXRRrU1YA", type: "field" },
  });

  console.log('Update block model "Card Link" (`card_link`)');
  await client.itemTypes.update("bF1SMG-UQMyunhfCxlObLA", {
    presentation_title_field: { id: "bRTrmVATRu2DTiGHx0JtKA", type: "field" },
    presentation_image_field: { id: "RhLbtGx7R427Vo7zhX0FCw", type: "field" },
  });

  console.log('Update block model "Card link list" (`card_link_list`)');
  await client.itemTypes.update("eYC6ITddSYSZVRiO1Ldt3g", {
    presentation_title_field: { id: "QL3FOyqbQtO2tVicX1Debg", type: "field" },
  });

  console.log("Manage schema menu items");

  console.log(
    'Update block schema menu item for block model "Card link list" (`card_link_list`)',
  );
  await client.schemaMenuItems.update("UsEnKBG_SL-L1cnL6WQx6A", {
    position: 0,
    parent: { id: "N98z0TCPROK9ijNG3DlE2A", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "Card Link" (`card_link`)',
  );
  await client.schemaMenuItems.update("KVpU7PTQQaaocu6TtULA9Q", {
    position: 0,
    parent: { id: "WMk6e5CwQCOCiC_iV0e-DA", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "Internal link" (`internal_link`)',
  );
  await client.schemaMenuItems.update("bl5SfY47T3O2riKCWSdkkQ", {
    position: 33,
  });

  console.log('Update model schema menu item "Articles"');
  await client.schemaMenuItems.update("HfMDZsX6RS6OJCfEGE2cUw", {
    position: 14,
  });

  console.log(
    'Update model schema menu item for model "Global setting" (`global_setting`)',
  );
  await client.schemaMenuItems.update("Jp4buk4gRvuY-GR3I3c6bw", {
    position: 31,
  });

  console.log('Update model schema menu item "Pages"');
  await client.schemaMenuItems.update("JGmx124qRvqJiP3rJ4Cufw", {
    position: 15,
  });

  console.log(
    'Update block schema menu item for block model "Download link" (`download_link`)',
  );
  await client.schemaMenuItems.update("OcTQpYdxREafOJ0nYnTJZA", {
    position: 32,
  });

  console.log('Update model schema menu item "Webinar"');
  await client.schemaMenuItems.update("C-EXbRV_TfOQEvjqKoJ-Ew", {
    position: 23,
  });

  console.log('Update model schema menu item "Resource"');
  await client.schemaMenuItems.update("c42xanSrTcGTzZUF1rsuzw", {
    position: 26,
  });

  console.log('Update block schema menu item "Atoms"');
  await client.schemaMenuItems.update("WMk6e5CwQCOCiC_iV0e-DA", {
    position: 13,
  });

  console.log('Update block schema menu item "Navigation"');
  await client.schemaMenuItems.update("N4pGvMpZQoa7NDkSri-tlA", {
    position: 27,
  });

  console.log('Update model schema menu item "News"');
  await client.schemaMenuItems.update("Tk0nCGLoTRehKT5ZSXBz5A", {
    position: 25,
  });

  console.log('Update model schema menu item "Chart"');
  await client.schemaMenuItems.update("D63GZe7CSX6xqQmqjQtG9Q", {
    position: 17,
  });

  console.log('Update model schema menu item "Insight"');
  await client.schemaMenuItems.update("Q96U2sdZQ3yes8_lF6EUcA", {
    position: 18,
  });

  console.log('Update model schema menu item "Story"');
  await client.schemaMenuItems.update("HajK_tQXSGKJ5foj8eu1jQ", {
    position: 24,
  });

  console.log(
    'Update model schema menu item for model "Schema migration" (`schema_migration`)',
  );
  await client.schemaMenuItems.update("OfZFdzftQBCRJllOPQzjjA", {
    position: 30,
  });

  console.log('Update block schema menu item "List"');
  await client.schemaMenuItems.update("fc2HKkRSSq2MAOVxit4j9Q", {
    position: 28,
  });

  console.log(
    'Update block schema menu item for block model "Link block" (`link_block`)',
  );
  await client.schemaMenuItems.update("MnzIB4fRRoa4lmvgoDOm0A", {
    position: 34,
  });
}
