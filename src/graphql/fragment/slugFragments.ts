import {
  ArticleLocalesFragment,
  CatalogueLocalesFragment,
  InsightLocalesFragment,
  PageLocalesFragment,
  StoryItemLocalesFragment,
  WebinarItemLocalesFragment,
} from "@graphql/fragment/metaFragments";
import { graphql, type FragmentOf } from "@graphql/graphql";

export const AllArticlesSlugFragment = graphql(
  `
    fragment AllArticlesSlugFragment on ArticleRecord @_unmask {
      id
      locales: _locales
      ...ArticleLocalesFragment
      parent {
        id
      }
      parentPage {
        id
        ...PageLocalesFragment
      }
    }
  `,
  [PageLocalesFragment, ArticleLocalesFragment],
);

export type AllArticlesSlugFragmentType = FragmentOf<
  typeof AllArticlesSlugFragment
>;

export const AllPagesSlugFragment = graphql(
  `
    fragment AllPagesSlugFragment on PageRecord @_unmask {
      id
      locales: _locales
      ...PageLocalesFragment
    }
  `,
  [PageLocalesFragment],
);

export type AllPagesSlugFragmentType = FragmentOf<typeof AllPagesSlugFragment>;

export const AllInsightsSlugFragment = graphql(
  `
    fragment AllInsightsSlugFragment on InsightRecord @_unmask {
      id
      modelApiKey: _modelApiKey
      locales: _locales
      ...InsightLocalesFragment
      parentPage {
        id
        ...PageLocalesFragment
      }
    }
  `,
  [PageLocalesFragment, InsightLocalesFragment],
);

export type AllInsightsSlugFragmentType = FragmentOf<
  typeof AllInsightsSlugFragment
>;

export const AllStoryItemsSlugFragment = graphql(
  `
    fragment AllStoryItemsSlugFragment on StoryItemRecord @_unmask {
      id
      modelApiKey: _modelApiKey
      locales: _locales
      ...StoryItemLocalesFragment
      parentPage {
        ... on RecordInterface {
          id
        }
        ... on CatalogueRecord {
          ...CatalogueLocalesFragment
        }
        ... on PageRecord {
          ...PageLocalesFragment
        }
      }
    }
  `,
  [PageLocalesFragment, CatalogueLocalesFragment, StoryItemLocalesFragment],
);

export type AllStoryItemsSlugFragmentType = FragmentOf<
  typeof AllStoryItemsSlugFragment
>;

export const AllWebinarItemsSlugFragment = graphql(
  `
    fragment AllWebinarItemsSlugFragment on WebinarItemRecord @_unmask {
      id
      locales: _locales
      modelApiKey: _modelApiKey
      ...WebinarItemLocalesFragment
      parentPage {
        ... on RecordInterface {
          id
        }
        ... on CatalogueRecord {
          ...CatalogueLocalesFragment
        }
        ... on PageRecord {
          ...PageLocalesFragment
        }
      }
    }
  `,
  [PageLocalesFragment, CatalogueLocalesFragment, WebinarItemLocalesFragment],
);

export type AllWebinarItemsSlugFragmentType = FragmentOf<
  typeof AllWebinarItemsSlugFragment
>;

export const AllCataloguesSlugFragment = graphql(
  `
    fragment AllCataloguesSlugFragment on CatalogueRecord @_unmask {
      id
      locales: _locales
      ...CatalogueLocalesFragment
    }
  `,
  [CatalogueLocalesFragment],
);

export type AllCataloguesSlugFragmentType = FragmentOf<
  typeof AllCataloguesSlugFragment
>;

export const HomepageFragment = graphql(
  `
    fragment HomepageFragment on HomepageRecord @_unmask {
      id
      locales: _locales
      allTitleLocales: _allTitleLocales {
        locale
        value
      }
    }
  `,
  [],
);

export type HomepageFragmentType = FragmentOf<typeof HomepageFragment>;

export const SearchFragment = graphql(
  `
    fragment SearchFragment on SearchRecord @_unmask {
      id
      locales: _locales
      allSlugLocales: _allSlugLocales {
        locale
        value
      }
      allTitleLocales: _allTitleLocales {
        locale
        value
      }
    }
  `,
  [],
);

export type SearchFragmentType = FragmentOf<typeof SearchFragment>;
