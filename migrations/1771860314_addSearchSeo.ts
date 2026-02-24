import { Client } from "@datocms/cli/lib/cma-client-node";

export default async function (client: Client) {
  console.log("Creating new fields/fieldsets");

  console.log(
    'Create SEO meta tags field "Seo" (`seo`) in model "Search" (`search`)',
  );
  await client.fields.create("dSXr54WhSk-BrPLr-titlA", {
    id: "DI2DQpUIRbCTsQBPrvA10Q",
    label: "Seo",
    field_type: "seo",
    api_key: "seo",
    localized: true,
    validators: { title_length: { max: 60 }, description_length: { max: 160 } },
    appearance: {
      addons: [],
      editor: "seo",
      parameters: {
        fields: ["title", "description", "image", "no_index", "twitter_card"],
        previews: [
          "google",
          "twitter",
          "facebook",
          "linkedin",
          "slack",
          "telegram",
          "whatsapp",
        ],
      },
    },
  });
}
