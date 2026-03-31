import {
  AccordionBlockFragment,
  AccordionFragment,
  AdditionalContentFragment,
  ArticleCardPreviewFragment,
  AuthorListFragment,
  CalloutFragment,
  CardLinkFragment,
  ChannelFragment,
  ChartFragment,
  DownloadLinkFragment,
  ExternalLinkFragment,
  FeatureListBlockFragment,
  IconListBlockFragment,
  ImageBlockFragment,
  ImageFragment,
  InternalLinkFragment,
  KpiElementFragment,
  ListBlockquoteFragment,
  ListCardEditorialWithIconFragment,
  ListCardInfoFragment,
  ListCollectionFragment,
  ListItemFragment,
  NewsTabFragment,
  OrderedListFragment,
  QuickLinkCardFragment,
  StatisticBlockFragment,
  StoryTabFragment,
  TextBlockFragment,
  TopicsBlockFragment,
  UseCaseBlockFragment,
} from "@graphql/fragment/commonFragments";
import { graphql, type FragmentOf } from "@graphql/graphql";

export const HeroFragment = graphql(
  `
    fragment HeroFragment on HeroRecord @_unmask {
      id
      title
      paragraph
      backgroundImage {
        ...ImageFragment
      }
      backgroundImageForMobile {
        ...ImageFragment
      }
      showBreadcrumb
      variant
      backgroundColor
      cta {
        ... on RecordInterface {
          id
          componentName: __typename
        }
        ... on InternalLinkRecord {
          ...InternalLinkFragment
        }
        ... on ExternalLinkRecord {
          ...ExternalLinkFragment
        }
      }
    }
  `,
  [ImageFragment, InternalLinkFragment, ExternalLinkFragment],
);

export type HeroFragmentType = FragmentOf<typeof HeroFragment>;

export const NewsFeedFragment = graphql(
  `
    fragment NewsFeedFragment on NewsFeedRecord @_unmask {
      id
      title
      paragraph(markdown: true)
      cta {
        ...InternalLinkFragment
      }
      tabs {
        ... on RecordInterface {
          componentName: __typename
        }
        ... on NewsTabRecord {
          ...NewsTabFragment
        }
        ... on StoryTabRecord {
          ...StoryTabFragment
        }
      }
    }
  `,
  [StoryTabFragment, NewsTabFragment, InternalLinkFragment],
);

export type NewsFeedFragmentType = FragmentOf<typeof NewsFeedFragment>;

export const SupportChannelsSectionFragment = graphql(
  `
    fragment SupportChannelsSectionFragment on SupportChannelsSectionRecord
    @_unmask {
      id
      paragraph(markdown: true)
      title
      channels {
        ...ChannelFragment
      }
      backgroundColor
    }
  `,
  [ChannelFragment],
);

export type SupportChannelsSectionFragmentType = FragmentOf<
  typeof SupportChannelsSectionFragment
>;

export const SectionFragment = graphql(
  `
    fragment SectionFragment on SectionRecord @_unmask {
      id
      columnLeftSize
      columnRightSize
      background
      alignItems
      additionalContent {
        ...AdditionalContentFragment
      }
      left {
        ... on RecordInterface {
          id
          componentName: __typename
        }
        ... on TextBlockRecord {
          ...TextBlockFragment
        }
      }
      right {
        ... on RecordInterface {
          id
          componentName: __typename
        }
        ... on UseCaseBlockRecord {
          ...UseCaseBlockFragment
        }
        ... on StatisticBlockRecord {
          ...StatisticBlockFragment
        }
        ... on ImageBlockRecord {
          ...ImageBlockFragment
        }
        ... on AccordionBlockRecord {
          ...AccordionBlockFragment
        }
        ... on IconListBlockRecord {
          ...IconListBlockFragment
        }
        ... on QuickLinkCardRecord {
          ...QuickLinkCardFragment
        }
        ... on AuthorListRecord {
          ...AuthorListFragment
        }
      }
    }
  `,
  [
    AdditionalContentFragment,
    TextBlockFragment,
    UseCaseBlockFragment,
    StatisticBlockFragment,
    ImageBlockFragment,
    AccordionBlockFragment,
    IconListBlockFragment,
    QuickLinkCardFragment,
    AuthorListFragment,
  ],
);

export type SectionFragmentType = FragmentOf<typeof SectionFragment>;

export const FaqSectionRecordFragment = graphql(
  `
    fragment FaqSectionRecordFragment on FaqSectionRecord @_unmask {
      id
      title
      accordion {
        ...AccordionFragment
      }
      backgroundColor
    }
  `,
  [AccordionFragment],
);

export type FaqSectionRecordFragmentType = FragmentOf<
  typeof FaqSectionRecordFragment
>;

export const HighlightsFragment = graphql(
  `
    fragment HighlightsFragment on HighlightRecord @_unmask {
      id
      title
      paragraph(markdown: true)
      kpiElement {
        ...KpiElementFragment
      }
      image {
        ...ImageFragment
      }
    }
  `,
  [ImageFragment, KpiElementFragment],
);

export type HighlightsFragmentType = FragmentOf<typeof HighlightsFragment>;

export const PanelFragment = graphql(
  `
    fragment PanelFragment on PanelRecord @_unmask {
      id
      paragraph
      title
      chart {
        ...ChartFragment
      }
      externalLink {
        ...ExternalLinkFragment
      }
    }
  `,
  [ChartFragment, ExternalLinkFragment],
);

export type PanelFragmentType = FragmentOf<typeof PanelFragment>;

export const ResultFragment = graphql(
  `
    fragment ResultFragment on ResultRecord @_unmask {
      id
      title
      paragraph
      items {
        ...ListItemFragment
      }
      titleListUseCases
      useCases {
        ...ArticleCardPreviewFragment
      }
    }
  `,
  [ListItemFragment, ArticleCardPreviewFragment],
);

export type ResultFragmentType = FragmentOf<typeof ResultFragment>;

export const DataSectionRecordFragment = graphql(
  `
    fragment DataSectionRecordFragment on DataSectionRecord @_unmask {
      id
      highlights {
        ...HighlightsFragment
      }
      panel {
        ...PanelFragment
      }
      result {
        ...ResultFragment
      }
    }
  `,
  [HighlightsFragment, PanelFragment, ResultFragment],
);

export type DataSectionRecordFragmentType = FragmentOf<
  typeof DataSectionRecordFragment
>;

export const UseCaseContainerFragment = graphql(
  `
    fragment UseCaseContainerFragment on UseCaseContainerRecord @_unmask {
      id
      useCases {
        ...ArticleCardPreviewFragment
      }
    }
  `,
  [ArticleCardPreviewFragment],
);

export type UseCaseContainerFragmentType = FragmentOf<
  typeof UseCaseContainerFragment
>;

export const TopicFilterFragment = graphql(
  `
    fragment TopicFilterFragment on TopicFilterRecord @_unmask {
      id
      title
      titleFilter
      paragraph
      labelForAll
      content {
        ...ListCollectionFragment
      }
    }
  `,
  [ListCollectionFragment],
);

export type TopicFilterFragmentType = FragmentOf<typeof TopicFilterFragment>;

export const SupportCTASectionFragment = graphql(
  `
    fragment SupportCTASectionFragment on SupportCtaSectionRecord @_unmask {
      id
      title
      paragraph
      backgroundColor
      image {
        ...ImageFragment
      }
      cta {
        ... on RecordInterface {
          id
          componentName: __typename
        }
        ... on ExternalLinkRecord {
          ...ExternalLinkFragment
        }
        ... on InternalLinkRecord {
          ...InternalLinkFragment
        }
      }
    }
  `,
  [ImageFragment, ExternalLinkFragment, InternalLinkFragment],
);

export type SupportCTASectionFragmentType = FragmentOf<
  typeof SupportCTASectionFragment
>;

export const StructuredTextFragment = graphql(
  `
    fragment StructuredTextFragment on StructuredTextModelContentField
    @_unmask {
      value
      blocks {
        ... on RecordInterface {
          id
          __typename
        }
        ... on CalloutRecord {
          ...CalloutFragment
        }
        ... on OrderedListRecord {
          ...OrderedListFragment
        }
        ... on ListBlockquoteRecord {
          ...ListBlockquoteFragment
        }
        ... on ListCardInfoRecord {
          ...ListCardInfoFragment
        }
        ... on ListCardEditorialWithIconRecord {
          ...ListCardEditorialWithIconFragment
        }
        ... on ExternalLinkRecord {
          ...ExternalLinkFragment
        }
        ... on InternalLinkRecord {
          ...InternalLinkFragment
        }
        ... on CardServiceRecord {
          card {
            ...ExternalLinkFragment
          }
        }
        ... on QuickLinkCardRecord {
          ...QuickLinkCardFragment
        }
        ... on SupportCtaSectionRecord {
          ...SupportCTASectionFragment
        }
        ... on TopicsBlockRecord {
          ...TopicsBlockFragment
        }
        ... on ImageBlockRecord {
          ...ImageBlockFragment
        }
        ... on ListExternalLinkRecord {
          links {
            ...ExternalLinkFragment
          }
        }
      }
    }
  `,
  [
    ListCardEditorialWithIconFragment,
    ExternalLinkFragment,
    InternalLinkFragment,
    OrderedListFragment,
    CalloutFragment,
    QuickLinkCardFragment,
    SupportCTASectionFragment,
    TopicsBlockFragment,
    ImageBlockFragment,
    ListBlockquoteFragment,
    ListCardInfoFragment,
  ],
);

export type StructuredTextFragmentType = FragmentOf<
  typeof StructuredTextFragment
>;

export const CatalogueFeedFragment = graphql(`
  fragment CatalogueFeedFragment on CatalogueFeedRecord @_unmask {
    id
    tabs {
      title
      paragraph
      newsPageTabType
      labelForAll
      id
      filterTitle
      filterStory {
        id
      }
      elementPerPage
    }
  }
`);

export type CatalogueFeedFragmentType = FragmentOf<
  typeof CatalogueFeedFragment
>;

export const ActionCardFragment = graphql(
  `
    fragment ActionCardFragment on ActionCardRecord @_unmask {
      id
      title
      paragraph(markdown: true)
      category
      cta {
        ...DownloadLinkFragment
      }
      readMoreLabel
      readLessLabel
    }
  `,
  [DownloadLinkFragment],
);

export type ActionCardFragmentType = FragmentOf<typeof ActionCardFragment>;

export const SpeakerFragment = graphql(
  `
    fragment SpeakerFragment on SpeakerRecord @_unmask {
      id
      text {
        ...TextBlockFragment
      }
      list {
        ...AuthorListFragment
      }
    }
  `,
  [TextBlockFragment, AuthorListFragment],
);

export type SpeakerFragmentType = FragmentOf<typeof SpeakerFragment>;

export const WebinarDescriptionFragment = graphql(
  `
    fragment WebinarDescriptionFragment on WebinarDescriptionRecord @_unmask {
      id
      text {
        ...TextBlockFragment
      }
      subjects {
        ...FeatureListBlockFragment
      }
      resources {
        ...QuickLinkCardFragment
      }
    }
  `,
  [TextBlockFragment, FeatureListBlockFragment, QuickLinkCardFragment],
);

export type WebinarDescriptionFragmentType = FragmentOf<
  typeof WebinarDescriptionFragment
>;

export const IntroArticleFragment = graphql(
  `
    fragment IntroArticleFragment on IntroArticleRecord @_unmask {
      id
      text {
        ...TextBlockFragment
      }
      list {
        ...IconListBlockFragment
      }
    }
  `,
  [TextBlockFragment, IconListBlockFragment],
);

export type IntroArticleFragmentType = FragmentOf<typeof IntroArticleFragment>;

export const TextAndImageFragment = graphql(
  `
    fragment TextAndImageFragment on TextImageRecord @_unmask {
      text {
        ...TextBlockFragment
      }
      image {
        ...ImageFragment
      }
      variant
      backgroundColor
      additionalContent {
        ...AdditionalContentFragment
      }
    }
  `,
  [TextBlockFragment, ImageFragment, AdditionalContentFragment],
);

export type TextAndImageFragmentType = FragmentOf<typeof TextAndImageFragment>;

export const TextAndStatisticsFragment = graphql(
  `
    fragment TextAndStatisticsFragment on TextStatisticRecord @_unmask {
      backgroundColor
      showInline
      text {
        ...TextBlockFragment
      }
      statistics {
        ...StatisticBlockFragment
      }
    }
  `,
  [TextBlockFragment, StatisticBlockFragment],
);

export type TextAndStatisticsFragmentType = FragmentOf<
  typeof TextAndStatisticsFragment
>;

export const TextAndUseCasesFragment = graphql(
  `
    fragment TextAndUseCasesFragment on TextUseCaseRecord @_unmask {
      text {
        ...TextBlockFragment
      }
      useCases {
        ...UseCaseBlockFragment
      }
      backgroundColor
    }
  `,
  [TextBlockFragment, UseCaseBlockFragment],
);

export type TextAndUseCasesFragmentType = FragmentOf<
  typeof TextAndUseCasesFragment
>;

export const TextAndAccordionFragment = graphql(
  `
    fragment TextAndAccordionFragment on TextAccordionRecord @_unmask {
      text {
        ...TextBlockFragment
      }
      accordion {
        ...AccordionBlockFragment
      }
      backgroundColor
    }
  `,
  [TextBlockFragment, AccordionBlockFragment],
);

export type TextAndAccordionFragmentType = FragmentOf<
  typeof TextAndAccordionFragment
>;

export const SearchMenuFragment = graphql(
  `
    fragment SearchMenuFragment on SearchRecord @_unmask {
      id
      _allSearchLabelLocales {
        locale
        value
      }
      isSearchEnabled
    }
  `,
  [],
);

export type SearchMenuFragmentType = FragmentOf<typeof SearchMenuFragment>;

export const CalloutLinkFragment = graphql(
  `
    fragment CalloutLinkFragment on CalloutLinkRecord @_unmask {
      id
      title
      paragraph
      link {
        ...ExternalLinkFragment
      }
    }
  `,
  [ExternalLinkFragment],
);

export type CalloutLinkFragmentType = FragmentOf<typeof CalloutLinkFragment>;

export const TextOnlyFragment = graphql(
  `
    fragment TextOnlyFragment on TextOnlyRecord @_unmask {
      text {
        ...TextBlockFragment
      }
      backgroundColor
    }
  `,
  [TextBlockFragment],
);

export type TextOnlyFragmentType = FragmentOf<typeof TextOnlyFragment>;

export const CardLinkListFragment = graphql(
  `
    fragment CardLinkListFragment on CardLinkListRecord @_unmask {
      backgroundColor
      title
      paragraph
      showInlineCard
      listContent {
        ...CardLinkFragment
      }
    }
  `,
  [TextBlockFragment, ImageFragment, CardLinkFragment],
);

export type CardLinkListFragmentType = FragmentOf<typeof CardLinkListFragment>;

export const ArticleSTFragment = graphql(
  `
    fragment ArticleSTFragment on StructuredTextRecord @_unmask {
      backgroundColor
      textContent: content {
        ...StructuredTextFragment
      }
    }
  `,
  [StructuredTextFragment],
);

export type ArticleSTFragmentType = FragmentOf<typeof ArticleSTFragment>;
