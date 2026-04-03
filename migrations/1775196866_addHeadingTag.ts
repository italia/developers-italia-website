import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Creating new fields/fieldsets");

  console.log(
    'Create Single-line string field "Heading" (`heading`) in block model "Text only" (`text_only`)',
  );
  await client.fields.create("BttQ-GOdSDCjRZinK2Hevw", {
    id: "G5M4Oc0pRl2kHgPwvwT_rQ",
    label: "Heading",
    field_type: "string",
    api_key: "heading",
    validators: { enum: { values: ["h2", "h3", "h4", "h5"] } },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: null },
    },
    default_value: "h2",
  });

  console.log(
    'Create Single-line string field "Heading" (`heading`) in block model "Text + image" (`text_image`)',
  );
  await client.fields.create("PtFD-_7RS_6HmJAq7R2c9g", {
    id: "OhJuTDFVRKG3Az_2wYeIFQ",
    label: "Heading",
    field_type: "string",
    api_key: "heading",
    validators: { enum: { values: ["h2", "h3", "h4", "h5"] } },
    appearance: {
      addons: [],
      editor: "single_line",
      parameters: { heading: false, placeholder: "" },
    },
    default_value: "h2",
  });

  console.log("Update existing fields/fieldsets");

  console.log(
    'Update Single-line string field "Heading" (`heading`) in block model "Text only" (`text_only`)',
  );
  await client.fields.update("G5M4Oc0pRl2kHgPwvwT_rQ", { position: 2 });

  console.log(
    'Update Single-line string field "Heading" (`heading`) in block model "Text + image" (`text_image`)',
  );
  await client.fields.update("OhJuTDFVRKG3Az_2wYeIFQ", { position: 3 });
}
