import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Create new models/block models");

  console.log(
    'Create block model "Tab con contenuto interno ed esterno" (`mixed_tab`)',
  );
  await client.itemTypes.create(
    {
      id: "baV2SHO4RImi-eU-NNNZog",
      name: "Tab con contenuto interno ed esterno",
      api_key: "mixed_tab",
      modular_block: true,
      draft_saving_active: false,
      hint: "",
      inverse_relationships_enabled: false,
    },
    {
      skip_menu_item_creation: true,
      schema_menu_item_id: "VqXpD3cFQE6NIqT7ymoB1g",
    },
  );

  console.log("Creating new fields/fieldsets");

  console.log(
    'Create Single-line string field "Title" (`title`) in block model "Tab con contenuto interno ed esterno" (`mixed_tab`)',
  );
  await client.fields.create("baV2SHO4RImi-eU-NNNZog", {
    id: "c4905316498773628cce7d8a",
    label: "Title",
    field_type: "string",
    api_key: "title",
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    default_value: null,
  });

  console.log(
    'Create Multiple links field "News" (`news`) in block model "Tab con contenuto interno ed esterno" (`mixed_tab`)',
  );
  await client.fields.create("baV2SHO4RImi-eU-NNNZog", {
    id: "bb1c02ac616ffdcf4d46474b",
    label: "News",
    field_type: "links",
    api_key: "news",
    validators: {
      items_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [
          "I7swbqFhSdekgCtytCwk9w",
          "PeXbTb7tRvCzyyICsUoedw",
          "T-HlXkO8SEWb8JYh5FuYCQ",
          "X7ndzI_yTeeyKZWJ8KtKGQ",
          "ZO62cMfeSpmP2tBt7g_u6g",
        ],
      },
      size: { min: 1, max: 4 },
    },
    appearance: {
      addons: [],
      editor: "links_select",
      parameters: { filters: [] },
    },
    default_value: null,
  });

  console.log("Update existing models/block models");

  console.log(
    'Update block model "Tab con contenuto interno ed esterno" (`mixed_tab`)',
  );
  await client.itemTypes.update("baV2SHO4RImi-eU-NNNZog", {
    presentation_title_field: { id: "c4905316498773628cce7d8a", type: "field" },
  });

  console.log("Update existing fields/fieldsets");

  console.log(
    'Update Modular Content (Multiple blocks) field "Tabs" (`tabs`) in block model "Cards section with tab" (`news_feed`)',
  );
  await client.fields.update("Fmh3g9mWR-mSjvKHJY3GJA", {
    validators: {
      rich_text_blocks: {
        item_types: [
          "JH6wRgjAT22fgpfAkqJK-Q",
          "UOKjGL2DSZ6Z8Uwcz1NENg",
          "baV2SHO4RImi-eU-NNNZog",
        ],
      },
    },
  });

  console.log("Manage schema menu items");

  console.log(
    'Update schema menu item for block model "Tab con contenuto interno ed esterno" (`mixed_tab`)',
  );
  await client.schemaMenuItems.update("VqXpD3cFQE6NIqT7ymoB1g", {
    position: 3,
    parent: { id: "LIGiN-0eTfea06jXmCO0vA", type: "schema_menu_item" },
  });
}
