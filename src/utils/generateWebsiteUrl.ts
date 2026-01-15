import type { SchemaTypes } from "@datocms/cma-client";
import type { SiteLocale } from "@graphql/types";
import { linkResolver } from "./linkResolver";

type LocalizedSchemaTypesItem = SchemaTypes.Item & {
  attributes: SchemaTypes.Item["attributes"] & {
    slug?: Record<SiteLocale, string>;
  };
};

export function generateWebsiteUrl(
  id: string,
  item: LocalizedSchemaTypesItem,
  locale: SiteLocale,
): string | null {
  if (!item || !locale) {
    return null;
  }

  const slugProduction = linkResolver(id, locale);

  if (slugProduction !== "#") return slugProduction;

  const parts = [locale, item.attributes.slug?.[locale]].filter(Boolean);

  return `/${parts.join("/")}`;
}
