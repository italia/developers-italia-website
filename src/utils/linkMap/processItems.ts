import type { CatalogueIndexingFragmentType } from "@graphql/fragment/indexing";
import type { HomepageFragmentType } from "@graphql/fragment/slugFragments";
import type { SiteLocale } from "@graphql/types";
import { getLocaleValue } from "@utils/getLocaleValue";
import { getCataloguesMapCategory } from "@utils/indexing/getCategory";
import { resolveRoutePath, type RoutableRecord } from "@utils/pathHelper";

export type HasTitles = {
  allTitleLocales:
    | {
        locale: SiteLocale | null;
        value: string;
      }[]
    | null;
};

export type BreadcrumbStep = {
  title: string;
  id: string;
};

export type PageRouteInfo = {
  path: string;
  breadcrumb: BreadcrumbStep[];
};

export type LocaleMap = Record<SiteLocale, PageRouteInfo>;

export type SiteMap = Record<string, LocaleMap>;

export const getTitle = (item: HasTitles, locale: string) => {
  if (!item) return "";
  return getLocaleValue(item.allTitleLocales, locale, "");
};

const processGenericItems = <T extends RoutableRecord>(
  items: T[],
  linkMap: SiteMap,
  home: HomepageFragmentType | null,
  options: {
    getPathInfo?: (
      item: T,
      locale: SiteLocale,
    ) => { fullPath: string; steps: any[] };
    transformSteps: (
      steps: any[],
      item: T,
      locale: SiteLocale,
    ) => BreadcrumbStep[];
  },
) => {
  items?.forEach((item) => {
    linkMap[item.id] = {} as LocaleMap;

    item.locales.forEach((locale) => {
      const { fullPath, steps } = options.getPathInfo
        ? options.getPathInfo(item, locale)
        : resolveRoutePath(item, locale, items);

      linkMap[item.id][locale] = {
        path: `/${locale}/${fullPath}`,
        breadcrumb: home
          ? [{ title: getTitle(home, locale), id: home.id }]
          : [],
      };

      const transformedSteps = options.transformSteps(steps, item, locale);
      linkMap[item.id][locale].breadcrumb.push(...transformedSteps);
    });
  });
};
export const processItemsPages = (items: any[], linkMap: SiteMap, home: any) =>
  processGenericItems(items, linkMap, home, {
    transformSteps: (steps) => steps.map((s) => ({ title: s.title, id: s.id })),
  });

export const processItemsNestedPages = (
  items: any[],
  linkMap: SiteMap,
  home: any,
) =>
  processGenericItems(items, linkMap, home, {
    transformSteps: (steps) =>
      steps.slice(0, 2).map((s) => ({ title: s.title, id: s.id })),
  });

const categoryTransformer = (steps: any[]) => {
  const otherSteps = steps
    .slice(0, -1)
    .map((s) => ({ title: s.title, id: s.id }));
  const last = steps[steps.length - 1];
  return [...otherSteps, { title: last?.category || "", id: last?.id }];
};

export const processItemsCategoryPages = (
  items: any[],
  linkMap: SiteMap,
  home: any,
) =>
  processGenericItems(items, linkMap, home, {
    transformSteps: categoryTransformer,
  });

export const processItemsTabPages = (
  items: any[],
  linkMap: SiteMap,
  home: any,
  allTabs: CatalogueIndexingFragmentType[],
) =>
  processGenericItems(items, linkMap, home, {
    getPathInfo: (item, locale) => {
      const tabsCategory = getCataloguesMapCategory(allTabs, locale);
      const category = tabsCategory
        .flatMap((cat) => cat.type)
        .find((t) => t.type === item.modelApiKey)?.title;
      return resolveRoutePath(item, locale, items, category);
    },
    transformSteps: categoryTransformer,
  });
