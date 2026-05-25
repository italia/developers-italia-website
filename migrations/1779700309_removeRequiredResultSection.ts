import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Update existing fields/fieldsets");

  console.log(
    'Update Modular Content (Single block) field "Result" (`result`) in block model "Data section" (`data_section`)',
  );
  await client.fields.update("bUUqSTcGTMqEXxLUVwdw5g", {
    validators: {
      single_block_blocks: { item_types: ["G9neLp9yQ8WPXAkq7W3PpQ"] },
    },
  });
}
