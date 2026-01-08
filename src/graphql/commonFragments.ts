import { graphql, type FragmentOf } from "@graphql/graphql";

export const TagFragment = graphql(`
  fragment TagFragment on Tag @_unmask {
    tag
    attributes
    content
  }
`);

export type TagFragmentType = FragmentOf<typeof TagFragment>;

export const LocaleFragment = graphql(`
  fragment LocaleFragment on StringNonNullMultiLocaleField @_unmask {
    locale
    value
  }
`);

export type LocaleFragmentType = FragmentOf<typeof LocaleFragment>;

export const ImageFragment = graphql(`
  fragment ImageFragment on FileField @_unmask {
    id
    url
    alt
    title
    width
    height
  }
`);

export type ImageFragmentType = FragmentOf<typeof ImageFragment>;

export const InternalLinkFragment = graphql(`
  fragment InternalLinkFragment on InternalLinkRecord @_unmask {
    label
    linkTo {
      id
    }
  }
`);
export type InternalLinkFragmentType = FragmentOf<typeof InternalLinkFragment>;

export const TopicsBlockFragment = graphql(`
  fragment TopicsBlockFragment on TopicsBlockRecord @_unmask {
    id
    title
    listTopics {
      id
      label
    }
  }
`);

export type TopicsBlockFragmentType = FragmentOf<typeof TopicsBlockFragment>;

export const ChartFragment = graphql(`
  fragment ChartFragment on SettingsChartRecord @_unmask {
    id
    downloadData
    downloadImage
    footerText
    selectChart {
      chartData
      id
      title
    }
    showShare
    subtitle
    title
    info
  }
`);

export type ChartFragmentType = FragmentOf<typeof ChartFragment>;

export const KpiFragment = graphql(`
  fragment KpiFragment on SettingsKpiRecord @_unmask {
    id
    title
    subtitle
    selectKpi {
      value_suffix: valueSuffix
      value_prefix: valuePrefix
      value
      title
      show_flow: showFlow
      percentage
      id
      footer_text: footerText
      flow_value: flowValue
      flow_direction: flowDirection
      flow_detail: flowDetail
      background_color: backgroundColor
    }
  }
`);

export type KpiFragmentType = FragmentOf<typeof KpiFragment>;

export const UseCaseFragment = graphql(
  `
    fragment UseCaseFragment on UseCaseRecord @_unmask {
      id
      title
      paragraph
      listTopics {
        ...TopicsBlockFragment
      }
      image {
        ...ImageFragment
      }
      pointsTo {
        id
      }
      descriptionTitle
      description(markdown: true)
    }
  `,
  [ImageFragment, TopicsBlockFragment],
);

export type UseCaseFragmentType = FragmentOf<typeof UseCaseFragment>;

export const NewsItemFragment = graphql(
  `
    fragment NewsItemFragment on NewsItemRecord @_unmask {
      id
      title
      paragraph
      category
      dateOfPublication
      link
      image {
        ...ImageFragment
      }
    }
  `,
  [ImageFragment],
);

export type NewsItemFragmentType = FragmentOf<typeof NewsItemFragment>;

export const NewsTabFragment = graphql(
  `
    fragment NewsTabFragment on NewsTabRecord @_unmask {
      ... on RecordInterface {
        componentName: __typename
      }
      id
      title
      cta {
        ...InternalLinkFragment
      }
      news {
        ...NewsItemFragment
      }
    }
  `,
  [NewsItemFragment, InternalLinkFragment],
);

export type NewsTabFragmentType = FragmentOf<typeof NewsTabFragment>;

export const StoryItemFragment = graphql(
  `
    fragment StoryItemFragment on StoryItemRecord @_unmask {
      id
      title
      category
      dateOfPublication
      slug
      image {
        ...ImageFragment
      }
    }
  `,
  [ImageFragment],
);

export type StoryItemFragmentType = FragmentOf<typeof StoryItemFragment>;

export const StoryTabFragment = graphql(
  `
    fragment StoryTabFragment on StoryTabRecord @_unmask {
      ... on RecordInterface {
        componentName: __typename
      }
      id
      title
      cta {
        ...InternalLinkFragment
      }
      news {
        ...StoryItemFragment
      }
    }
  `,
  [StoryItemFragment, InternalLinkFragment],
);

export type StoryTabFragmentType = FragmentOf<typeof StoryTabFragment>;

export const ChannelFragment = graphql(`
  fragment ChannelFragment on ChannelRecord @_unmask {
    id
    title
    icon
    description
  }
`);

export type ChannelFragmentType = FragmentOf<typeof ChannelFragment>;

export const TextBlockFragment = graphql(
  `
    fragment TextBlockFragment on TextBlockRecord @_unmask {
      id
      title
      paragraph
      cta {
        ...InternalLinkFragment
      }
    }
  `,
  [InternalLinkFragment],
);

export type TextBlockFragmentType = FragmentOf<typeof TextBlockFragment>;

export const UseCaseBlockFragment = graphql(
  `
    fragment UseCaseBlockFragment on UseCaseBlockRecord @_unmask {
      id
      title
      useCases {
        ...UseCaseFragment
      }
    }
  `,
  [UseCaseFragment],
);

export type UseCaseBlockFragmentType = FragmentOf<typeof UseCaseBlockFragment>;

export const DataContainerFragment = graphql(`
  fragment DataContainerFragment on DataContainerRecord @_unmask {
    id
    contentIcon
    info
    title
  }
`);

export type DataContainerFragmentType = FragmentOf<
  typeof DataContainerFragment
>;

export const StatisticBlockFragment = graphql(
  `
    fragment StatisticBlockFragment on StatisticBlockRecord @_unmask {
      id
      statistics {
        ...DataContainerFragment
      }
    }
  `,
  [DataContainerFragment],
);

export type StatisticBlockFragmentType = FragmentOf<
  typeof StatisticBlockFragment
>;

export const ImageBlockFragment = graphql(
  `
    fragment ImageBlockFragment on ImageBlockRecord @_unmask {
      id
      image {
        ...ImageFragment
      }
    }
  `,
  [ImageFragment],
);

export type ImageBlockFragmentType = FragmentOf<typeof ImageBlockFragment>;

export const AccordionFragment = graphql(`
  fragment AccordionFragment on AccordionRecord @_unmask {
    id
    items {
      id
      body
      header
    }
    variant
  }
`);

export type AccordionFragmentType = FragmentOf<typeof AccordionFragment>;

export const AccordionBlockFragment = graphql(
  `
    fragment AccordionBlockFragment on AccordionBlockRecord @_unmask {
      id
      title
      accordion {
        ...AccordionFragment
      }
    }
  `,
  [AccordionFragment],
);

export type AccordionBlockFragmentType = FragmentOf<
  typeof AccordionBlockFragment
>;

export const MenuItemFragment = graphql(`
  fragment MenuItemFragment on MenuItemRecord @_unmask {
    id
    title
    pointsTo {
      id
      slug
    }
  }
`);

export type MenuItemFragmentType = FragmentOf<typeof MenuItemFragment>;

export const StatisticsBoxFragment = graphql(`
  fragment StatisticsBoxFragment on StatisticsBoxRecord @_unmask {
    id
    title
    description
  }
`);

export type StatisticsBoxFragmentType = FragmentOf<
  typeof StatisticsBoxFragment
>;

export const CardEditorialNewsFragment = graphql(
  `
    fragment CardEditorialNewsFragment on CardEditorialNewsRecord @_unmask {
      id
      title
      image {
        ...ImageFragment
      }
      footerLink
      description
      date
      category
    }
  `,
  [ImageFragment],
);

export type CardEditorialNewsFragmentType = FragmentOf<
  typeof CardEditorialNewsFragment
>;

export const ListItemFragment = graphql(`
  fragment ListItemFragment on ListItemRecord @_unmask {
    id
    paragraph
    title
  }
`);

export type ListItemFragmentType = FragmentOf<typeof ListItemFragment>;

export const ExternalLinkFragment = graphql(`
  fragment ExternalLinkFragment on ExternalLinkRecord @_unmask {
    id
    url
    titleIcon
    label
    icon
    description
  }
`);

export type ExternalLinkFragmentType = FragmentOf<typeof ExternalLinkFragment>;

export const AdditionalContentFragment = graphql(`
  fragment AdditionalContentFragment on AdditionalContentRecord @_unmask {
    id
    title
    content {
      id
      title
      icon
      description
    }
  }
`);

export type AdditionalContentFragmentType = FragmentOf<
  typeof AdditionalContentFragment
>;

export const ListCollectionFragment = graphql(
  `
    fragment ListCollectionFragment on ListCollectionRecord @_unmask {
      title
      paragraph
      content {
        id
        title
        abstract
        topic {
          label
        }
        image {
          ...ImageFragment
        }
      }
    }
  `,
  [ImageFragment],
);

export type ListCollectionFragmentType = FragmentOf<
  typeof ListCollectionFragment
>;

export const CardEditorialWithIconFragment = graphql(`
  fragment CardEditorialWithIconFragment on CardEditorialWithIconRecord
  @_unmask {
    id
    title
    icon
    description
  }
`);

export type CardEditorialWithIconFragmentType = FragmentOf<
  typeof CardEditorialWithIconFragment
>;

export const ListCardEditorialWithIconFragment = graphql(
  `
    fragment ListCardEditorialWithIconFragment on ListCardEditorialWithIconRecord
    @_unmask {
      items {
        ...CardEditorialWithIconFragment
      }
    }
  `,
  [CardEditorialWithIconFragment],
);

export type ListCardEditorialWithIconFragmentType = FragmentOf<
  typeof ListCardEditorialWithIconFragment
>;

export const OrderedListFragment = graphql(`
  fragment OrderedListFragment on OrderedListRecord @_unmask {
    id
    items {
      title
      paragraph
    }
  }
`);

export type OrderedListFragmentType = FragmentOf<typeof OrderedListFragment>;

export const CalloutFragment = graphql(`
  fragment CalloutFragment on CalloutRecord @_unmask {
    id
    title
    paragraph
    visuallyHidden
  }
`);

export type CalloutFragmentType = FragmentOf<typeof CalloutFragment>;

export const QuickLinkCardFragment = graphql(
  `
    fragment QuickLinkCardFragment on QuickLinkCardRecord @_unmask {
      id
      title
      links {
        ...ExternalLinkFragment
      }
    }
  `,
  [ExternalLinkFragment],
);

export type QuickLinkCardFragmentType = FragmentOf<
  typeof QuickLinkCardFragment
>;

export const ListInternalLinkFragment = graphql(`
  fragment ListInternalLinkFragment on ListInternalLinkRecord @_unmask {
    id
    links {
      label
      icon
      linkTo {
        id
      }
    }
  }
`);

export type ListInternalLinkFragmentType = FragmentOf<
  typeof ListInternalLinkFragment
>;

export const SidebarMenuFragment = graphql(`
  fragment SidebarMenuFragment on AccordionMenuRecord @_unmask {
    id
    label
    menu {
      id
      label
      pointsTo {
        id
      }
    }
  }
`);

export type SidebarMenuFragmentType = FragmentOf<typeof SidebarMenuFragment>;

export const SidebarFragment = graphql(
  `
    fragment SidebarFragment on SidebarForArticleRecord @_unmask {
      id
      headerLabel
      openLabel
      closeLabel
      menu {
        ...SidebarMenuFragment
      }
    }
  `,
  [SidebarMenuFragment],
);

export type SidebarFragmentType = FragmentOf<typeof SidebarFragment>;
