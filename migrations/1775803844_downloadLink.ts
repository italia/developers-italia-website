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
          "Nwki1YZWRhqgFtIM3Hdgqw",
          "Om27rthoTNiekMEFeTCmjQ",
          "SYB-ZWCvQq2KdO_yrUxS2g",
          "UKWQ1GcrSWy1u0UVIWhNLg",
          "UXCUVsLhQJ2bxgV07x8t5w",
          "Vtse6ZCgT2uB4Uh3wh0ikg",
          "bSjFz6cBSnWfCOaqR-RWVg",
          "e0A0ntUCRWSlbmg1-sSF0A",
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
    'Update Structured text field "Article structured text" (`content`) in model "Article" (`article`)',
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
          "Nwki1YZWRhqgFtIM3Hdgqw",
          "Om27rthoTNiekMEFeTCmjQ",
          "SYB-ZWCvQq2KdO_yrUxS2g",
          "UKWQ1GcrSWy1u0UVIWhNLg",
          "UXCUVsLhQJ2bxgV07x8t5w",
          "Vtse6ZCgT2uB4Uh3wh0ikg",
          "bSjFz6cBSnWfCOaqR-RWVg",
          "e0A0ntUCRWSlbmg1-sSF0A",
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
}
