import type {
  ArticleIndexingFragmentType,
  CatalogueIndexingFragmentType,
} from "@graphql/fragment/indexing";
import type {
  CatalogueLocalesFragmentType,
  PageLocalesFragmentType,
} from "@graphql/fragment/metaFragments";
import type { SiteLocale } from "@graphql/types";
import { DatoBlockModel } from "@utils/cmsMapper";
import { getLocaleValue } from "@utils/getLocaleValue";

type tabType = { type: string; title: string };
type catalogueMapCategory = { type: tabType[]; title?: string };
export const getCategoryName = (
  page: PageLocalesFragmentType | CatalogueLocalesFragmentType | null,
  lang: SiteLocale,
): string => {
  if (!page) return "";
  return getLocaleValue(page.allTitleLocales, lang, "");
};

export const resolveArticleCategory = (
  items: ArticleIndexingFragmentType[],
  lang: SiteLocale,
): string => {
  const firstValidParent = items.find((item) => item.parentPage)?.parentPage;

  if (!firstValidParent) return "";

  return getLocaleValue(firstValidParent.allTitleLocales, lang, "");
};

export const getTitleByTypeNews = (
  catalogues: catalogueMapCategory[],
  searchType: string,
): string | undefined => {
  const catalogueMatch = catalogues.find((item) =>
    item.type.some((t) => t.type === searchType),
  );
  if (!catalogueMatch) return undefined;

  const specificType = catalogueMatch.type.find((t) => t.type === searchType);
  return `${catalogueMatch?.title}, ${specificType?.title}`;
};

export const getTitleByTypeResourse = (
  catalogues: catalogueMapCategory[],
  searchType: string,
): string | undefined => {
  const catalogueMatch = catalogues.find((item) =>
    item.type.some((t) => t.type === searchType),
  );

  return catalogueMatch?.title;
};

export const getCataloguesMapCategory = (
  allCatalogues: CatalogueIndexingFragmentType[],
  lang: SiteLocale,
): catalogueMapCategory[] => {
  return allCatalogues.map((catalogue) => {
    const title = getLocaleValue(catalogue.allTitleLocales, lang, "");
    const feedRecord = catalogue.content.find(
      (item) => item.componentName === DatoBlockModel.CatalogueFeed,
    );
    let tabTypes: tabType[] = [];
    if (feedRecord && "tabs" in feedRecord) {
      tabTypes =
        feedRecord.tabs?.map((item) => {
          return { type: item.newsPageTabType, title: item.title };
        }) || [];
    }

    return {
      type: tabTypes,
      title,
    };
  });
};
