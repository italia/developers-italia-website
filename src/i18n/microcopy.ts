import type { SiteLocale } from "@graphql/types";
import en from "./locales/en.json";
import it from "./locales/it.json";

const microcopy: Record<SiteLocale, Record<string, string>> = {
  it,
  en,
};

export function getI18n(lang: SiteLocale): Record<string, string> {
  return microcopy[lang] || microcopy["it"];
}
