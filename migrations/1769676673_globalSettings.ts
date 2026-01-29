import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Creating new fields/fieldsets");

  console.log(
    'Create Single-line string field "Last update label" (`last_update_label`) in model "Global setting" (`global_setting`)',
  );
  await client.fields.create("des80U_2TkCQPszy5emeLA", {
    id: "fxkCtUfFRMuUgdtwcv52VA",
    label: "Last update label",
    field_type: "string",
    api_key: "last_update_label",
    localized: true,
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
  });

  console.log("Destroy fields in existing models/block models");

  console.log(
    'Delete SEO meta tags field "Seo" (`seo`) in model "Search" (`search`)',
  );
  await client.fields.destroy("CuHyUktPQrC8lqMNJ4osYQ");

  console.log("Finalize models/block models");

  console.log('Update block model "Tags" (`topics_block`)');
  await client.itemTypes.update("SYB-ZWCvQq2KdO_yrUxS2g", {
    name: "Tags",
    hint: "https://www.datocms-assets.com/166118/1769597668-tags.png",
  });

  console.log(
    'Update block model "Cards container with filter" (`topic_filter`)',
  );
  await client.itemTypes.update("c2sA3G6uT_q4EBkYwbUqaw", {
    name: "Cards container with filter",
  });

  console.log('Update block model "Webinar transcript" (`action_card`)');
  await client.itemTypes.update("GEMBk406SjG8lMlYBVNfVQ", {
    name: "Webinar transcript",
    hint: "https://www.datocms-assets.com/166118/1769597668-webinar-transcript-desktop.png",
  });

  console.log('Update block model "Article list" (`article_list`)');
  await client.itemTypes.update("fshRZxGlSnOrt1fTnVR5eQ", {
    hint: "https://www.datocms-assets.com/166118/1769597668-related-list.png",
  });

  console.log('Update block model "Article navigation" (`article_navigation`)');
  await client.itemTypes.update("I-k_DgsGQD2W44INvBgnkQ", {
    hint: "https://www.datocms-assets.com/166118/1769597668-related-list-navigation.png",
  });

  console.log("Manage schema menu items");

  console.log(
    'Update block schema menu item for block model "Brand" (`brand`)',
  );
  await client.schemaMenuItems.update("e_jNqAb6SAOLPTRHuUr5ZQ", {
    position: 0,
    parent: { id: "WMk6e5CwQCOCiC_iV0e-DA", type: "schema_menu_item" },
  });
}
