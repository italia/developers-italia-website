import type { SiteLocale } from "@graphql/types";

type LocalizedField<T> = {
  locale: SiteLocale | null;
  value: T;
};

export function getLocaleValue<T>(
  field: LocalizedField<T>[] | undefined | null,
  lang: string,
  fallback: T,
): T {
  if (!field || !Array.isArray(field)) return fallback;
  const entry = field.find((f) => f.locale === lang);
  return entry ? entry.value : fallback;
}
