import { ArticleContentFragment } from "@graphql/fragment/article";
import {
  DownloadLinkFragment,
  ExternalLinkFragment,
} from "@graphql/fragment/commonFragments";
import { HomepageModelContentFragment } from "@graphql/fragment/homepage";
import { InsightContentFragment } from "@graphql/fragment/insight";
import {
  ArticleLocalesFragment,
  InsightLocalesFragment,
  PageLocalesFragment,
  StoryItemLocalesFragment,
  WebinarItemLocalesFragment,
} from "@graphql/fragment/metaFragments";
import { PageContentFragment } from "@graphql/fragment/page";
import {
  AllArticlesSlugFragment,
  AllInsightsSlugFragment,
  AllPagesSlugFragment,
  AllStoryItemsSlugFragment,
  AllWebinarItemsSlugFragment,
} from "@graphql/fragment/slugFragments";
import { StoryContentFragment } from "@graphql/fragment/story";
import { WebinarContentFragment } from "@graphql/fragment/webinar";
import { graphql, type FragmentOf } from "@graphql/graphql";

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
        locale
        value
      }
      allLinkLocales: _allLinkLocales {
        locale
        value
      }
      allParagraphLocales: _allParagraphLocales {
        locale
        value
      }
    }
  `,
  [],
);

export type NewsIndexingFragmentType = FragmentOf<typeof NewsIndexingFragment>;

export const WebinarIndexingFragment = graphql(
  `
    fragment WebinarIndexingFragment on WebinarItemRecord @_unmask {
      id
      allTitleLocales: _allTitleLocales {
        locale
        value
      }
      ...AllWebinarItemsSlugFragment
      ...WebinarItemLocalesFragment
      allParagraphLocales: _allParagraphLocales {
        locale
        value
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
        locale
        value
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
