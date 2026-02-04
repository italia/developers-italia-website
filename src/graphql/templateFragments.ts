import {
  CalloutFragment,
  ExternalLinkFragment,
  ImageBlockFragment,
  ListBlockquoteFragment,
  ListCardEditorialWithIconFragment,
  ListCardInfoFragment,
  ListCollectionFragment,
  ListInternalLinkFragment,
  OrderedListFragment,
  QuickLinkCardFragment,
  RelatedArticleFragment,
  TagFragment,
  TopicsBlockFragment,
} from "@graphql/commonFragments";
import { graphql, type FragmentOf } from "@graphql/graphql";
import {
  ActionCardFragment,
  CalloutLinkFragment,
  CatalogueFeedFragment,
  DataSectionRecordFragment,
  FaqSectionRecordFragment,
  HeroFragment,
  IntroArticleFragment,
  NewsFeedFragment,
  SectionFragment,
  SpeakerFragment,
  StructuredTextFragment,
  SupportChannelsSectionFragment,
  SupportCTASectionFragment,
  TextAndAccordionFragment,
  TextAndImageFragment,
  TextAndStatisticsFragment,
  TextAndUseCasesFragment,
  TopicFilterFragment,
  UseCaseContainerFragment,
  WebinarDescriptionFragment,
} from "@graphql/sectionFragments";
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
      ... on TextUseCaseRecord {
        ...TextAndUseCasesFragment
      }
      ... on TextStatisticRecord {
        ...TextAndStatisticsFragment
      }
      ... on TextImageRecord {
        ...TextAndImageFragment
      }
    }
  `,
  [
    HeroFragment,
    NewsFeedFragment,
    SectionFragment,
    SupportChannelsSectionFragment,
    TextAndImageFragment,
    TextAndStatisticsFragment,
    TextAndUseCasesFragment,
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
      ... on StructuredTextRecord {
        textContent: content {
          ...StructuredTextFragment
        }
      }
      ... on TextImageRecord {
        ...TextAndImageFragment
      }
      ... on TextAccordionRecord {
        ...TextAndAccordionFragment
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
    StructuredTextFragment,
    TextAndImageFragment,
    TextAndAccordionFragment,
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
        ... on RelatedArticleRecord {
          ...RelatedArticleFragment
        }
        ... on ImageBlockRecord {
          ...ImageBlockFragment
        }
        ... on ListBlockquoteRecord {
          ...ListBlockquoteFragment
        }
        ... on ListCardInfoRecord {
          ...ListCardInfoFragment
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
    RelatedArticleFragment,
    ImageBlockFragment,
    ListBlockquoteFragment,
    ListCardInfoFragment,
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

export const CatalogueContentFragment = graphql(
  `
    fragment CatalogueContentFragment on CatalogueModelContentField @_unmask {
      ... on RecordInterface {
        id
        componentName: __typename
      }
      ... on HeroRecord {
        ...HeroFragment
      }
      ... on CatalogueFeedRecord {
        ...CatalogueFeedFragment
      }
      ... on CalloutLinkRecord {
        ...CalloutLinkFragment
      }
    }
  `,
  [HeroFragment, CatalogueFeedFragment, CalloutLinkFragment],
);

export type CatalogueContentFragmentType = FragmentOf<
  typeof CatalogueContentFragment
>;

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
      ... on IntroArticleRecord {
        ...IntroArticleFragment
      }
    }
  `,
  [
    HeroFragment,
    CalloutFragment,
    StructuredTextFragment,
    SectionFragment,
    SupportCTASectionFragment,
    IntroArticleFragment,
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
      ... on SpeakerRecord {
        ...SpeakerFragment
      }
      ... on WebinarDescriptionRecord {
        ...WebinarDescriptionFragment
      }
    }
  `,
  [
    HeroFragment,
    SectionFragment,
    ActionCardFragment,
    SpeakerFragment,
    WebinarDescriptionFragment,
  ],
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
