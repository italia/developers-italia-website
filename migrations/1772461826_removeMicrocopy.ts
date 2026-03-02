import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Destroy fields in existing models/block models");

  console.log(
    'Delete fieldset "Accessibilit\u00E0" in model "Global setting" (`global_setting`)',
  );
  await client.fieldsets.destroy("FPwP-KfPTg-Ov7aaQDfnpw");

  console.log(
    'Delete Single-line string field "Aria label Logo" (`aria_label_logo`) in model "Global setting" (`global_setting`)',
  );
  await client.fields.destroy("Oub7etJ6TaWNWhjhkauewQ");

  console.log(
    'Delete Single-line string field "Language selector" (`language_selector`) in model "Global setting" (`global_setting`)',
  );
  await client.fields.destroy("a04p74qAT7mB57W84ZUNdg");

  console.log(
    'Delete Single-line string field "Analyzer" (`analyzer`) in model "Global setting" (`global_setting`)',
  );
  await client.fields.destroy("LdvNZjpmSW615N6SvPAFZQ");

  console.log(
    'Delete Single-line string field "Chip topic label" (`chip_topic_label`) in model "Global setting" (`global_setting`)',
  );
  await client.fields.destroy("E4z8db3JTbaT6qQx9obenA");

  console.log(
    'Delete Single-line string field "Aria label card category" (`aria_label_card_category`) in model "Global setting" (`global_setting`)',
  );
  await client.fields.destroy("F00-wm1uQACpSjkXfYumQw");

  console.log(
    'Delete Single-line string field "Aria label card action" (`aria_label_card_action`) in model "Global setting" (`global_setting`)',
  );
  await client.fields.destroy("Rt3kzwHTTF2lJ9Uq2mGCCw");

  console.log(
    'Delete Single-line string field "Aria label external link" (`aria_label_external_link`) in model "Global setting" (`global_setting`)',
  );
  await client.fields.destroy("MHEHSFyWS82XekisKs5rmw");

  console.log(
    'Delete Single-line string field "Aria label internal link" (`aria_label_internal_link`) in model "Global setting" (`global_setting`)',
  );
  await client.fields.destroy("G2-qGtSDS1C3FeZbEN1eOA");

  console.log(
    'Delete Single-line string field "Aria label download link" (`aria_label_download_link`) in model "Global setting" (`global_setting`)',
  );
  await client.fields.destroy("ZY4JkunjTkmTOo04O7wMUQ");

  console.log(
    'Delete Single-line string field "Loading" (`loading`) in model "Global setting" (`global_setting`)',
  );
  await client.fields.destroy("OBmuRINvTaSGqD_HK5zQrQ");
}
