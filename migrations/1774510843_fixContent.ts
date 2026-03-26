import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Manage upload filters");

  console.log('Install plugin "Project Exporter"');
  await client.plugins.create({
    id: "S4G0NswpQ1ChAOipOPktBA",
    package_name: "datocms-plugin-project-exporter",
  });

  console.log("Creating new fields/fieldsets");

  console.log(
    'Create Multiple-paragraph text field "Paragraph" (`paragraph`) in block model "Section card link list " (`card_link_list`)',
  );
  await client.fields.create("eYC6ITddSYSZVRiO1Ldt3g", {
    id: "YaixGJIqToiQtQ-pTKBfsg",
    label: "Paragraph",
    field_type: "text",
    api_key: "paragraph",
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
    default_value: null,
  });

  console.log("Update existing fields/fieldsets");

  console.log(
    'Update Single-line string field "Background color" (`background_color`) in block model "Text + cards" (`text_use_case`)',
  );
  await client.fields.update("BNW_Mue6TlCvpyo6hPs-hg", { position: 1 });

  console.log(
    'Update Multiple links field "Cards" (`use_cases`) in block model "Use case block" (`use_case_block`)',
  );
  await client.fields.update("Ar_UNbcySZaeeS-OFa8N3w", {
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [
          "PeXbTb7tRvCzyyICsUoedw",
          "T-HlXkO8SEWb8JYh5FuYCQ",
          "X7ndzI_yTeeyKZWJ8KtKGQ",
          "ZO62cMfeSpmP2tBt7g_u6g",
        ],
      },
      size: { max: 2 },
    },
    appearance: {
      addons: [],
      editor: "links_select",
      parameters: { filters: [] },
    },
  });

  console.log(
    'Update Multiple-paragraph text field "Paragraph" (`paragraph`) in block model "Section card link list " (`card_link_list`)',
  );
  await client.fields.update("YaixGJIqToiQtQ-pTKBfsg", { position: 4 });
}
