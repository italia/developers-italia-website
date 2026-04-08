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
    'Update Date field "Date of publication" (`date_of_publication`) in model "Story item" (`story_item`)',
  );
  await client.fields.update("TLr4UJyBRXCvba3_Bpf5PA", { validators: {} });
}
