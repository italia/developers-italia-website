import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Creating new fields/fieldsets");

  console.log(
    'Create Single-line string field "Label" (`label`) in model "Story class" (`story_class`)',
  );
  await client.fields.create("F2lwKxl6RCCakDi2gECGKA", {
    id: "SLZDVrdUT9qPDGE2ra01Rw",
    label: "Label",
    field_type: "string",
    api_key: "label",
    localized: true,
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
  });

  console.log(
    'Create Single link field "Article classification" (`article_classification`) in model "Story item" (`story_item`)',
  );
  await client.fields.create("ZO62cMfeSpmP2tBt7g_u6g", {
    id: "dvsf3RgXThu5bsfccoALXw",
    label: "Article classification",
    field_type: "link",
    api_key: "article_classification",
    localized: true,
    validators: {
      item_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["F2lwKxl6RCCakDi2gECGKA"],
      },
    },
    appearance: {
      addons: [],
      editor: "link_select",
      parameters: { filters: [] },
    },
  });

  console.log(
    'Create Single link field "Filter "Articoli interni senza sidebar"" (`filter_story`) in block model "Catalogue tab" (`catalogue_tab`)',
  );
  await client.fields.create("fX839ClGTaWPfn1c3GA2Gw", {
    id: "PNQpFyoBRYmthuPKgTdyGw",
    label: 'Filter "Articoli interni senza sidebar"',
    field_type: "link",
    api_key: "filter_story",
    hint: 'Impostare, se necessario, solo se nella tendina precedente \u00E8 stata selezionato il type di "Articoli interni senza sidebar"',
    validators: {
      item_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["F2lwKxl6RCCakDi2gECGKA"],
      },
    },
    appearance: {
      addons: [],
      editor: "link_select",
      parameters: { filters: [] },
    },
    default_value: null,
  });

  console.log("Update existing fields/fieldsets");

  console.log(
    'Update Single link field "Article classification" (`article_classification`) in model "Story item" (`story_item`)',
  );
  await client.fields.update("dvsf3RgXThu5bsfccoALXw", { position: 1 });

  console.log(
    'Update Single link field "Filter "Articoli interni senza sidebar"" (`filter_story`) in block model "Catalogue tab" (`catalogue_tab`)',
  );
  await client.fields.update("PNQpFyoBRYmthuPKgTdyGw", { position: 6 });

  console.log(
    'Update Single-line string field "Type" (`news_page_tab_type`) in block model "Catalogue tab" (`catalogue_tab`)',
  );
  await client.fields.update("N7VjZFjyTR6TzrY7MD3ugQ", {
    appearance: {
      addons: [],
      editor: "string_select",
      parameters: {
        options: [
          {
            hint: "",
            label: "Articoli interni senza sidebar",
            value: "story_item",
          },
          { hint: "", label: "Webinar ed eventi", value: "webinar_item" },
          { hint: "", label: "Contenuto esterno", value: "news_item" },
          { hint: "", label: "Link e risorse", value: "resource" },
        ],
      },
    },
  });

  console.log("Finalize models/block models");

  console.log('Update model "Story class" (`story_class`)');
  await client.itemTypes.update("F2lwKxl6RCCakDi2gECGKA", {
    presentation_title_field: { id: "SLZDVrdUT9qPDGE2ra01Rw", type: "field" },
    title_field: { id: "SLZDVrdUT9qPDGE2ra01Rw", type: "field" },
  });
}
