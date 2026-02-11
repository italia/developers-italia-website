import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Creating new fields/fieldsets");

  console.log(
    'Create fieldset "Accessibilit\u00E0" in model "Global setting" (`global_setting`)',
  );
  await client.fieldsets.create("des80U_2TkCQPszy5emeLA", {
    id: "FPwP-KfPTg-Ov7aaQDfnpw",
    title: "Accessibilit\u00E0",
    hint: "Qui vanno configurate alcune voci globali per l'accessibilit\u00E0",
  });

  console.log(
    'Create Single-line string field "Aria label Logo" (`aria_label_logo`) in model "Global setting" (`global_setting`)',
  );
  await client.fields.create("des80U_2TkCQPszy5emeLA", {
    id: "Oub7etJ6TaWNWhjhkauewQ",
    label: "Aria label Logo",
    field_type: "string",
    api_key: "aria_label_logo",
    localized: true,
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    fieldset: { id: "FPwP-KfPTg-Ov7aaQDfnpw", type: "fieldset" },
  });

  console.log(
    'Create Single-line string field "Language selector" (`language_selector`) in model "Global setting" (`global_setting`)',
  );
  await client.fields.create("des80U_2TkCQPszy5emeLA", {
    id: "a04p74qAT7mB57W84ZUNdg",
    label: "Language selector",
    field_type: "string",
    api_key: "language_selector",
    localized: true,
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    fieldset: { id: "FPwP-KfPTg-Ov7aaQDfnpw", type: "fieldset" },
  });

  console.log(
    'Create Single-line string field "Analyzer" (`analyzer`) in model "Global setting" (`global_setting`)',
  );
  await client.fields.create("des80U_2TkCQPszy5emeLA", {
    id: "LdvNZjpmSW615N6SvPAFZQ",
    label: "Analyzer",
    field_type: "string",
    api_key: "analyzer",
    hint: "Inserire la label per la lingua con cui va fatta l'analisi del testo durante l'indicizzazione per la ricerca full-text\n",
    localized: true,
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
  });

  console.log(
    'Create Single-line string field "Chip topic label" (`chip_topic_label`) in model "Global setting" (`global_setting`)',
  );
  await client.fields.create("des80U_2TkCQPszy5emeLA", {
    id: "E4z8db3JTbaT6qQx9obenA",
    label: "Chip topic label",
    field_type: "string",
    api_key: "chip_topic_label",
    localized: true,
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    fieldset: { id: "FPwP-KfPTg-Ov7aaQDfnpw", type: "fieldset" },
  });

  console.log(
    'Create Single-line string field "Aria label card category" (`aria_label_card_category`) in model "Global setting" (`global_setting`)',
  );
  await client.fields.create("des80U_2TkCQPszy5emeLA", {
    id: "F00-wm1uQACpSjkXfYumQw",
    label: "Aria label card category",
    field_type: "string",
    api_key: "aria_label_card_category",
    localized: true,
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    fieldset: { id: "FPwP-KfPTg-Ov7aaQDfnpw", type: "fieldset" },
  });

  console.log(
    'Create Single-line string field "Aria label card action" (`aria_label_card_action`) in model "Global setting" (`global_setting`)',
  );
  await client.fields.create("des80U_2TkCQPszy5emeLA", {
    id: "Rt3kzwHTTF2lJ9Uq2mGCCw",
    label: "Aria label card action",
    field_type: "string",
    api_key: "aria_label_card_action",
    localized: true,
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    fieldset: { id: "FPwP-KfPTg-Ov7aaQDfnpw", type: "fieldset" },
  });

  console.log(
    'Create Single-line string field "Aria label external link" (`aria_label_external_link`) in model "Global setting" (`global_setting`)',
  );
  await client.fields.create("des80U_2TkCQPszy5emeLA", {
    id: "MHEHSFyWS82XekisKs5rmw",
    label: "Aria label external link",
    field_type: "string",
    api_key: "aria_label_external_link",
    localized: true,
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    fieldset: { id: "FPwP-KfPTg-Ov7aaQDfnpw", type: "fieldset" },
  });

  console.log(
    'Create Single-line string field "Aria label internal link" (`aria_label_internal_link`) in model "Global setting" (`global_setting`)',
  );
  await client.fields.create("des80U_2TkCQPszy5emeLA", {
    id: "G2-qGtSDS1C3FeZbEN1eOA",
    label: "Aria label internal link",
    field_type: "string",
    api_key: "aria_label_internal_link",
    localized: true,
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    fieldset: { id: "FPwP-KfPTg-Ov7aaQDfnpw", type: "fieldset" },
  });

  console.log(
    'Create Single-line string field "Aria label download link" (`aria_label_download_link`) in model "Global setting" (`global_setting`)',
  );
  await client.fields.create("des80U_2TkCQPszy5emeLA", {
    id: "ZY4JkunjTkmTOo04O7wMUQ",
    label: "Aria label download link",
    field_type: "string",
    api_key: "aria_label_download_link",
    localized: true,
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    fieldset: { id: "FPwP-KfPTg-Ov7aaQDfnpw", type: "fieldset" },
  });

  console.log(
    'Create Single-line string field "Loading" (`loading`) in model "Global setting" (`global_setting`)',
  );
  await client.fields.create("des80U_2TkCQPszy5emeLA", {
    id: "OBmuRINvTaSGqD_HK5zQrQ",
    label: "Loading",
    field_type: "string",
    api_key: "loading",
    localized: true,
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    fieldset: { id: "FPwP-KfPTg-Ov7aaQDfnpw", type: "fieldset" },
  });

  console.log("Update existing fields/fieldsets");

  console.log(
    'Update Modular Content (Multiple blocks) field "Statistics" (`statistics`) in block model "Statistic block" (`statistic_block`)',
  );
  await client.fields.update("QGyk2IccTXOOXIIBsAOz-Q", {
    validators: {
      rich_text_blocks: { item_types: ["b6Qg1zeoSA-2m00XNDSM4Q"] },
      size: { min: 1 },
    },
  });

  console.log(
    'Update Single-line string field "Analyzer" (`analyzer`) in model "Global setting" (`global_setting`)',
  );
  await client.fields.update("LdvNZjpmSW615N6SvPAFZQ", { position: 2 });

  console.log(
    'Update Single-line string field "Aria label Logo" (`aria_label_logo`) in model "Global setting" (`global_setting`)',
  );
  await client.fields.update("Oub7etJ6TaWNWhjhkauewQ", { position: 0 });

  console.log(
    'Update Single-line string field "Language selector" (`language_selector`) in model "Global setting" (`global_setting`)',
  );
  await client.fields.update("a04p74qAT7mB57W84ZUNdg", { position: 1 });

  console.log(
    'Update Single-line string field "Chip topic label" (`chip_topic_label`) in model "Global setting" (`global_setting`)',
  );
  await client.fields.update("E4z8db3JTbaT6qQx9obenA", { position: 2 });

  console.log(
    'Update Single-line string field "Aria label card category" (`aria_label_card_category`) in model "Global setting" (`global_setting`)',
  );
  await client.fields.update("F00-wm1uQACpSjkXfYumQw", { position: 3 });

  console.log(
    'Update Single-line string field "Aria label card action" (`aria_label_card_action`) in model "Global setting" (`global_setting`)',
  );
  await client.fields.update("Rt3kzwHTTF2lJ9Uq2mGCCw", { position: 4 });

  console.log(
    'Update Single-line string field "Aria label external link" (`aria_label_external_link`) in model "Global setting" (`global_setting`)',
  );
  await client.fields.update("MHEHSFyWS82XekisKs5rmw", { position: 5 });

  console.log(
    'Update Single-line string field "Aria label internal link" (`aria_label_internal_link`) in model "Global setting" (`global_setting`)',
  );
  await client.fields.update("G2-qGtSDS1C3FeZbEN1eOA", { position: 6 });

  console.log(
    'Update Single-line string field "Aria label download link" (`aria_label_download_link`) in model "Global setting" (`global_setting`)',
  );
  await client.fields.update("ZY4JkunjTkmTOo04O7wMUQ", { position: 7 });

  console.log(
    'Update Single-line string field "Loading" (`loading`) in model "Global setting" (`global_setting`)',
  );
  await client.fields.update("OBmuRINvTaSGqD_HK5zQrQ", { position: 8 });

  console.log(
    'Update fieldset "Error page" in model "Global setting" (`global_setting`)',
  );
  await client.fieldsets.update("bbL_4MmLQuqmTMu0abNBzQ", {
    hint: "Qui va configurata la pagina di errore 404",
  });
}
