import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Update existing fields/fieldsets");

  console.log(
    'Update Modular Content (Multiple blocks) field "Channels" (`channels`) in block model "Support channels section" (`support_channels_section`)',
  );
  await client.fields.update("cJwi7A7_QaOhasgiN34EKQ", {
    validators: {
      rich_text_blocks: { item_types: ["boYJ_9tCSI6ARMr6HycKkA"] },
      size: { min: 1 },
    },
  });

  console.log(
    'Update Multiple-paragraph text field "Description" (`description`) in block model "Card presentation banner" (`channel`)',
  );
  await client.fields.update("MvRAR_Z6Tk-GEC-SmGwbbA", { field_type: "text" });
  await client.fields.update("MvRAR_Z6Tk-GEC-SmGwbbA", {
    appearance: {
      addons: [],
      editor: "markdown",
      parameters: {
        toolbar: [
          "heading",
          "bold",
          "italic",
          "strikethrough",
          "code",
          "unordered_list",
          "ordered_list",
          "quote",
          "link",
          "image",
          "fullscreen",
        ],
      },
    },
  });

  console.log("Manage schema menu items");

  console.log(
    'Update block schema menu item for block model "List external link" (`list_external_link`)',
  );
  await client.schemaMenuItems.update("HF7TC7qySTKyAELTYZGoFQ", {
    position: 5,
  });
}
