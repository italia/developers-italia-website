import type { SchemaTypes } from "@datocms/cma-client";
import type { SiteLocale } from "../graphql/types";

type LocalizedSchemaTypesItem = SchemaTypes.Item & {
  attributes: SchemaTypes.Item["attributes"] & {
    slug: Record<SiteLocale, string>;
  };
};

export function generateWebsiteUrl(
  item: LocalizedSchemaTypesItem,
  locale: SiteLocale,
): string | null {
  if (!item || !locale) {
    return null;
  }

  if (typeof item.attributes.slug !== "object") {
    throw new Error("Item slug is not localized");
  }

  const slug = item.attributes.slug[locale];
  return `/${locale}/${slug}`;
}
