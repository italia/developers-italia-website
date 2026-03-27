import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Update existing fields/fieldsets");

  console.log(
    'Update Single asset field "image" (`image`) in block model "Text + image" (`text_image`)',
  );
  await client.fields.update("S206ipOuSeuAv2ErhhiS0A", { validators: {} });
}
