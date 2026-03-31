import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Creating new fields/fieldsets");

  console.log(
    'Create Boolean field "Show inline" (`show_inline`) in block model "Text + statistics" (`text_statistic`)',
  );
  await client.fields.create("Y90FAsoITzyeuRK7Q4PtiQ", {
    id: "ISRHY8USReeITzMLGyhpcQ",
    label: "Show inline",
    field_type: "boolean",
    api_key: "show_inline",
    appearance: { addons: [], editor: "boolean", parameters: {} },
    default_value: null,
  });

  console.log("Update existing fields/fieldsets");

  console.log(
    'Update Boolean field "Show inline" (`show_inline`) in block model "Text + statistics" (`text_statistic`)',
  );
  await client.fields.update("ISRHY8USReeITzMLGyhpcQ", { position: 2 });

  console.log(
    'Update Modular Content (Multiple blocks) field "Content" (`content`) in model "Catalogue" (`catalogue`)',
  );
  await client.fields.update("LSx7XQO0Q8q3Hlo1MApE7w", {
    validators: {
      rich_text_blocks: {
        item_types: [
          "Awg0gTrzT1WtWycAQ5I-cw",
          "BttQ-GOdSDCjRZinK2Hevw",
          "TeeBFEKKQ02NG3V9Xstrvw",
          "T9sEB1HSTya0PUQkEV2i_A",
        ],
      },
    },
  });
}
