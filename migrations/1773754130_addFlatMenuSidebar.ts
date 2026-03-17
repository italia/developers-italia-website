import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Update existing fields/fieldsets");

  console.log(
    'Update Modular Content (Multiple blocks) field "Men\u00F9" (`menu`) in model "Sidebar for articles" (`sidebar_for_article`)',
  );
  await client.fields.update("cpfriQWLR0CG5MMepgqjBQ", {
    validators: {
      rich_text_blocks: {
        item_types: ["HKBFiCBvSEyvA70id9ReLg", "eAnCBvXUTUqI_AgEl7iMnA"],
      },
    },
  });
}
