import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Update existing fields/fieldsets");

  console.log(
    'Update Structured text field "Content" (`content`) in block model "Article structured text" (`structured_text`)',
  );
  await client.fields.update("arBIa9zIQeOjyueDykCqGw", {
    validators: {
      required: {},
      structured_text_blocks: {
        item_types: [
          "CUjz6lUdSTam7sSU7fqWGw",
          "IRda12RgS6maZGJoAyWaKw",
          "IzWzz4YeQcqJ7J34Xie2xg",
          "Lx5afhIlRzS2IxfP0urtSA",
          "NUwINVMPRTCl0alUb9zAag",
          "SYB-ZWCvQq2KdO_yrUxS2g",
          "UKWQ1GcrSWy1u0UVIWhNLg",
          "UXCUVsLhQJ2bxgV07x8t5w",
          "bSjFz6cBSnWfCOaqR-RWVg",
          "fhF1HPNNQlKNy5KNGfLtuw",
        ],
      },
      structured_text_inline_blocks: { item_types: [] },
      structured_text_links: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [],
      },
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
          "EAJfEdPjRVy9SJIOnQDM_w",
          "ISQ-koGkTSSMpTeQ7yX72w",
          "PtFD-_7RS_6HmJAq7R2c9g",
          "RH3d7bWeSlSt4w-W7s3_wg",
          "R9Sa8uDfTpSRaWMISQiDFg",
          "SC9fd201RBSV7s31u6zCKg",
          "UKWQ1GcrSWy1u0UVIWhNLg",
          "c2sA3G6uT_q4EBkYwbUqaw",
          "eoeVTiI4S362w9-yoe7i6g",
        ],
      },
    },
  });

  console.log(
    'Update Structured text field "Content" (`content`) in model "Article" (`article`)',
  );
  await client.fields.update("VACT72qFRYq6ztu2QwKCLg", {
    validators: {
      structured_text_blocks: {
        item_types: [
          "CUjz6lUdSTam7sSU7fqWGw",
          "HZqkL_jAQhOLDzlnGQ2pDg",
          "IRda12RgS6maZGJoAyWaKw",
          "IzWzz4YeQcqJ7J34Xie2xg",
          "Lx5afhIlRzS2IxfP0urtSA",
          "NUwINVMPRTCl0alUb9zAag",
          "SYB-ZWCvQq2KdO_yrUxS2g",
          "UKWQ1GcrSWy1u0UVIWhNLg",
          "UXCUVsLhQJ2bxgV07x8t5w",
          "bSjFz6cBSnWfCOaqR-RWVg",
          "fhF1HPNNQlKNy5KNGfLtuw",
        ],
      },
      structured_text_inline_blocks: { item_types: [] },
      structured_text_links: {
        on_publish_with_unpublished_references_strategy: "fail",
        on_reference_unpublish_strategy: "delete_references",
        on_reference_delete_strategy: "delete_references",
        item_types: [],
      },
    },
  });

  console.log(
    'Update Modular Content (Multiple blocks) field "Content" (`content`) in model "Homepage" (`homepage`)',
  );
  await client.fields.update("WZVHotolRE6evlVhD7wjTg", {
    validators: {
      rich_text_blocks: {
        item_types: [
          "Awg0gTrzT1WtWycAQ5I-cw",
          "PtFD-_7RS_6HmJAq7R2c9g",
          "RH3d7bWeSlSt4w-W7s3_wg",
          "R9Sa8uDfTpSRaWMISQiDFg",
          "U50kKrnkSua6L3eIAEFHhA",
          "Y90FAsoITzyeuRK7Q4PtiQ",
        ],
      },
    },
  });

  console.log(
    'Update Modular Content (Multiple blocks) field "Content" (`content`) in model "Webinar item" (`webinar_item`)',
  );
  await client.fields.update("Wfb727NmSueefk1xQJOHMQ", {
    validators: {
      rich_text_blocks: {
        item_types: [
          "Awg0gTrzT1WtWycAQ5I-cw",
          "GEMBk406SjG8lMlYBVNfVQ",
          "MpUuOvX0QtKo7zJ_gsk5TA",
          "S6bAtHl6Rxm7J4IMCMeonQ",
        ],
      },
    },
  });

  console.log(
    'Update Modular Content (Multiple blocks) field "Content" (`content`) in model "Story item" (`story_item`)',
  );
  await client.fields.update("OYuuCRLUQTWwMIG_xLWyAw", {
    validators: {
      rich_text_blocks: {
        item_types: [
          "Awg0gTrzT1WtWycAQ5I-cw",
          "BUcCRaSrRduMQYR0KakZBg",
          "EAJfEdPjRVy9SJIOnQDM_w",
          "UKWQ1GcrSWy1u0UVIWhNLg",
        ],
      },
    },
  });
}
