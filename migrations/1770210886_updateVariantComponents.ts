import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Manage upload filters");

  console.log('Update settings of plugin "Visual Select"');
  await client.plugins.update("SEKZYn5iRdWsSRZfVcxUmw", {
    parameters: {
      presets:
        '{\n  "backgroundColors": [\n    {\n      "name": "Default",\n      "type": "color",\n      "display": "#ffffff",\n      "value": "default"\n    },\n    {\n      "name": "Lighter",\n      "type": "color",\n      "display": "#F2F7FC",\n      "value": "lighter"\n    },\n    {\n      "name": "Primary",\n      "type": "color",\n      "display": "#0066cc",\n      "value": "primary"\n    },\n    {\n      "name": "Dark",\n      "type": "color",\n      "display": "#003366",\n      "value": "dark"\n    }\n  ],\n  "backgroundHeroColors": [\n    {\n      "name": "Default",\n      "type": "color",\n      "display": "#ffffff",\n      "value": "default"\n    },\n    {\n      "name": "Lighter",\n      "type": "color",\n      "display": "#F2F7FC",\n      "value": "lighter"\n    },\n    {\n      "name": "Primary",\n      "type": "color",\n      "display": "#0066cc",\n      "value": "primary"\n    },\n    {\n      "name": "Dark",\n      "type": "color",\n      "display": "#\u2068\u2068\u2068004D99",\n      "value": "dark"\n    }\n  ],\n  "backgroundColorsNoPrimary": [\n    {\n      "name": "Default",\n      "type": "color",\n      "display": "#ffffff",\n      "value": "default"\n    },\n    {\n      "name": "Lighter",\n      "type": "color",\n      "display": "#F2F7FC",\n      "value": "lighter"\n    },\n    {\n      "name": "Dark",\n      "type": "color",\n      "display": "#003366",\n      "value": "dark"\n    }\n  ],\n  "backgroundLightColors": [\n    {\n      "name": "Default",\n      "type": "color",\n      "display": "#ffffff",\n      "value": "default"\n    },\n    {\n      "name": "Lighter",\n      "type": "color",\n      "display": "#F2F7FC",\n      "value": "lighter"\n    }\n  ],\n  "iconList": [\n    {\n      "name": "Cloud Italia logo",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1768311105-cloud-logo.svg",\n      "value": "https://www.datocms-assets.com/166118/1768311105-cloud-logo.svg"\n    },\n    {\n      "name": "Slack",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1768312333-slack.svg",\n      "value": "https://www.datocms-assets.com/166118/1768312333-slack.svg"\n    },\n    {\n      "name": "DTD Logo",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1768312333-logo-dtd.svg",\n      "value": "https://www.datocms-assets.com/166118/1768312333-logo-dtd.svg"\n    },\n    {\n      "name": "Github",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1768312333-github.svg",\n      "value": "https://www.datocms-assets.com/166118/1768312333-github.svg"\n    },\n    {\n      "name": "It logo",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1768312333-it-logo-1.svg",\n      "value": "https://www.datocms-assets.com/166118/1768312333-it-logo-1.svg"\n    },\n    {\n      "name": "Web",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1768312594-bring_your_own_ip.svg",\n      "value": "https://www.datocms-assets.com/166118/1768312594-bring_your_own_ip.svg"\n    },\n    {\n      "name": "Foggy",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1768312594-foggy.svg",\n      "value": "https://www.datocms-assets.com/166118/1768312594-foggy.svg"\n    },\n    {\n      "name": "Currency",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1768312594-currency_exchange.svg",\n      "value": "https://www.datocms-assets.com/166118/1768312594-currency_exchange.svg"\n    },\n    {\n      "name": "Checkbox",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1768313676-thumb.svg",\n      "value": "https://www.datocms-assets.com/166118/1768313676-thumb.svg"\n    }\n  ]\n}',
    },
  });

  console.log("Create new models/block models");

  console.log('Create block model "Note link" (`callout_link`)');
  await client.itemTypes.create(
    {
      id: "TeeBFEKKQ02NG3V9Xstrvw",
      name: "Note link",
      api_key: "callout_link",
      modular_block: true,
      draft_saving_active: false,
      hint: "https://www.datocms-assets.com/166118/1769000875-note.png",
      inverse_relationships_enabled: false,
    },
    {
      skip_menu_item_creation: true,
      schema_menu_item_id: "Xr5VyubHTbasa0Ezfevrjg",
    },
  );

  console.log("Creating new fields/fieldsets");

  console.log(
    'Create Single-line string field "Title" (`title`) in block model "Note link" (`callout_link`)',
  );
  await client.fields.create("TeeBFEKKQ02NG3V9Xstrvw", {
    id: "AdaRqNrXS_WsAskO_CFtvQ",
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
    'Create Multiple-paragraph text field "Paragraph" (`paragraph`) in block model "Note link" (`callout_link`)',
  );
  await client.fields.create("TeeBFEKKQ02NG3V9Xstrvw", {
    id: "QrV6mFwoSgeXK1dbl8oU_Q",
    label: "Paragraph",
    field_type: "text",
    api_key: "paragraph",
    validators: { required: {} },
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
    'Create Modular Content (Single block) field "Link " (`link`) in block model "Note link" (`callout_link`)',
  );
  await client.fields.create("TeeBFEKKQ02NG3V9Xstrvw", {
    id: "CobGsOFfTCm92y-MtEGvNg",
    label: "Link ",
    field_type: "single_block",
    api_key: "link",
    validators: {
      single_block_blocks: { item_types: ["fhF1HPNNQlKNy5KNGfLtuw"] },
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
    'Create Single-line string field "Visually hidden" (`visually_hidden`) in block model "Note link" (`callout_link`)',
  );
  await client.fields.create("TeeBFEKKQ02NG3V9Xstrvw", {
    id: "IzqiFY5JQ5CCqARsXObgGg",
    label: "Visually hidden",
    field_type: "string",
    api_key: "visually_hidden",
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    default_value: null,
  });

  console.log(
    'Create Single asset field "Background image for mobile" (`background_image_for_mobile`) in block model "Hero" (`hero`)',
  );
  await client.fields.create("Awg0gTrzT1WtWycAQ5I-cw", {
    id: "SD2--SBsSEmXqxl8llYnxw",
    label: "Background image for mobile",
    field_type: "file",
    api_key: "background_image_for_mobile",
    appearance: { addons: [], editor: "file", parameters: {} },
    default_value: null,
  });

  console.log(
    'Create Single-line string field "Read less label" (`read_less_label`) in block model "Webinar transcript" (`action_card`)',
  );
  await client.fields.create("GEMBk406SjG8lMlYBVNfVQ", {
    id: "eAc9YI1qRZqUUFOYg3bPJA",
    label: "Read less label",
    field_type: "string",
    api_key: "read_less_label",
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    default_value: null,
  });

  console.log(
    'Create Single-line string field "Background color" (`background_color`) in block model "Text + statistic" (`text_statistic`)',
  );
  await client.fields.create("Y90FAsoITzyeuRK7Q4PtiQ", {
    id: "VuHTPHyyShWiANFy-_enLg",
    label: "Background color",
    field_type: "string",
    api_key: "background_color",
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "SEKZYn5iRdWsSRZfVcxUmw",
      parameters: {
        collection:
          '{\n  "extends": [\n    "backgroundColorsNoPrimary"\n  ]\n}',
      },
      field_extension: "visualSelect",
    },
    default_value: "default",
  });

  console.log("Destroy fields in existing models/block models");

  console.log(
    'Delete Single-line string field "Size" (`size`) in block model "Support CTA section" (`support_cta_section`)',
  );
  await client.fields.destroy("LvFONX8EQvaN34m0336NJA");

  console.log("Update existing fields/fieldsets");

  console.log(
    'Update Single asset field "Background image for mobile" (`background_image_for_mobile`) in block model "Hero" (`hero`)',
  );
  await client.fields.update("SD2--SBsSEmXqxl8llYnxw", { position: 4 });

  console.log(
    'Update Single-line string field "Background color" (`background_color`) in block model "Hero" (`hero`)',
  );
  await client.fields.update("TZSbljynRUe9p7lYT4xJLA", {
    appearance: {
      addons: [],
      editor: "SEKZYn5iRdWsSRZfVcxUmw",
      parameters: {
        collection: '{\n  "extends": [\n    "backgroundHeroColors"\n  ]\n}',
      },
      field_extension: "visualSelect",
    },
  });

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
          "SYB-ZWCvQq2KdO_yrUxS2g",
          "UKWQ1GcrSWy1u0UVIWhNLg",
          "UXCUVsLhQJ2bxgV07x8t5w",
          "XZTLQo7ARTilBE8YnsreSg",
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
    'Update Structured text field "Content" (`content`) in model "Article" (`article`)',
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
          "SYB-ZWCvQq2KdO_yrUxS2g",
          "UKWQ1GcrSWy1u0UVIWhNLg",
          "UXCUVsLhQJ2bxgV07x8t5w",
          "XZTLQo7ARTilBE8YnsreSg",
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
    'Update Modular Content (Single block) field "Resourses" (`resourses`) in block model "Webinar description" (`webinar_description`)',
  );
  await client.fields.update("Um7l_HfXTaiqILhpU5OXeA", {
    appearance: {
      addons: [],
      editor: "framed_single_block",
      parameters: { start_collapsed: false },
    },
  });

  console.log(
    'Update Single-line string field "Background color" (`background_color`) in block model "Text + statistic" (`text_statistic`)',
  );
  await client.fields.update("VuHTPHyyShWiANFy-_enLg", { position: 1 });

  console.log(
    'Update Modular Content (Multiple blocks) field "Content" (`content`) in model "Catalogue" (`catalogue`)',
  );
  await client.fields.update("LSx7XQO0Q8q3Hlo1MApE7w", {
    validators: {
      rich_text_blocks: {
        item_types: [
          "Awg0gTrzT1WtWycAQ5I-cw",
          "TeeBFEKKQ02NG3V9Xstrvw",
          "T9sEB1HSTya0PUQkEV2i_A",
        ],
      },
    },
  });

  console.log("Finalize models/block models");

  console.log('Update block model "Note link" (`callout_link`)');
  await client.itemTypes.update("TeeBFEKKQ02NG3V9Xstrvw", {
    presentation_title_field: { id: "AdaRqNrXS_WsAskO_CFtvQ", type: "field" },
  });
}
