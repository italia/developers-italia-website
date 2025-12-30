import type { AllArticlesSlugFragmentType } from "@graphql/templateFragments";
import type { SiteLocale } from "../graphql/types";

interface HasSlugLocales {
  allSlugLocales?:
    | {
        locale?: SiteLocale | string | null;
        value?: string | null;
      }[]
    | null;
}

export function buildFullPath(
  article: AllArticlesSlugFragmentType,
  locale: SiteLocale,
  allArticles: AllArticlesSlugFragmentType[],
) {
  const segments = [];

  const getSlug = (item: HasSlugLocales | null | undefined) =>
    item?.allSlugLocales?.find((s) => s.locale === locale)?.value;

  let current: AllArticlesSlugFragmentType | null = article;

  while (current) {
    const slug = getSlug(current);
    if (slug) segments.unshift(slug);

    if (!current.parent && current.parentPage) {
      const parentPageSlug = getSlug(current.parentPage);
      if (parentPageSlug) segments.unshift(parentPageSlug);
    }

    if (current.parent?.id) {
      const parentId: string = current.parent.id;
      const foundArticle = allArticles.find((a) => a.id === parentId);
      current = foundArticle || null;
    } else {
      current = null;
    }
  }

  return segments.join("/");
}
