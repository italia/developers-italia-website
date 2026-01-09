import { graphql, type FragmentOf } from "@graphql/graphql";
import {
  ArticleLocalesFragment,
  InsightLocalesFragment,
  NewsPageLocalesFragment,
  PageLocalesFragment,
  StoryItemLocalesFragment,
  WebinarItemLocalesFragment,
} from "@graphql/metaFragments";
import { LocaleFragment } from "@graphql/commonFragments";

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
  [LocaleFragment, PageLocalesFragment, ArticleLocalesFragment],
);

export type AllArticlesSlugFragmentType = FragmentOf<
  typeof AllArticlesSlugFragment
>;

export const AllPagesSlugFragment = graphql(
  `
    fragment AllPagesSlugFragment on PageRecord @_unmask {
      id
      ...PageLocalesFragment
    }
  `,
  [LocaleFragment, PageLocalesFragment],
);

export type AllPagesSlugFragmentType = FragmentOf<typeof AllPagesSlugFragment>;

export const AllInsightsSlugFragment = graphql(
  `
    fragment AllInsightsSlugFragment on InsightRecord @_unmask {
      id
      locales: _locales
      ...InsightLocalesFragment
      parentPage {
        id
        ...PageLocalesFragment
      }
    }
  `,
  [LocaleFragment, PageLocalesFragment, InsightLocalesFragment],
);

export type AllInsightsSlugFragmentType = FragmentOf<
  typeof AllInsightsSlugFragment
>;

export const AllStoryItemsSlugFragment = graphql(
  `
    fragment AllStoryItemsSlugFragment on StoryItemRecord @_unmask {
      id
      locales: _locales
      ...StoryItemLocalesFragment
      parentPage {
        ... on RecordInterface {
          id
        }
        ... on NewsPageRecord {
          ...NewsPageLocalesFragment
        }
        ... on PageRecord {
          ...PageLocalesFragment
        }
      }
    }
  `,
  [
    LocaleFragment,
    PageLocalesFragment,
    NewsPageLocalesFragment,
    StoryItemLocalesFragment,
  ],
);

export type AllStoryItemsSlugFragmentType = FragmentOf<
  typeof AllStoryItemsSlugFragment
>;

export const AllWebinarItemsSlugFragment = graphql(
  `
    fragment AllWebinarItemsSlugFragment on WebinarItemRecord @_unmask {
      id
      locales: _locales
      ...WebinarItemLocalesFragment
      parentPage {
        ... on RecordInterface {
          id
        }
        ... on NewsPageRecord {
          ...NewsPageLocalesFragment
        }
        ... on PageRecord {
          ...PageLocalesFragment
        }
      }
    }
  `,
  [
    LocaleFragment,
    PageLocalesFragment,
    NewsPageLocalesFragment,
    WebinarItemLocalesFragment,
  ],
);

export type AllWebinarItemsSlugFragmentType = FragmentOf<
  typeof AllWebinarItemsSlugFragment
>;
