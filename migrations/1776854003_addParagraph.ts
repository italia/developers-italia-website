import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Creating new fields/fieldsets");

  console.log(
    'Create Multiple-paragraph text field "Paragraph" (`paragraph`) in model "Articoli interni senza sidebar" (`story_item`)',
  );
  await client.fields.create("ZO62cMfeSpmP2tBt7g_u6g", {
    id: "ctN53N_wQH6UjGMOHQTlZA",
    label: "Paragraph",
    field_type: "text",
    api_key: "paragraph",
    localized: true,
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
    fieldset: { id: "BcNNCxkpQBu7D-yqkEcY-Q", type: "fieldset" },
  });

  console.log("Update existing fields/fieldsets");

  console.log(
    'Update Multiple-paragraph text field "Paragraph" (`paragraph`) in model "Articoli interni senza sidebar" (`story_item`)',
  );
  await client.fields.update("ctN53N_wQH6UjGMOHQTlZA", { position: 2 });
}
