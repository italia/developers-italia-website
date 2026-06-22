import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  // console.log("Update environment's settings");
  // await client.site.update({ favicon: "RzW8RaTkTdS1itdJF5MbhA" });

  // console.log("Manage upload filters");

  // console.log('Upgrade version of plugin "AI Translations"');
  // await client.plugins.update("Pe71pAx5Q0yd6_GM95bQAQ", {
  //   package_version: "3.3.0",
  // });

  console.log('Update settings of plugin "Web Previews"');
  await client.plugins.update("WSD86jZDQtqqM0v0QSUefA", {
    parameters: {
      frontends: [
        {
          name: "Cloud-italia",
          previewWebhook:
            "https://cloud-italia.vercel.app/api/preview-links?token=94c50d4d0e95d198f575d041c5e404",
        },
        {
          name: "Local",
          previewWebhook:
            "http://localhost:4321/api/preview-links?token=94c50d4d0e95d198f575d041c5e404",
        },
        {
          name: "Developers-Italia",
          visualEditing: { enableDraftModeUrl: "" },
          previewWebhook:
            "https://developers-italia.vercel.app/api/preview-links?token=94c50d4d0e95d198f575d041c5e404",
        },
        {
          name: "Template-PA",
          disabled: true,
          visualEditing: { enableDraftModeUrl: "" },
          previewWebhook:
            "https://template-pa.vercel.app/api/preview-links?token=94c50d4d0e95d198f575d041c5e404",
        },
      ],
      startOpen: true,
      defaultViewports: [
        { icon: "mobile-alt", name: "Mobile", width: 375, height: 667 },
        { icon: "tablet-alt", name: "Tablet", width: 768, height: 1024 },
        { icon: "desktop-alt", name: "Desktop", width: 1280, height: 800 },
      ],
      defaultSidebarWidth: "900",
      previewLinksSidebarDisabled: false,
      previewLinksSidebarPanelDisabled: false,
    },
  });

  console.log("Create new models/block models");

  console.log(
    'Create block model "GraphItalia Dashboard" (`graphitalia_dashboard`)',
  );
  await client.itemTypes.create(
    {
      id: "X161uMKbRhmHJinyurEdyQ",
      name: "GraphItalia Dashboard",
      api_key: "graphitalia_dashboard",
      modular_block: true,
      draft_saving_active: false,
      hint: "",
      inverse_relationships_enabled: false,
    },
    {
      skip_menu_item_creation: true,
      schema_menu_item_id: "CBLT1uHeSjKeJhV_3n333w",
    },
  );

  console.log(
    'Create block model "Third Party Cookies" (`third_party_cookie`)',
  );
  await client.itemTypes.create(
    {
      id: "b0T_r6aaQMSUIrtOBO4ZTQ",
      name: "Third Party Cookies",
      api_key: "third_party_cookie",
      modular_block: true,
      draft_saving_active: false,
      hint: "",
      inverse_relationships_enabled: false,
    },
    {
      skip_menu_item_creation: true,
      schema_menu_item_id: "E3_bPwFCQdmtkvumnJ77mg",
    },
  );

  console.log("Creating new fields/fieldsets");

  console.log(
    'Create Single-line string field "title" (`title`) in block model "GraphItalia Dashboard" (`graphitalia_dashboard`)',
  );
  await client.fields.create("X161uMKbRhmHJinyurEdyQ", {
    id: "UcbU7o0PRdiSqKFB0WTbvQ",
    label: "title",
    field_type: "string",
    api_key: "title",
    hint: "a friendly field to name and remember the purpose of the dashboard",
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    default_value: null,
  });

  console.log(
    'Create Single-line string field "Dashboard ID" (`dashboard_id`) in block model "GraphItalia Dashboard" (`graphitalia_dashboard`)',
  );
  await client.fields.create("X161uMKbRhmHJinyurEdyQ", {
    id: "HSbHVjS4Sn6IFxWU3a73Ng",
    label: "Dashboard ID",
    field_type: "string",
    api_key: "dashboard_id",
    hint: "the id of the dashboard you want to embed in your site",
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    default_value: null,
  });

  console.log(
    'Create Single-line string field "title" (`title`) in block model "Third Party Cookies" (`third_party_cookie`)',
  );
  await client.fields.create("b0T_r6aaQMSUIrtOBO4ZTQ", {
    id: "ON8fCjQYT160y6CUKczI9g",
    label: "title",
    field_type: "string",
    api_key: "title",
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    default_value: null,
  });

  console.log(
    'Create Multiple-paragraph text field "description" (`description`) in block model "Third Party Cookies" (`third_party_cookie`)',
  );
  await client.fields.create("b0T_r6aaQMSUIrtOBO4ZTQ", {
    id: "PhOjpb6iQN2kzv9hwaH_2g",
    label: "description",
    field_type: "text",
    api_key: "description",
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

  console.log(
    'Create Single-line string field "cookie prefix" (`cookie_prefix`) in block model "Third Party Cookies" (`third_party_cookie`)',
  );
  await client.fields.create("b0T_r6aaQMSUIrtOBO4ZTQ", {
    id: "Opn1LLxxScK0QYzXzzFbjQ",
    label: "cookie prefix",
    field_type: "string",
    api_key: "cookie_prefix",
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    default_value: null,
  });

  console.log(
    'Create Single-line string field "Story Type" (`story_type`) in model "Articoli interni senza sidebar" (`story_item`)',
  );
  await client.fields.create("ZO62cMfeSpmP2tBt7g_u6g", {
    id: "Jg9OzzyTS4ezt09pApSTkw",
    label: "Story Type",
    field_type: "string",
    api_key: "story_type",
    appearance: {
      addons: [],
      editor: "string_select",
      parameters: {
        options: [
          { hint: "", label: "News", value: "news" },
          { hint: "", label: "Platforms", value: "platforms" },
          { hint: "", label: "items", value: "items" },
        ],
      },
    },
    default_value: "news",
  });

  console.log(
    'Create Single-line string field "Story Type" (`story_type`) in block model "Catalogue tab" (`catalogue_tab`)',
  );
  await client.fields.create("fX839ClGTaWPfn1c3GA2Gw", {
    id: "Gax6aKeWRaawJIZPHKRjwA",
    label: "Story Type",
    field_type: "string",
    api_key: "story_type",
    appearance: {
      addons: [],
      editor: "string_select",
      parameters: {
        options: [
          { hint: "", label: "news", value: "news" },
          { hint: "", label: "platforms", value: "platforms" },
          { hint: "", label: "items", value: "items" },
        ],
      },
    },
    default_value: "news",
  });

  console.log(
    'Create Single-line string field "video url" (`video_url`) in block model "Webinar transcript" (`action_card`)',
  );
  await client.fields.create("GEMBk406SjG8lMlYBVNfVQ", {
    id: "IsGau2zwTrKnlsLudH6-Ug",
    label: "video url",
    field_type: "string",
    api_key: "video_url",
    validators: { format: { predefined_pattern: "url" } },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    default_value: null,
  });

  console.log(
    'Create Boolean field "is Sharable" (`is_sharable`) in block model "Webinar transcript" (`action_card`)',
  );
  await client.fields.create("GEMBk406SjG8lMlYBVNfVQ", {
    id: "Zm2IdKCYTVugdaAoGBSJKg",
    label: "is Sharable",
    field_type: "boolean",
    api_key: "is_sharable",
    appearance: { addons: [], editor: "boolean", parameters: {} },
    default_value: null,
  });

  console.log(
    'Create Single-line string field "share_label" (`share_label`) in block model "Webinar transcript" (`action_card`)',
  );
  await client.fields.create("GEMBk406SjG8lMlYBVNfVQ", {
    id: "JMpFV_DeSXydIcfsC6h5iQ",
    label: "share_label",
    field_type: "string",
    api_key: "share_label",
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    default_value: null,
  });

  console.log(
    'Create Single-line string field "sort" (`sort`) in model "Classificazione articoli interni senza sidebar" (`story_class`)',
  );
  await client.fields.create("F2lwKxl6RCCakDi2gECGKA", {
    id: "almBEumxQ4a_BKLUf8BLpw",
    label: "sort",
    field_type: "string",
    api_key: "sort",
    appearance: {
      addons: [],
      editor: "string_select",
      parameters: {
        options: [
          { hint: "", label: "none", value: "none" },
          { hint: "", label: "pub date", value: "pubDate" },
          { hint: "", label: "Alphabetical", value: "az" },
        ],
      },
    },
    default_value: "none",
  });

  console.log(
    'Create Multiple-paragraph text field "Event Body" (`event_body`) in model "Webinar ed eventi" (`webinar_item`)',
  );
  await client.fields.create("X7ndzI_yTeeyKZWJ8KtKGQ", {
    id: "f9OK7EctTU-sLbgTuWhobw",
    label: "Event Body",
    field_type: "text",
    api_key: "event_body",
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
    'Update Single-line string field "Story Type" (`story_type`) in model "Articoli interni senza sidebar" (`story_item`)',
  );
  await client.fields.update("Jg9OzzyTS4ezt09pApSTkw", { position: 2 });

  console.log(
    'Update SEO meta tags field "Seo" (`seo`) in model "Articoli interni senza sidebar" (`story_item`)',
  );
  await client.fields.update("DKKEDlrARj6hO868faRnPQ", { validators: {} });

  console.log(
    'Update Single link field "Topic" (`topic`) in model "Articoli interni senza sidebar" (`story_item`)',
  );
  await client.fields.update("TCVey7O0RWOWRzwUynAMBA", {
    validators: {
      item_item_type: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: ["akwrV12FQhOO_nxjblKsuw"],
      },
    },
    appearance: {
      addons: [],
      editor: "link_select",
      parameters: { filters: [] },
    },
  });

  console.log(
    'Update Single asset field "Image" (`image`) in model "Articoli interni senza sidebar" (`story_item`)',
  );
  await client.fields.update("WGohI9G6TEK4uwBootOW8g", { validators: {} });

  console.log(
    'Update Single-line string field "Story Type" (`story_type`) in block model "Catalogue tab" (`catalogue_tab`)',
  );
  await client.fields.update("Gax6aKeWRaawJIZPHKRjwA", { position: 6 });

  console.log(
    'Update Modular Content (Multiple blocks) field "Content" (`content`) in block model "Additional content" (`additional_content`)',
  );
  await client.fields.update("UrEY8x1RRqCj7MDxUqa5qw", {
    validators: {
      rich_text_blocks: { item_types: ["P2lZlFmYQQKAy4hJdlrI8g"] },
      size: { eq: 3 },
    },
  });

  console.log(
    'Update Single-line string field "video url" (`video_url`) in block model "Webinar transcript" (`action_card`)',
  );
  await client.fields.update("IsGau2zwTrKnlsLudH6-Ug", { position: 4 });

  console.log(
    'Update Boolean field "is Sharable" (`is_sharable`) in block model "Webinar transcript" (`action_card`)',
  );
  await client.fields.update("Zm2IdKCYTVugdaAoGBSJKg", { position: 5 });

  console.log(
    'Update Single-line string field "share_label" (`share_label`) in block model "Webinar transcript" (`action_card`)',
  );
  await client.fields.update("JMpFV_DeSXydIcfsC6h5iQ", { position: 6 });

  console.log(
    'Update Modular Content (Single block) field "Video" (`cta`) in block model "Webinar transcript" (`action_card`)',
  );
  await client.fields.update("GoR_n6epQiWB6xvI9AMxQw", {
    label: "Video",
    validators: {
      single_block_blocks: { item_types: ["e0A0ntUCRWSlbmg1-sSF0A"] },
    },
  });

  console.log(
    'Update Modular Content (Multiple blocks) field "Content" (`content`) in model "Page" (`page`)',
  );
  await client.fields.update("GF7gIgNTSi6ithc2WsLnyg", {
    validators: {
      rich_text_blocks: {
        item_types: [
          "Awg0gTrzT1WtWycAQ5I-cw",
          "BqiyK44MT9eCdscz8pcESg",
          "BttQ-GOdSDCjRZinK2Hevw",
          "EAJfEdPjRVy9SJIOnQDM_w",
          "ISQ-koGkTSSMpTeQ7yX72w",
          "PtFD-_7RS_6HmJAq7R2c9g",
          "RH3d7bWeSlSt4w-W7s3_wg",
          "R9Sa8uDfTpSRaWMISQiDFg",
          "SC9fd201RBSV7s31u6zCKg",
          "UKWQ1GcrSWy1u0UVIWhNLg",
          "X161uMKbRhmHJinyurEdyQ",
          "Y90FAsoITzyeuRK7Q4PtiQ",
          "b0T_r6aaQMSUIrtOBO4ZTQ",
          "c2sA3G6uT_q4EBkYwbUqaw",
          "eYC6ITddSYSZVRiO1Ldt3g",
          "eoeVTiI4S362w9-yoe7i6g",
        ],
      },
    },
  });

  console.log(
    'Update Multiple-paragraph text field "Event Body" (`event_body`) in model "Webinar ed eventi" (`webinar_item`)',
  );
  await client.fields.update("f9OK7EctTU-sLbgTuWhobw", { position: 4 });

  console.log(
    'Update Modular Content (Multiple blocks) field "Content" (`content`) in model "Webinar ed eventi" (`webinar_item`)',
  );
  await client.fields.update("Wfb727NmSueefk1xQJOHMQ", {
    validators: {
      rich_text_blocks: {
        item_types: [
          "Awg0gTrzT1WtWycAQ5I-cw",
          "BUcCRaSrRduMQYR0KakZBg",
          "GEMBk406SjG8lMlYBVNfVQ",
          "MpUuOvX0QtKo7zJ_gsk5TA",
          "S6bAtHl6Rxm7J4IMCMeonQ",
          "frtlmkj5RzqxowW3cR78uw",
        ],
      },
    },
  });

  console.log("Finalize models/block models");

  console.log(
    'Update block model "GraphItalia Dashboard" (`graphitalia_dashboard`)',
  );
  await client.itemTypes.update("X161uMKbRhmHJinyurEdyQ", {
    presentation_title_field: { id: "UcbU7o0PRdiSqKFB0WTbvQ", type: "field" },
  });

  console.log(
    'Update block model "Third Party Cookies" (`third_party_cookie`)',
  );
  await client.itemTypes.update("b0T_r6aaQMSUIrtOBO4ZTQ", {
    presentation_title_field: { id: "ON8fCjQYT160y6CUKczI9g", type: "field" },
  });

  console.log("Manage model filters");

  console.log(
    'Create filter "News" of model "Articoli interni senza sidebar" (`story_item`)',
  );
  await client.itemTypeFilters.create({
    id: "PDyMbGBjQ9q9Ar6aLRkTeA",
    name: "News",
    filter: { fields: {} },
    columns: [
      { name: "_preview", width: 0.31 },
      { name: "date_of_publication", width: 0.09 },
      { name: "article_classification", width: 0.11 },
      { name: "_status", width: 0.1 },
      { name: "_updated_at", width: 0.1 },
      { name: "_created_at", width: 0.13 },
      { name: "_creator", width: 0.15 },
    ],
    order_by: "date_of_publication_DESC",
    shared: true,
    item_type: { id: "ZO62cMfeSpmP2tBt7g_u6g", type: "item_type" },
  });

  console.log(
    'Create filter "Only News" of model "Articoli interni senza sidebar" (`story_item`)',
  );
  await client.itemTypeFilters.create({
    id: "AexMPOGAQ6KDm-xL79tN2w",
    name: "Only News",
    filter: {
      fields: { article_classification: { eq: "GMc8iddaTTiyE0LjZHKZ8Q" } },
    },
    columns: [
      { name: "_preview", width: 0.31 },
      { name: "date_of_publication", width: 0.09 },
      { name: "article_classification", width: 0.11 },
      { name: "_status", width: 0.1 },
      { name: "_updated_at", width: 0.1 },
      { name: "_created_at", width: 0.13 },
      { name: "_creator", width: 0.15 },
    ],
    order_by: "date_of_publication_DESC",
    shared: true,
    item_type: { id: "ZO62cMfeSpmP2tBt7g_u6g", type: "item_type" },
  });

  console.log("Manage menu items");

  console.log('Update menu item "Header + Footer"');
  await client.menuItems.update("Wn8JsOFrSQitHeuOGHJqng", { position: 0 });

  console.log('Update menu item "Pagine di Indice"');
  await client.menuItems.update("Y55A4nbyTI2Fdfi6MrzZSQ", {
    label: "Pagine di Indice",
  });

  console.log(
    'Update menu item "Articoli interni  di pagine Indice( elenchi )"',
  );
  await client.menuItems.update("SF3QYUoPS-SA8qFDRWfZMA", {
    label: "Articoli interni  di pagine Indice( elenchi )",
  });

  console.log('Update menu item "Cards contenuto esterno"');
  await client.menuItems.update("PyJgxFm1Q-mswW_XEAE8uw", {
    label: "Cards contenuto esterno",
  });

  console.log('Update menu item "Contenuti esterni"');
  await client.menuItems.update("O75KPv-JQsahJ9TbZ_hd_Q", {
    label: "Contenuti esterni",
  });

  console.log("Manage schema menu items");

  console.log(
    'Update block schema menu item for block model "GraphItalia Dashboard" (`graphitalia_dashboard`)',
  );
  await client.schemaMenuItems.update("CBLT1uHeSjKeJhV_3n333w", {
    position: 0,
    parent: { id: "N98z0TCPROK9ijNG3DlE2A", type: "schema_menu_item" },
  });

  console.log(
    'Update block schema menu item for block model "Third Party Cookies" (`third_party_cookie`)',
  );
  await client.schemaMenuItems.update("E3_bPwFCQdmtkvumnJ77mg", {
    position: 1,
    parent: { id: "N98z0TCPROK9ijNG3DlE2A", type: "schema_menu_item" },
  });

  console.log('Update block schema menu item "Navigation"');
  await client.schemaMenuItems.update("N4pGvMpZQoa7NDkSri-tlA", {
    position: 26,
  });

  console.log('Update block schema menu item "Old"');
  await client.schemaMenuItems.update("f6iIC8NsQMKvtVgMJ61F-g", {
    position: 31,
  });

  console.log(
    'Update model schema menu item for model "Global setting" (`global_setting`)',
  );
  await client.schemaMenuItems.update("Jp4buk4gRvuY-GR3I3c6bw", {
    position: 30,
  });

  console.log('Update model schema menu item "Webinar"');
  await client.schemaMenuItems.update("C-EXbRV_TfOQEvjqKoJ-Ew", {
    position: 22,
  });

  console.log('Update model schema menu item "Resource"');
  await client.schemaMenuItems.update("c42xanSrTcGTzZUF1rsuzw", {
    position: 25,
  });

  console.log('Update model schema menu item "News"');
  await client.schemaMenuItems.update("Tk0nCGLoTRehKT5ZSXBz5A", {
    position: 24,
  });

  console.log('Update model schema menu item "Story"');
  await client.schemaMenuItems.update("HajK_tQXSGKJ5foj8eu1jQ", {
    position: 23,
  });

  console.log(
    'Update model schema menu item for model "Schema migration" (`schema_migration`)',
  );
  await client.schemaMenuItems.update("OfZFdzftQBCRJllOPQzjjA", {
    position: 29,
  });

  console.log('Update block schema menu item "List"');
  await client.schemaMenuItems.update("fc2HKkRSSq2MAOVxit4j9Q", {
    position: 27,
  });
}
