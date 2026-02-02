import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Destroy fields in existing models/block models");

  console.log(
    'Delete Single asset field "Logo" (`logo`) in model "Layout" (`layout`)',
  );
  await client.fields.destroy("eacJr0WISfegNJRhmX84dg");

  console.log("Finalize models/block models");

  console.log('Update model "Layout" (`layout`)');
  await client.itemTypes.update("P3HYBb3RTOG7iNYtcVNAEg", {
    presentation_image_field: null,
    image_preview_field: null,
  });
}
