import type { SchemaTypes } from "@datocms/cma-client";

export function generateWebsiteUrl(
  item: SchemaTypes.Item,
  locale: string,
): string | null {
  if (!item || !locale) {
    return null;
  }
  const slug = (item.attributes.slug as Record<string, string>)[locale];
  return `/${locale}/${slug}`;
}
