import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Creating new fields/fieldsets");

  console.log(
    'Create Multiple links field "Kpi element" (`kpi_element`) in block model "Statistic block" (`statistic_block`)',
  );
  await client.fields.create("J1Me_9TJRJG686nPtIyuqQ", {
    id: "GiDh7mLbQnaevHDH5t-lzw",
    label: "Kpi element",
    field_type: "links",
    api_key: "kpi_element",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["MmI20ZtzQ5-AZGWwe6vUlw"],
      },
    },
    appearance: {
      addons: [],
      editor: "links_select",
      parameters: { filters: [] },
    },
    default_value: null,
  });

  console.log("Update existing fields/fieldsets");

  console.log(
    'Update Modular Content (Multiple blocks) field "Statistics" (`statistics`) in block model "Statistic block" (`statistic_block`)',
  );
  await client.fields.update("QGyk2IccTXOOXIIBsAOz-Q", {
    validators: {
      rich_text_blocks: { item_types: ["b6Qg1zeoSA-2m00XNDSM4Q"] },
    },
  });
}
