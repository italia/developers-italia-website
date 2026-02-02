import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Manage upload filters");

  console.log('Update settings of plugin "Visual Select"');
  await client.plugins.update("SEKZYn5iRdWsSRZfVcxUmw", {
    parameters: {
      presets:
        '{\n  "backgroundColors": [\n    {\n      "name": "Default",\n      "type": "color",\n      "display": "#ffffff",\n      "value": "default"\n    },\n    {\n      "name": "Lighter",\n      "type": "color",\n      "display": "#F2F7FC",\n      "value": "lighter"\n    },\n    {\n      "name": "Primary",\n      "type": "color",\n      "display": "#0066cc",\n      "value": "primary"\n    },\n    {\n      "name": "Dark",\n      "type": "color",\n      "display": "#003366",\n      "value": "dark"\n    }\n  ],\n  "backgroundLightColors": [\n    {\n      "name": "Default",\n      "type": "color",\n      "display": "#ffffff",\n      "value": "default"\n    },\n    {\n      "name": "Lighter",\n      "type": "color",\n      "display": "#F2F7FC",\n      "value": "lighter"\n    }\n  ],\n  "iconList": [\n    {\n      "name": "Cloud Italia logo",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1768311105-cloud-logo.svg",\n      "value": "https://www.datocms-assets.com/166118/1768311105-cloud-logo.svg"\n    },\n    {\n      "name": "Slack",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1768312333-slack.svg",\n      "value": "https://www.datocms-assets.com/166118/1768312333-slack.svg"\n    },\n    {\n      "name": "DTD Logo",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1768312333-logo-dtd.svg",\n      "value": "https://www.datocms-assets.com/166118/1768312333-logo-dtd.svg"\n    },\n    {\n      "name": "Github",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1768312333-github.svg",\n      "value": "https://www.datocms-assets.com/166118/1768312333-github.svg"\n    },\n    {\n      "name": "It logo",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1768312333-it-logo-1.svg",\n      "value": "https://www.datocms-assets.com/166118/1768312333-it-logo-1.svg"\n    },\n    {\n      "name": "Web",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1768312594-bring_your_own_ip.svg",\n      "value": "https://www.datocms-assets.com/166118/1768312594-bring_your_own_ip.svg"\n    },\n    {\n      "name": "Foggy",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1768312594-foggy.svg",\n      "value": "https://www.datocms-assets.com/166118/1768312594-foggy.svg"\n    },\n    {\n      "name": "Currency",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1768312594-currency_exchange.svg",\n      "value": "https://www.datocms-assets.com/166118/1768312594-currency_exchange.svg"\n    },\n    {\n      "name": "Checkbox",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1768313676-thumb.svg",\n      "value": "https://www.datocms-assets.com/166118/1768313676-thumb.svg"\n    }\n  ]\n}',
    },
  });

  console.log("Creating new fields/fieldsets");

  console.log(
    'Create Single-line string field "Logo select" (`logo_select`) in model "Layout" (`layout`)',
  );
  await client.fields.create("P3HYBb3RTOG7iNYtcVNAEg", {
    id: "P1S4SHnNRNGg03b_iy8REQ",
    label: "Logo select",
    field_type: "string",
    api_key: "logo_select",
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
    fieldset: { id: "URrOLzACQECEzErQ2FQqaw", type: "fieldset" },
  });

  console.log(
    'Create Single-line string field "Icon select" (`icon_select`) in block model "Data container" (`data_container`)',
  );
  await client.fields.create("b6Qg1zeoSA-2m00XNDSM4Q", {
    id: "JKIoZOqmQ_GT6b9CSO37gw",
    label: "Icon select",
    field_type: "string",
    api_key: "icon_select",
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
    'Create Single-line string field "Icon select" (`icon_select`) in block model "Card presentation banner" (`channel`)',
  );
  await client.fields.create("boYJ_9tCSI6ARMr6HycKkA", {
    id: "W61GtI6uRzeG7wY197Jy1A",
    label: "Icon select",
    field_type: "string",
    api_key: "icon_select",
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
    'Create Single-line string field "Icon select" (`icon_select`) in block model "Card editorial with icon" (`card_editorial_with_icon`)',
  );
  await client.fields.create("P2lZlFmYQQKAy4hJdlrI8g", {
    id: "N7G4Z3McTKC9PnSinJ0-hw",
    label: "Icon select",
    field_type: "string",
    api_key: "icon_select",
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
    'Create Single-line string field "Icon select" (`icon_select`) in block model "Icon list item" (`icon_list_item`)',
  );
  await client.fields.create("bxrAaQn0SDyrMe0MpXlpYA", {
    id: "I-_hKDgDSY65k2gvpr16Ew",
    label: "Icon select",
    field_type: "string",
    api_key: "icon_select",
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
    'Create Single-line string field "Icon select" (`icon_select`) in block model "Brand" (`brand`)',
  );
  await client.fields.create("CTrt_dG9RcuokSxQmsa5TQ", {
    id: "WE54rogWRVSH6cZ2F1VxNg",
    label: "Icon select",
    field_type: "string",
    api_key: "icon_select",
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

  console.log("Destroy fields in existing models/block models");

  console.log(
    'Delete Single asset field "Icon" (`icon`) in block model "Data container" (`data_container`)',
  );
  await client.fields.destroy("G38hRnwNSoiYiDjNKEMpLw");

  console.log(
    'Delete Single asset field "Icon" (`icon`) in block model "Card presentation banner" (`channel`)',
  );
  await client.fields.destroy("V2JYHJVbRlelMcXlZSi0Xw");

  console.log(
    'Delete Single asset field "Icon" (`icon`) in block model "Card editorial with icon" (`card_editorial_with_icon`)',
  );
  await client.fields.destroy("H4Se7cI3SrGMXUK9HHfshg");

  console.log(
    'Delete Single asset field "Icon" (`icon`) in block model "Icon list item" (`icon_list_item`)',
  );
  await client.fields.destroy("DdX7axynThuH_gtnKDiS5A");

  console.log(
    'Delete Single asset field "Icon" (`icon`) in block model "Brand" (`brand`)',
  );
  await client.fields.destroy("a5n-O4INRAGIA-nV3Z8Ksg");

  console.log("Update existing fields/fieldsets");

  console.log(
    'Update Single-line string field "Logo select" (`logo_select`) in model "Layout" (`layout`)',
  );
  await client.fields.update("P1S4SHnNRNGg03b_iy8REQ", { position: 1 });

  console.log(
    'Update Single-line string field "Icon select" (`icon_select`) in block model "Data container" (`data_container`)',
  );
  await client.fields.update("JKIoZOqmQ_GT6b9CSO37gw", { position: 3 });

  console.log(
    'Update Single-line string field "info" (`info`) in block model "Data container" (`data_container`)',
  );
  await client.fields.update("cxW7IrvSSLaIOjucR-s65Q", { position: 2 });

  console.log(
    'Update Single-line string field "Icon select" (`icon_select`) in block model "Card presentation banner" (`channel`)',
  );
  await client.fields.update("W61GtI6uRzeG7wY197Jy1A", { position: 3 });

  console.log(
    'Update Single-line string field "Icon select" (`icon_select`) in block model "Card editorial with icon" (`card_editorial_with_icon`)',
  );
  await client.fields.update("N7G4Z3McTKC9PnSinJ0-hw", { position: 3 });

  console.log(
    'Update Multiple-paragraph text field "Description" (`description`) in block model "Card editorial with icon" (`card_editorial_with_icon`)',
  );
  await client.fields.update("Hk5jayHTQBSen-TARZXeIg", { position: 2 });

  console.log(
    'Update Single-line string field "Icon select" (`icon_select`) in block model "Icon list item" (`icon_list_item`)',
  );
  await client.fields.update("I-_hKDgDSY65k2gvpr16Ew", { position: 1 });

  console.log(
    'Update Single-line string field "Icon select" (`icon_select`) in block model "Brand" (`brand`)',
  );
  await client.fields.update("WE54rogWRVSH6cZ2F1VxNg", { position: 2 });

  console.log("Finalize models/block models");

  console.log('Update block model "Data container" (`data_container`)');
  await client.itemTypes.update("b6Qg1zeoSA-2m00XNDSM4Q", {
    presentation_image_field: null,
  });

  console.log('Update block model "Card presentation banner" (`channel`)');
  await client.itemTypes.update("boYJ_9tCSI6ARMr6HycKkA", {
    presentation_image_field: null,
  });

  console.log(
    'Update block model "Card editorial with icon" (`card_editorial_with_icon`)',
  );
  await client.itemTypes.update("P2lZlFmYQQKAy4hJdlrI8g", {
    presentation_image_field: null,
  });

  console.log('Update block model "Icon list item" (`icon_list_item`)');
  await client.itemTypes.update("bxrAaQn0SDyrMe0MpXlpYA", {
    presentation_image_field: null,
  });

  console.log('Update block model "Brand" (`brand`)');
  await client.itemTypes.update("CTrt_dG9RcuokSxQmsa5TQ", {
    presentation_image_field: null,
  });
}
