import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Update existing fields/fieldsets");

  console.log(
    'Update Single link field "Topic" (`topic`) in model "Insight" (`insight`)',
  );
  await client.fields.update("ecRSx_RjQrunttS_02tYUw", {
    validators: {
      item_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["JHxhOzSVRN67lEkTKwRQiA"],
      },
    },
    appearance: {
      addons: [],
      editor: "link_select",
      parameters: { filters: [] },
    },
  });
}
