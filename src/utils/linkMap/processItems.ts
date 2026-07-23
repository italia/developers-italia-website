import type { CatalogueIndexingFragmentType } from "@graphql/fragment/indexing";
import type { HomepageFragmentType } from "@graphql/fragment/slugFragments";
import type { SiteLocale } from "@graphql/types";
import { DatoBlockModel } from "@utils/cmsMapper";
import { getLocaleValue } from "@utils/getLocaleValue";
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

// Individua la pagina indice (catalogo) che elenca un contenuto "a tab"
// (notizie, eventi, piattaforme). Il tab del catalogo dichiara il tipo di
// modello elencato e, per le story, la classificazione (`filterStory`) che
// distingue le Notizie dalle Piattaforme: senza quel filtro il solo tipo di
// modello è ambiguo, perché entrambe sono `story_item`.
const findOwningCatalogue = (
  catalogues: CatalogueIndexingFragmentType[],
  item: {
    modelApiKey?: string;
    articleClassification?: { id: string } | null;
  },
) => {
  const tabsOf = (catalogue: CatalogueIndexingFragmentType) =>
    catalogue.content.flatMap((block) =>
      block.componentName === DatoBlockModel.CatalogueFeed && "tabs" in block
        ? (block.tabs ?? [])
        : [],
    );

  const matchByType = (withClassification: boolean) =>
    catalogues.find((catalogue) =>
      tabsOf(catalogue).some(
        (tab) =>
          tab.newsPageTabType === item.modelApiKey &&
          (withClassification
            ? !!tab.filterStory &&
              tab.filterStory.id === item.articleClassification?.id
            : !tab.filterStory),
      ),
    );

  return matchByType(true) ?? matchByType(false);
};

export const processItemsTabPages = (
  items: any[],
  linkMap: SiteMap,
  home: any,
  allTabs: CatalogueIndexingFragmentType[],
) =>
  processGenericItems(items, linkMap, home, {
    transformSteps: (steps, item, locale) => {
      const last = steps[steps.length - 1];
      const selfStep = { title: last?.title || "", id: item.id };

      // Il breadcrumb si aggancia alla gerarchia del catalogo che elenca il
      // contenuto (es. Community → Notizie), non alla catena parent_page del
      // record, che per le notizie può puntare altrove (es. Progetto). Il
      // path resta invece derivato dal parent_page: nessun URL cambia.
      const catalogue = findOwningCatalogue(allTabs, item);
      const catalogueCrumb =
        catalogue && linkMap[catalogue.id]?.[locale]?.breadcrumb;

      if (catalogueCrumb?.length) {
        // la prima voce del breadcrumb del catalogo è la home, che
        // processGenericItems aggiunge già di suo
        return [...catalogueCrumb.slice(1), selfStep];
      }

      return [
        ...steps.slice(0, -1).map((s) => ({ title: s.title, id: s.id })),
        selfStep,
      ];
    },
  });
