import {
  type AllArticlesSlugFragmentType,
  type AllInsightsSlugFragmentType,
  type AllPagesSlugFragmentType,
  type AllStoryItemsSlugFragmentType,
  type AllWebinarItemsSlugFragmentType,
} from "@graphql/slugFragments";
import type { SiteLocale } from "../graphql/types";

type HasLocales = {
  allSlugLocales:
    | {
        locale: SiteLocale | null;
        value: string;
      }[]
    | null;
  allTitleLocales:
    | {
        locale: SiteLocale | null;
        value: string;
      }[]
    | null;
};

type Step = { id: string; slug: string; title: string };

const getSlug = (item: HasLocales, locale: string) =>
  item?.allSlugLocales?.find((s) => s.locale === locale)?.value;
const getTitle = (item: HasLocales, locale: string) =>
  item?.allTitleLocales?.find((t) => t.locale === locale)?.value || "No title";

export type RoutableRecord =
  | AllArticlesSlugFragmentType
  | AllInsightsSlugFragmentType
  | AllStoryItemsSlugFragmentType
  | AllWebinarItemsSlugFragmentType
  | AllPagesSlugFragmentType;

export function resolveRoutePath(
  record: RoutableRecord,
  locale: SiteLocale,
  allRecords: RoutableRecord[],
) {
  const steps: Step[] = [];

  const visitedIds = new Set<string>();
  let current: RoutableRecord | null = record;

  while (current && !visitedIds.has(current.id)) {
    visitedIds.add(current.id);

    const slug = getSlug(current, locale);
    const title = getTitle(current, locale);

    if (slug) {
      steps.unshift({
        id: current.id,
        slug: slug,
        title: title,
      });
    }

    if ("parent" in current && current.parent?.id) {
      const parentId: string = current.parent.id;
      current = allRecords?.find((record) => record.id === parentId) || null;
      continue;
    }

    if (
      "parentPage" in current &&
      current.parentPage &&
      "id" in current.parentPage
    ) {
      const parentPage = current.parentPage;
      const pSlug = getSlug(parentPage, locale);
      const pTitle = getTitle(parentPage, locale);

      if (pSlug) {
        steps.unshift({
          id: parentPage.id,
          slug: pSlug,
          title: pTitle,
        });
      }
    }

    current = null;
  }

  return {
    fullPath: steps.map((s) => s.slug).join("/"),
    steps,
  };
}
