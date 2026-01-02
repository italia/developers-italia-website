import {
  AccordionBlockFragment,
  AccordionFragment,
  AdditionalContentFragment,
  ChannelFragment,
  ChartFragment,
  ExternalLinkFragment,
  ImageBlockFragment,
  ImageFragment,
  InternalLinkFragment,
  ListCollectionFragment,
  ListItemFragment,
  MenuItemFragment,
  NewsTabFragment,
  StatisticBlockFragment,
  StatisticsBoxFragment,
  StoryTabFragment,
  TextBlockFragment,
  UseCaseBlockFragment,
  UseCaseFragment,
} from "@graphql/commonFragments";
import { graphql, type FragmentOf } from "@graphql/graphql";

export const HeroFragment = graphql(
  `
    fragment HeroFragment on HeroRecord @_unmask {
      id
      paragraph(markdown: true)
      size
      title
      category
      showBreadcrumb
      backgroundImage {
        ...ImageFragment
      }
    }
  `,
  [ImageFragment],
);

export type HeroFragmentType = FragmentOf<typeof HeroFragment>;

export const NewsFeedFragment = graphql(
  `
    fragment NewsFeedFragment on NewsFeedRecord @_unmask {
      id
      title
      paragraph
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
  [StoryTabFragment, NewsTabFragment],
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
      variant
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
  ],
);

export type SectionFragmentType = FragmentOf<typeof SectionFragment>;

export const HeaderFragment = graphql(
  `
    fragment HeaderFragment on LayoutRecord @_unmask {
      locales: _locales
      mainNavigation: navigationBar {
        ... on MenuItemRecord {
          ...MenuItemFragment
        }
      }
      secondaryNavigation: navigationBarSecondary {
        ... on MenuItemRecord {
          ...MenuItemFragment
        }
      }
      tagline
      organization
      siteName
    }
  `,
  [MenuItemFragment],
);

export type HeaderFragmentType = FragmentOf<typeof HeaderFragment>;

export const FaqSectionRecordFragment = graphql(
  `
    fragment FaqSectionRecordFragment on FaqSectionRecord @_unmask {
      id
      title
      accordion {
        ...AccordionFragment
      }
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
      cards {
        ...StatisticsBoxFragment
      }
      image {
        ...ImageFragment
      }
    }
  `,
  [StatisticsBoxFragment, ImageFragment],
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
      label
      items {
        ...ListItemFragment
      }
      useCase {
        ...UseCaseFragment
      }
    }
  `,
  [ListItemFragment, UseCaseFragment],
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
        ...UseCaseFragment
      }
    }
  `,
  [UseCaseFragment],
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
      background
      size
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

export const FooterFragment = graphql(`
  fragment FooterFragment on LayoutRecord @_unmask {
    heading(markdown: true)
    organizations {
      id
      icon
      label
      url
    }
    topicTitle
    topicLink {
      id
      linkTo {
        id
      }
      label
    }
    utilityTitle
    utility {
      id
      url
      label
      icon
    }
    smallPrint {
      label
      url
    }
  }
`);

export type FooterFragmentType = FragmentOf<typeof FooterFragment>;
