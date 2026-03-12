import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Create new models/block models");

  console.log(
    'Create block model "Mailing list signup block" (`mailing_list_signup_block`)',
  );
  await client.itemTypes.create(
    {
      id: "AggN5kz6TiutVcTPwgP1dQ",
      name: "Mailing list signup block",
      api_key: "mailing_list_signup_block",
      modular_block: true,
      draft_saving_active: false,
      hint: "",
      inverse_relationships_enabled: false,
    },
    {
      skip_menu_item_creation: true,
      schema_menu_item_id: "Zn8Ds-TPQBiUklLFuIWEZQ",
    },
  );

  console.log("Creating new fields/fieldsets");

  console.log(
    'Create Single-line string field "Title" (`title`) in block model "Mailing list signup block" (`mailing_list_signup_block`)',
  );
  await client.fields.create("AggN5kz6TiutVcTPwgP1dQ", {
    id: "cGN-2Xu3Q9SCh6TKzCTv2Q",
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
    'Create Modular Content (Single block) field "Privacy policy" (`privacy_policy`) in block model "Mailing list signup block" (`mailing_list_signup_block`)',
  );
  await client.fields.create("AggN5kz6TiutVcTPwgP1dQ", {
    id: "E4Ju6h8yQG20uxTTJhn7nA",
    label: "Privacy policy",
    field_type: "single_block",
    api_key: "privacy_policy",
    validators: {
      single_block_blocks: { item_types: ["Nwki1YZWRhqgFtIM3Hdgqw"] },
      required: {},
    },
    appearance: {
      addons: [],
      editor: "framed_single_block",
      parameters: { start_collapsed: false },
    },
    default_value: null,
  });

  console.log(
    'Create Modular Content (Single block) field "Mailing list form" (`mailing_list_form`) in model "Layout" (`layout`)',
  );
  await client.fields.create("P3HYBb3RTOG7iNYtcVNAEg", {
    id: "GK_fdG2lQTaejeW1Naz9tQ",
    label: "Mailing list form",
    field_type: "single_block",
    api_key: "mailing_list_form",
    localized: true,
    validators: {
      single_block_blocks: { item_types: ["AggN5kz6TiutVcTPwgP1dQ"] },
    },
    appearance: {
      addons: [],
      editor: "framed_single_block",
      parameters: { start_collapsed: false },
    },
    fieldset: { id: "ZtQKPM9kSeKHpEmQJ7EKOw", type: "fieldset" },
  });

  console.log(
    'Create Boolean field "Show sitemap link" (`show_sitemap_link`) in model "Layout" (`layout`)',
  );
  await client.fields.create("P3HYBb3RTOG7iNYtcVNAEg", {
    id: "BHivpW-TSjSk2UfEcWifTA",
    label: "Show sitemap link",
    field_type: "boolean",
    api_key: "show_sitemap_link",
    appearance: { addons: [], editor: "boolean", parameters: {} },
    default_value: null,
    fieldset: { id: "ZtQKPM9kSeKHpEmQJ7EKOw", type: "fieldset" },
  });

  console.log("Update existing fields/fieldsets");

  console.log(
    'Update Modular Content (Multiple blocks) field "Small print" (`small_print`) in model "Layout" (`layout`)',
  );
  await client.fields.update("BK9N0BEWQBS0HWhmdU0E3Q", { position: 8 });

  console.log("Finalize models/block models");

  console.log(
    'Update block model "Mailing list signup block" (`mailing_list_signup_block`)',
  );
  await client.itemTypes.update("AggN5kz6TiutVcTPwgP1dQ", {
    presentation_title_field: { id: "cGN-2Xu3Q9SCh6TKzCTv2Q", type: "field" },
  });

  console.log("Manage schema menu items");

  console.log(
    'Update block schema menu item for block model "Mailing list signup block" (`mailing_list_signup_block`)',
  );
  await client.schemaMenuItems.update("Zn8Ds-TPQBiUklLFuIWEZQ", {
    position: 0,
    parent: { id: "WMk6e5CwQCOCiC_iV0e-DA", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "Internal link" (`internal_link`)',
  );
  await client.schemaMenuItems.update("bl5SfY47T3O2riKCWSdkkQ", {
    position: 33,
  });

  console.log('Update model schema menu item "Articles"');
  await client.schemaMenuItems.update("HfMDZsX6RS6OJCfEGE2cUw", {
    position: 14,
  });

  console.log(
    'Update model schema menu item for model "Global setting" (`global_setting`)',
  );
  await client.schemaMenuItems.update("Jp4buk4gRvuY-GR3I3c6bw", {
    position: 31,
  });

  console.log('Update model schema menu item "Pages"');
  await client.schemaMenuItems.update("JGmx124qRvqJiP3rJ4Cufw", {
    position: 15,
  });

  console.log(
    'Update block schema menu item for block model "Download link" (`download_link`)',
  );
  await client.schemaMenuItems.update("OcTQpYdxREafOJ0nYnTJZA", {
    position: 32,
  });

  console.log('Update model schema menu item "Webinar"');
  await client.schemaMenuItems.update("C-EXbRV_TfOQEvjqKoJ-Ew", {
    position: 23,
  });

  console.log('Update model schema menu item "Resource"');
  await client.schemaMenuItems.update("c42xanSrTcGTzZUF1rsuzw", {
    position: 26,
  });

  console.log('Update block schema menu item "Atoms"');
  await client.schemaMenuItems.update("WMk6e5CwQCOCiC_iV0e-DA", {
    position: 13,
  });

  console.log('Update block schema menu item "Navigation"');
  await client.schemaMenuItems.update("N4pGvMpZQoa7NDkSri-tlA", {
    position: 27,
  });

  console.log('Update model schema menu item "News"');
  await client.schemaMenuItems.update("Tk0nCGLoTRehKT5ZSXBz5A", {
    position: 25,
  });

  console.log('Update model schema menu item "Chart"');
  await client.schemaMenuItems.update("D63GZe7CSX6xqQmqjQtG9Q", {
    position: 17,
  });

  console.log('Update model schema menu item "Insight"');
  await client.schemaMenuItems.update("Q96U2sdZQ3yes8_lF6EUcA", {
    position: 18,
  });

  console.log('Update model schema menu item "Story"');
  await client.schemaMenuItems.update("HajK_tQXSGKJ5foj8eu1jQ", {
    position: 24,
  });

  console.log(
    'Update model schema menu item for model "Schema migration" (`schema_migration`)',
  );
  await client.schemaMenuItems.update("OfZFdzftQBCRJllOPQzjjA", {
    position: 30,
  });

  console.log('Update block schema menu item "List"');
  await client.schemaMenuItems.update("fc2HKkRSSq2MAOVxit4j9Q", {
    position: 28,
  });
}
