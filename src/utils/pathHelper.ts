import {
  type AllArticlesSlugFragmentType,
  type AllInsightsSlugFragmentType,
  type AllPagesSlugFragmentType,
  type AllStoryItemsSlugFragmentType,
  type AllWebinarItemsSlugFragmentType,
} from "@graphql/fragment/slugFragments";
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
  allTopicLocales?:
    | {
        locale: SiteLocale | null;
        value: { label: string } | null;
      }[]
    | null;
};

type Step = { id: string; slug: string; title: string; category?: string };

const getSlug = (item: HasLocales, locale: string) =>
  item?.allSlugLocales?.find((s) => s.locale === locale)?.value;
const getTitle = (item: HasLocales, locale: string) =>
  item?.allTitleLocales?.find((t) => t.locale === locale)?.value || "No title";

const getCategory = (item: HasLocales, locale: string) =>
  item?.allTopicLocales?.find((t) => t.locale === locale)?.value?.label ||
  undefined;

export type RoutableRecord =
  | AllArticlesSlugFragmentType
  | AllInsightsSlugFragmentType
  | AllStoryItemsSlugFragmentType
  | AllWebinarItemsSlugFragmentType
  | AllPagesSlugFragmentType;

export function resolveRoutePath(
  record: RoutableRecord,
  locale: SiteLocale,
  allRecords?: RoutableRecord[],
  category?: string,
) {
  const steps: Step[] = [];

  const visitedIds = new Set<string>();
  let current: RoutableRecord | null = record;

  while (current && !visitedIds.has(current.id)) {
    visitedIds.add(current.id);

    const slug = getSlug(current, locale);
    const title = getTitle(current, locale);
    const topic = getCategory(current, locale);

    if (slug) {
      steps.unshift({
        id: current.id,
        slug: slug,
        title: title,
        category: category || topic || title,
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
      current = current.parentPage as RoutableRecord;
      continue;
    }

    current = null;
  }

  return {
    fullPath: steps.map((s) => s.slug).join("/"),
    steps,
  };
}

export function removeLang(fullPath: string, lang: string) {
  return fullPath.replace(new RegExp(`^/${lang}/?`), "").replace(/\/$/, "");
}
