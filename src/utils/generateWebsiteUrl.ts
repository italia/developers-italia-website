import type { SchemaTypes } from "@datocms/cma-client";
import type { SiteLocale } from "@graphql/types";

type LocalizedSchemaTypesItem = SchemaTypes.Item & {
  attributes: SchemaTypes.Item["attributes"] & {
    slug?: Record<SiteLocale, string>;
  };
};

export function generateWebsiteUrl(
  item: LocalizedSchemaTypesItem,
  locale: SiteLocale,
): string | null {
  if (!item || !locale) {
    return null;
  }

  const parts = [locale, item.attributes.slug?.[locale]].filter(Boolean);

  return `/${parts.join("/")}`;
}
