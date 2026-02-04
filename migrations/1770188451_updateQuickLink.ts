import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Creating new fields/fieldsets");

  console.log("Destroy fields in existing models/block models");

  console.log(
    'Delete Modular Content (Multiple blocks) field "Links" (`links`) in block model "Quick link card" (`quick_link_card`)',
  );
  await client.fields.destroy("O-DOoJTiQf2YrV6qVnroXg");

  console.log(
    'Create Multiple links field "Links" (`link_to_resource`) in block model "Quick link card" (`quick_link_card`)',
  );
  await client.fields.create("IzWzz4YeQcqJ7J34Xie2xg", {
    id: "WSPI8fC2SbufmqUMUxiCJQ",
    label: "Links",
    field_type: "links",
    api_key: "link_to_resource",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["E-Cl2G6PSV-MbIo1Lw5buA", "PeXbTb7tRvCzyyICsUoedw"],
      },
    },
    appearance: { addons: [], editor: "links_select", parameters: {} },
    default_value: null,
  });

  console.log("Update existing fields/fieldsets");

  console.log(
    'Update Multiple links field "Links" (`link_to_resource`) in block model "Quick link card" (`quick_link_card`)',
  );
  await client.fields.update("WSPI8fC2SbufmqUMUxiCJQ", { position: 2 });

  console.log(
    'Update Single-line string field "Title" (`title`) in block model "Quick link card" (`quick_link_card`)',
  );
  await client.fields.update("BGVDhgfSTd26JzLYqdkk8A", { position: 1 });
}
