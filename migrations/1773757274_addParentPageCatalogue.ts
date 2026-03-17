import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Creating new fields/fieldsets");

  console.log(
    'Create Single link field "Parent page" (`parent_page`) in model "Catalogue" (`catalogue`)',
  );
  await client.fields.create("c5DDst-qS8q_9mYv71XK9w", {
    id: "WTNPpbo0SV62dX1FBRWPLA",
    label: "Parent page",
    field_type: "link",
    api_key: "parent_page",
    localized: true,
    validators: {
      item_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["MK1luhfjT5-vyrmLiB0Qeg"],
      },
    },
    appearance: {
      addons: [],
      editor: "link_select",
      parameters: { filters: [] },
    },
  });

  console.log("Update existing fields/fieldsets");

  console.log(
    'Update Single link field "Parent page" (`parent_page`) in model "Catalogue" (`catalogue`)',
  );
  await client.fields.update("WTNPpbo0SV62dX1FBRWPLA", { position: 2 });
}
