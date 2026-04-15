import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Update existing fields/fieldsets");

  console.log(
    'Update Modular Content (Multiple blocks) field "Content" (`content`) in model "Insight" (`insight`)',
  );
  await client.fields.update("Bnfp0BclTQCKPkHD3lvmPg", {
    validators: {
      rich_text_blocks: {
        item_types: [
          "Awg0gTrzT1WtWycAQ5I-cw",
          "BUcCRaSrRduMQYR0KakZBg",
          "BqiyK44MT9eCdscz8pcESg",
          "BttQ-GOdSDCjRZinK2Hevw",
          "EAJfEdPjRVy9SJIOnQDM_w",
          "PtFD-_7RS_6HmJAq7R2c9g",
          "R9Sa8uDfTpSRaWMISQiDFg",
          "SC9fd201RBSV7s31u6zCKg",
          "TTn5BjxOSdORIaGWSZ4MRg",
          "UKWQ1GcrSWy1u0UVIWhNLg",
          "U50kKrnkSua6L3eIAEFHhA",
          "Y90FAsoITzyeuRK7Q4PtiQ",
          "eYC6ITddSYSZVRiO1Ldt3g",
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
          "BUcCRaSrRduMQYR0KakZBg",
          "GEMBk406SjG8lMlYBVNfVQ",
          "MpUuOvX0QtKo7zJ_gsk5TA",
          "S6bAtHl6Rxm7J4IMCMeonQ",
        ],
      },
    },
  });
}
