import { graphql, type FragmentOf } from "@graphql/graphql";
import {
  DataSectionRecordFragment,
  FaqSectionRecordFragment,
  HeroFragment,
  NewsFeedFragment,
  SectionFragment,
  SupportChannelsSectionFragment,
  TopicFilterFragment,
  UseCaseContainerFragment,
  SupportCTASectionFragment,
  StructuredTextFragment,
  ActionCardFragment,
} from "@graphql/sectionFragments";
import {
  CalloutFragment,
  ExternalLinkFragment,
  ListCardEditorialWithIconFragment,
  ListCollectionFragment,
  ListInternalLinkFragment,
  OrderedListFragment,
  QuickLinkCardFragment,
  TagFragment,
  TopicsBlockFragment,
} from "@graphql/commonFragments";
import {
  AllArticlesSlugFragment,
  AllInsightsSlugFragment,
  AllStoryItemsSlugFragment,
  AllWebinarItemsSlugFragment,
} from "@graphql/slugFragments";

export const HomepageModelContentFragment = graphql(
  `
    fragment HomepageModelContentFragment on HomepageModelContentField
    @_unmask {
      ... on RecordInterface {
        id
        componentName: __typename
      }
      ... on HeroRecord {
        ...HeroFragment
      }
      ... on NewsFeedRecord {
        ...NewsFeedFragment
      }
      ... on SectionRecord {
        ...SectionFragment
      }
      ... on SupportChannelsSectionRecord {
        ...SupportChannelsSectionFragment
      }
    }
  `,
  [
    HeroFragment,
    NewsFeedFragment,
    SectionFragment,
    SupportChannelsSectionFragment,
  ],
);

export type HomepageModelContentFragmentType = FragmentOf<
  typeof HomepageModelContentFragment
>;

export const PageContentFragment = graphql(
  `
    fragment PageContentFragment on PageModelContentField @_unmask {
      ... on RecordInterface {
        id
        componentName: __typename
      }
      ... on HeroRecord {
        ...HeroFragment
      }
      ... on NewsFeedRecord {
        ...NewsFeedFragment
      }
      ... on SectionRecord {
        ...SectionFragment
      }
      ... on SupportChannelsSectionRecord {
        ...SupportChannelsSectionFragment
      }
      ... on FaqSectionRecord {
        ...FaqSectionRecordFragment
      }
      ... on DataSectionRecord {
        ...DataSectionRecordFragment
      }
      ... on UseCaseContainerRecord {
        ...UseCaseContainerFragment
      }
      ... on TopicFilterRecord {
        ...TopicFilterFragment
      }
      ... on SupportCtaSectionRecord {
        ...SupportCTASectionFragment
      }
    }
  `,
  [
    HeroFragment,
    NewsFeedFragment,
    SectionFragment,
    SupportChannelsSectionFragment,
    FaqSectionRecordFragment,
    DataSectionRecordFragment,
    UseCaseContainerFragment,
    TopicFilterFragment,
    SupportCTASectionFragment,
  ],
);

export type PageContentFragmentType = FragmentOf<typeof PageContentFragment>;

export const ArticleContentFragment = graphql(
  `
    fragment ArticleContentFragment on ArticleModelContentField @_unmask {
      value
      blocks {
        ... on RecordInterface {
          id
          __typename
        }
        ... on ListCardEditorialWithIconRecord {
          ...ListCardEditorialWithIconFragment
        }
        ... on ExternalLinkRecord {
          ...ExternalLinkFragment
        }
        ... on OrderedListRecord {
          ...OrderedListFragment
        }
        ... on CalloutRecord {
          ...CalloutFragment
        }
        ... on QuickLinkCardRecord {
          ...QuickLinkCardFragment
        }
        ... on SupportCtaSectionRecord {
          ...SupportCTASectionFragment
        }
        ... on ListInternalLinkRecord {
          ...ListInternalLinkFragment
        }
        ... on TopicsBlockRecord {
          ...TopicsBlockFragment
        }
      }
    }
  `,
  [
    ListCardEditorialWithIconFragment,
    ExternalLinkFragment,
    OrderedListFragment,
    CalloutFragment,
    QuickLinkCardFragment,
    SupportCTASectionFragment,
    ListInternalLinkFragment,
    TopicsBlockFragment,
  ],
);

export type ArticleContentFragmentType = FragmentOf<
  typeof ArticleContentFragment
>;

export const AllArticlesFragment = graphql(
  `
    fragment AllArticlesFragment on ArticleRecord @_unmask {
      id
      seo: _seoMetaTags {
        ...TagFragment
      }
      allContentLocales: _allContentLocales {
        locale
        value {
          ...ArticleContentFragment
        }
      }
      ...AllArticlesSlugFragment
    }
  `,
  [TagFragment, ArticleContentFragment, AllArticlesSlugFragment],
);

export type AllArticlesFragmentType = FragmentOf<typeof AllArticlesFragment>;

export const InsightContentFragment = graphql(
  `
    fragment InsightContentFragment on InsightModelContentField @_unmask {
      ... on RecordInterface {
        id
        componentName: __typename
      }
      ... on HeroRecord {
        ...HeroFragment
      }
      ... on FaqSectionRecord {
        ...FaqSectionRecordFragment
      }
      ... on StructuredTextRecord {
        textContent: content {
          ...StructuredTextFragment
        }
      }
      ... on ListCollectionRecord {
        ...ListCollectionFragment
      }
    }
  `,
  [
    FaqSectionRecordFragment,
    HeroFragment,
    ListCollectionFragment,
    CalloutFragment,
    StructuredTextFragment,
  ],
);

export type InsightContentFragmentType = FragmentOf<
  typeof InsightContentFragment
>;

export const AllInsightsFragment = graphql(
  `
    fragment AllInsightsFragment on InsightRecord @_unmask {
      id
      seo: _seoMetaTags {
        ...TagFragment
      }
      allContentLocales: _allContentLocales {
        locale
        value {
          ...InsightContentFragment
        }
      }
      ...AllInsightsSlugFragment
    }
  `,
  [TagFragment, InsightContentFragment, AllInsightsSlugFragment],
);

export type AllInsightsFragmentType = FragmentOf<typeof AllInsightsFragment>;

export const StoryContentFragment = graphql(
  `
    fragment StoryContentFragment on StoryItemModelContentField @_unmask {
      ... on RecordInterface {
        id
        componentName: __typename
      }
      ... on HeroRecord {
        ...HeroFragment
      }
      ... on StructuredTextRecord {
        textContent: content {
          ...StructuredTextFragment
        }
      }
      ... on SectionRecord {
        ...SectionFragment
      }
      ... on SupportCtaSectionRecord {
        ...SupportCTASectionFragment
      }
    }
  `,
  [
    HeroFragment,
    CalloutFragment,
    StructuredTextFragment,
    SectionFragment,
    SupportCTASectionFragment,
  ],
);

export type StoryContentFragmentType = FragmentOf<typeof StoryContentFragment>;

export const AllStoryItemsFragment = graphql(
  `
    fragment AllStoryItemsFragment on StoryItemRecord @_unmask {
      id
      seo: _seoMetaTags {
        ...TagFragment
      }
      allContentLocales: _allContentLocales {
        locale
        value {
          ...StoryContentFragment
        }
      }
      ...AllStoryItemsSlugFragment
    }
  `,
  [TagFragment, StoryContentFragment, AllStoryItemsSlugFragment],
);

export type AllStoryItemsFragmentType = FragmentOf<
  typeof AllStoryItemsFragment
>;

export const WebinarContentFragment = graphql(
  `
    fragment WebinarContentFragment on WebinarItemModelContentField @_unmask {
      ... on RecordInterface {
        id
        componentName: __typename
      }
      ... on HeroRecord {
        ...HeroFragment
      }
      ... on SectionRecord {
        ...SectionFragment
      }
      ... on ActionCardRecord {
        ...ActionCardFragment
      }
    }
  `,
  [HeroFragment, SectionFragment, ActionCardFragment],
);

export type WebinarContentFragmentType = FragmentOf<
  typeof WebinarContentFragment
>;

export const AllWebinarItemsFragment = graphql(
  `
    fragment AllWebinarItemsFragment on WebinarItemRecord @_unmask {
      id
      seo: _seoMetaTags {
        ...TagFragment
      }
      allContentLocales: _allContentLocales {
        locale
        value {
          ...WebinarContentFragment
        }
      }
      ...AllWebinarItemsSlugFragment
    }
  `,
  [TagFragment, WebinarContentFragment, AllWebinarItemsSlugFragment],
);

export type AllWebinarItemsFragmentType = FragmentOf<
  typeof AllWebinarItemsFragment
>;
