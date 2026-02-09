import {
  DownloadLinkFragment,
  ExternalLinkFragment,
  LocaleFragment,
} from "@graphql/commonFragments";
import { graphql, type FragmentOf } from "@graphql/graphql";
import {
  ArticleLocalesFragment,
  InsightLocalesFragment,
  PageLocalesFragment,
  StoryItemLocalesFragment,
  WebinarItemLocalesFragment,
} from "@graphql/metaFragments";
import {
  AllArticlesSlugFragment,
  AllInsightsSlugFragment,
  AllPagesSlugFragment,
  AllStoryItemsSlugFragment,
  AllWebinarItemsSlugFragment,
} from "@graphql/slugFragments";
import {
  ArticleContentFragment,
  HomepageModelContentFragment,
  InsightContentFragment,
  PageContentFragment,
  StoryContentFragment,
  WebinarContentFragment,
} from "@graphql/templateFragments";

export const ArticleIndexingFragment = graphql(
  `
    fragment ArticleIndexingFragment on ArticleRecord @_unmask {
      id
      ...AllArticlesSlugFragment
      ...ArticleLocalesFragment
      allParagraphLocales: _allParagraphLocales {
        locale
        value
      }

      allContentLocales: _allContentLocales {
        locale
        value {
          ...ArticleContentFragment
        }
      }
    }
  `,
  [ArticleContentFragment, ArticleLocalesFragment, AllArticlesSlugFragment],
);

export type ArticleIndexingFragmentType = FragmentOf<
  typeof ArticleIndexingFragment
>;

export const InsightIndexingFragment = graphql(
  `
    fragment InsightIndexingFragment on InsightRecord @_unmask {
      id
      ...AllInsightsSlugFragment
      ...InsightLocalesFragment
      allAbstractLocales: _allAbstractLocales {
        locale
        value
      }

      allContentLocales: _allContentLocales {
        locale
        value {
          ...InsightContentFragment
        }
      }
    }
  `,
  [AllInsightsSlugFragment, InsightLocalesFragment, InsightContentFragment],
);

export type InsightIndexingFragmentType = FragmentOf<
  typeof InsightIndexingFragment
>;

export const StoryIndexingFragment = graphql(
  `
    fragment StoryIndexingFragment on StoryItemRecord @_unmask {
      id
      ...AllStoryItemsSlugFragment
      ...StoryItemLocalesFragment
      allContentLocales: _allContentLocales {
        locale
        value {
          ...StoryContentFragment
        }
      }
    }
  `,
  [AllStoryItemsSlugFragment, StoryItemLocalesFragment, StoryContentFragment],
);

export type StoryIndexingFragmentType = FragmentOf<
  typeof StoryIndexingFragment
>;

export const NewsIndexingFragment = graphql(
  `
    fragment NewsIndexingFragment on NewsItemRecord @_unmask {
      id
      modelApiKey: _modelApiKey
      allTitleLocales: _allTitleLocales {
        ...LocaleFragment
      }
      allLinkLocales: _allLinkLocales {
        ...LocaleFragment
      }
      allParagraphLocales: _allParagraphLocales {
        ...LocaleFragment
      }
    }
  `,
  [LocaleFragment],
);

export type NewsIndexingFragmentType = FragmentOf<typeof NewsIndexingFragment>;

export const WebinarIndexingFragment = graphql(
  `
    fragment WebinarIndexingFragment on WebinarItemRecord @_unmask {
      id
      allTitleLocales: _allTitleLocales {
        ...LocaleFragment
      }
      ...AllWebinarItemsSlugFragment
      ...WebinarItemLocalesFragment
      allParagraphLocales: _allParagraphLocales {
        ...LocaleFragment
      }
      allContentLocales: _allContentLocales {
        locale
        value {
          ...WebinarContentFragment
        }
      }
    }
  `,
  [
    AllWebinarItemsSlugFragment,
    WebinarContentFragment,
    LocaleFragment,
    WebinarItemLocalesFragment,
  ],
);

export type WebinarIndexingFragmentType = FragmentOf<
  typeof WebinarIndexingFragment
>;

export const ResourseIndexingFragment = graphql(
  `
    fragment ResourseIndexingFragment on ResourceRecord @_unmask {
      id
      modelApiKey: _modelApiKey
      allResourseLocales: _allResourceLocales {
        locale
        value {
          ... on RecordInterface {
            id
            componentName: __typename
          }
          ... on ExternalLinkRecord {
            ...ExternalLinkFragment
          }
          ... on DownloadLinkRecord {
            ...DownloadLinkFragment
          }
        }
      }
    }
  `,
  [ExternalLinkFragment, DownloadLinkFragment],
);

export type ResourseIndexingFragmentType = FragmentOf<
  typeof ResourseIndexingFragment
>;

export const CatalogueIndexingFragment = graphql(`
  fragment CatalogueIndexingFragment on CatalogueRecord @_unmask {
    allTitleLocales: _allTitleLocales {
      locale
      value
    }
    content {
      ... on RecordInterface {
        id
        componentName: __typename
      }
      ... on CatalogueFeedRecord {
        tabs {
          newsPageTabType
          title
        }
      }
    }
  }
`);

export type CatalogueIndexingFragmentType = FragmentOf<
  typeof CatalogueIndexingFragment
>;

export const PageIndexingFragment = graphql(
  `
    fragment PageIndexingFragment on PageRecord @_unmask {
      id
      ...AllPagesSlugFragment
      ...PageLocalesFragment
      allContentLocales: _allContentLocales {
        locale
        value {
          ...PageContentFragment
        }
      }
    }
  `,
  [AllPagesSlugFragment, PageLocalesFragment, PageContentFragment],
);

export type PageIndexingFragmentType = FragmentOf<typeof PageIndexingFragment>;

export const HomepageIndexingFragment = graphql(
  `
    fragment HomepageIndexingFragment on HomepageRecord @_unmask {
      id
      allTitleLocales: _allTitleLocales {
        ...LocaleFragment
      }
      allContentLocales: _allContentLocales {
        locale
        value {
          ...HomepageModelContentFragment
        }
      }
    }
  `,
  [HomepageModelContentFragment],
);

export type HomepageIndexingFragmentType = FragmentOf<
  typeof HomepageIndexingFragment
>;

export const AllDocumentsQuery = graphql(
  `
    query AllDocuments {
      allArticles {
        ...ArticleIndexingFragment
      }
      allInsights {
        ...InsightIndexingFragment
      }
      allStoryItems {
        ...StoryIndexingFragment
      }
      allNewsItems {
        ...NewsIndexingFragment
      }
      allWebinarItems {
        ...WebinarIndexingFragment
      }
      allResources {
        ...ResourseIndexingFragment
      }
      allCatalogues {
        ...CatalogueIndexingFragment
      }
      allPages {
        ...PageIndexingFragment
      }
    }
  `,
  [
    NewsIndexingFragment,
    StoryIndexingFragment,
    InsightIndexingFragment,
    ArticleIndexingFragment,
    WebinarIndexingFragment,
    ResourseIndexingFragment,
    CatalogueIndexingFragment,
    PageIndexingFragment,
  ],
);

export const LocaleLabelsQuery = graphql(`
  query LocaleLabels($locale: SiteLocale!) {
    lang(locale: $locale) {
      analyzer
      longLabel
      shortLabel
    }
  }
`);
