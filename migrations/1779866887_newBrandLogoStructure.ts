import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Manage upload filters");

  console.log('Update settings of plugin "Visual Select"');
  await client.plugins.update("SEKZYn5iRdWsSRZfVcxUmw", {
    parameters: {
      presets:
        '{\n  "backgroundColors": [\n    {\n      "name": "Default",\n      "type": "color",\n      "display": "#ffffff",\n      "value": "default"\n    },\n    {\n      "name": "Lighter",\n      "type": "color",\n      "display": "#F2F7FC",\n      "value": "lighter"\n    },\n    {\n      "name": "Primary light",\n      "type": "color",\n      "display": "#BFDFFF",\n      "value": "primary-light"\n    },\n    {\n      "name": "Primary",\n      "type": "color",\n      "display": "#0066cc",\n      "value": "primary"\n    },\n    {\n      "name": "Dark",\n      "type": "color",\n      "display": "#17324D",\n      "value": "dark"\n    }\n  ],\n  "backgroundHeroColors": [\n    {\n      "name": "Default",\n      "type": "color",\n      "display": "#ffffff",\n      "value": "default"\n    },\n    {\n      "name": "Lighter",\n      "type": "color",\n      "display": "#F2F7FC",\n      "value": "lighter"\n    },\n    {\n      "name": "Primary",\n      "type": "color",\n      "display": "#0066cc",\n      "value": "primary"\n    }\n  ],\n  "backgroundColorsNoPrimary": [\n    {\n      "name": "Default",\n      "type": "color",\n      "display": "#ffffff",\n      "value": "default"\n    },\n    {\n      "name": "Lighter",\n      "type": "color",\n      "display": "#F2F7FC",\n      "value": "lighter"\n    },\n    {\n      "name": "Dark",\n      "type": "color",\n      "display": "#17324D",\n      "value": "dark"\n    }\n  ],\n  "backgroundLightColors": [\n    {\n      "name": "Default",\n      "type": "color",\n      "display": "#ffffff",\n      "value": "default"\n    },\n    {\n      "name": "Lighter",\n      "type": "color",\n      "display": "#F2F7FC",\n      "value": "lighter"\n    },\n    {\n      "name": "Primary light",\n      "type": "color",\n      "display": "#BFDFFF",\n      "value": "primary-light"\n    }\n  ],\n  "backgroundLightColorsNoPrimary": [\n    {\n      "name": "Default",\n      "type": "color",\n      "display": "#ffffff",\n      "value": "default"\n    },\n    {\n      "name": "Lighter",\n      "type": "color",\n      "display": "#F2F7FC",\n      "value": "lighter"\n    }\n  ],\n  "iconList": [\n    {\n      "name": "Office hours",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1775209096-office-hours.svg",\n      "value": "https://www.datocms-assets.com/166118/1775209096-office-hours.svg"\n    },\n    {\n      "name": "Github esteso",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1775209096-github-esteso.svg",\n      "value": "https://www.datocms-assets.com/166118/1775209096-github-esteso.svg"\n    },\n    {\n      "name": "Matrix esteso",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1775209096-matrix-esteso.svg",\n      "value": "https://www.datocms-assets.com/166118/1775209096-matrix-esteso.svg"\n    },\n    {\n      "name": "It forum esteso",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1775209096-it-forum-estesto.svg",\n      "value": "https://www.datocms-assets.com/166118/1775209096-it-forum-estesto.svg"\n    },\n    {\n      "name": "Docs Italia esteso",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1775209096-docs-italia-esteso.svg",\n      "value": "https://www.datocms-assets.com/166118/1775209096-docs-italia-esteso.svg"\n    },\n    {\n      "name": "Agid",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1775638631-agid.svg",\n      "value": "https://www.datocms-assets.com/166118/1775638631-agid.svg"\n    },\n    {\n      "name": "Risorse",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1774975647-risorse.svg",\n      "value": "https://www.datocms-assets.com/166118/1774975647-risorse.svg"\n    },\n    {\n      "name": "Strumenti",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1774975638-strumenti.svg",\n      "value": "https://www.datocms-assets.com/166118/1774975638-strumenti.svg"\n    },\n    {\n      "name": "Software a catalogo",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1774975638-software-a-catalogo.svg",\n      "value": "https://www.datocms-assets.com/166118/1774975638-software-a-catalogo.svg"\n    },\n    {\n      "name": "Software open source",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1774975638-software-open-source.svg",\n      "value": "https://www.datocms-assets.com/166118/1774975638-software-open-source.svg"\n    },\n    {\n      "name": "Software a riuso",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1774975638-software-a-riuso.svg",\n      "value": "https://www.datocms-assets.com/166118/1774975638-software-a-riuso.svg"\n    },\n    {\n      "name": "Governance",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1774975628-governance.svg",\n      "value": "https://www.datocms-assets.com/166118/1774975628-governance.svg"\n    },\n    {\n      "name": "Piattaforme abilitanti",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1774975628-piattaforme-abilitanti.svg",\n      "value": "https://www.datocms-assets.com/166118/1774975628-piattaforme-abilitanti.svg"\n    },\n    {\n      "name": "Documenti docs italia",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1774975628-documenti-docs-italia.svg",\n      "value": "https://www.datocms-assets.com/166118/1774975628-documenti-docs-italia.svg"\n    },\n    {\n      "name": "Community",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1774975628-community.svg",\n      "value": "https://www.datocms-assets.com/166118/1774975628-community.svg"\n    },\n    {\n      "name": "API",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1774975625-api.svg",\n      "value": "https://www.datocms-assets.com/166118/1774975625-api.svg"\n    },\n    {\n      "name": "Amministrazione",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1774975618-amministrazione.svg",\n      "value": "https://www.datocms-assets.com/166118/1774975618-amministrazione.svg"\n    },\n    {\n      "name": "Matrix",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1774259551-matrix.svg",\n      "value": "https://www.datocms-assets.com/166118/1774259551-matrix.svg"\n    },\n    {\n      "name": "Matrix white",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1774259556-matrix-white.svg",\n      "value": "https://www.datocms-assets.com/166118/1774259556-matrix-white.svg"\n    },\n    {\n      "name": "IT logo",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1770033512-it-logo.svg",\n      "value": "https://www.datocms-assets.com/166118/1770033512-it-logo.svg"\n    },\n    {\n      "name": "IT logo white",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1770300598-it-logo-white.svg",\n      "value": "https://www.datocms-assets.com/166118/1770300598-it-logo-white.svg"\n    },\n    {\n      "name": "Slack",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1768312333-slack.svg",\n      "value": "https://www.datocms-assets.com/166118/1768312333-slack.svg"\n    },\n    {\n      "name": "Slack white",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1770300598-slack-white.svg",\n      "value": "https://www.datocms-assets.com/166118/1770300598-slack-white.svg"\n    },\n    {\n      "name": "Github",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1768312333-github.svg",\n      "value": "https://www.datocms-assets.com/166118/1768312333-github.svg"\n    },\n    {\n      "name": "Github white",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1770300598-github-white.svg",\n      "value": "https://www.datocms-assets.com/166118/1770300598-github-white.svg"\n    },\n    {\n      "name": "Checkmark",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1770116245-checkmark.svg",\n      "value": "https://www.datocms-assets.com/166118/1770116245-checkmark.svg"\n    },\n    {\n      "name": "Avatar",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1770039138-avatar.svg",\n      "value": "https://www.datocms-assets.com/166118/1770039138-avatar.svg"\n    },\n    {\n      "name": "Logo DTD",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1768312333-logo-dtd.svg",\n      "value": "https://www.datocms-assets.com/166118/1768312333-logo-dtd.svg"\n    },\n    {\n      "name": "Logo Agid Footer",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1778850614-agid-logo.png",\n      "value": "https://www.datocms-assets.com/166118/1778850614-agid-logo.png"\n    },\n    {\n      "name": "Logo DTD Footer",\n      "type": "image",\n      "display": "https://www.datocms-assets.com/166118/1778850631-logo-dtd-white-2.png",\n      "value": "https://www.datocms-assets.com/166118/1778850631-logo-dtd-white-2.png"\n    }\n  ]\n}',
    },
  });

  console.log("Creating new fields/fieldsets");

  console.log(
    'Create Single asset field "Logo" (`logo`) in block model "Brand" (`brand`)',
  );
  await client.fields.create("CTrt_dG9RcuokSxQmsa5TQ", {
    id: "S60O2FNKSfC9hCwm7XiVwQ",
    label: "Logo",
    field_type: "file",
    api_key: "logo",
    validators: { required: {} },
    appearance: { addons: [], editor: "file", parameters: {} },
    default_value: null,
  });

  console.log("Destroy fields in existing models/block models");

  console.log(
    'Delete Single-line string field "Main logo" (`main_logo`) in block model "Brand" (`brand`)',
  );
  await client.fields.destroy("WE54rogWRVSH6cZ2F1VxNg");

  console.log(
    'Delete Single-line string field "Brand logo" (`brand_logo`) in block model "Brand" (`brand`)',
  );
  await client.fields.destroy("A5bt6cYeRIiVPy7zREIcCg");

  console.log(
    'Delete Single-line string field "Label" (`label`) in block model "Brand" (`brand`)',
  );
  await client.fields.destroy("DJrP3y-MRxGvSxv22iKE7g");

  console.log("Update existing fields/fieldsets");

  console.log(
    'Update Single asset field "Logo" (`logo`) in block model "Brand" (`brand`)',
  );
  await client.fields.update("S60O2FNKSfC9hCwm7XiVwQ", { position: 1 });

  console.log("Finalize models/block models");

  console.log('Update block model "Brand" (`brand`)');
  await client.itemTypes.update("CTrt_dG9RcuokSxQmsa5TQ", {
    presentation_image_field: { id: "S60O2FNKSfC9hCwm7XiVwQ", type: "field" },
  });
}
