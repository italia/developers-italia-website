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
    topics {
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

export const ArticleCardPreviewFragment = graphql(
  `
    fragment ArticleCardPreviewFragment on ArticleRecord @_unmask {
      id
      title
      paragraph
      topics {
        ...TopicsBlockFragment
      }
      image {
        ...ImageFragment
      }
      descriptionTitle
      description(markdown: true)
    }
  `,
  [ImageFragment, TopicsBlockFragment],
);

export type ArticleCardPreviewFragmentType = FragmentOf<
  typeof ArticleCardPreviewFragment
>;

export const NewsItemFragment = graphql(
  `
    fragment NewsItemFragment on NewsItemRecord @_unmask {
      id
      title
      paragraph
      topic {
        label
      }
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

export const WebinarItemFragment = graphql(
  `
    fragment WebinarItemFragment on WebinarItemRecord @_unmask {
      id
      title
      paragraph
      topic {
        label
      }
      date
      image {
        ...ImageFragment
      }
      slug
    }
  `,
  [ImageFragment],
);

export type WebinarItemFragmentType = FragmentOf<typeof WebinarItemFragment>;

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
      topic {
        label
      }
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
      paragraph(markdown: true)
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
        ...ArticleCardPreviewFragment
      }
    }
  `,
  [ArticleCardPreviewFragment],
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
      ratio
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
      ... on CatalogueRecord {
        id
      }
      ... on PageRecord {
        id
      }
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

export const DownloadLinkFragment = graphql(`
  fragment DownloadLinkFragment on DownloadLinkRecord @_unmask {
    id
    label
    description
    doc {
      size
      format
      url
      filename
    }
  }
`);

export type DownloadLinkFragmentType = FragmentOf<typeof DownloadLinkFragment>;

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

export const MenuArticleItemFragment = graphql(`
  fragment MenuArticleItemFragment on MenuArticleItemRecord @_unmask {
    id
    label
    pointsTo {
      id
    }
  }
`);

export type MenuArticleItemFragmentType = FragmentOf<
  typeof MenuArticleItemFragment
>;

export const SidebarMenuFragment = graphql(
  `
    fragment SidebarMenuFragment on AccordionMenuRecord @_unmask {
      id
      label
      menu {
        ...MenuArticleItemFragment
      }
    }
  `,
  [MenuArticleItemFragment],
);

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

export const ListBlockquoteFragment = graphql(`
  fragment ListBlockquoteFragment on ListBlockquoteRecord @_unmask {
    id
    items {
      id
      paragraph
      author
    }
  }
`);

export type ListBlockquoteFragmentType = FragmentOf<
  typeof ListBlockquoteFragment
>;

export const ListCardInfoFragment = graphql(`
  fragment ListCardInfoFragment on ListCardInfoRecord @_unmask {
    id
    items {
      id
      title
      paragraph
    }
  }
`);

export type ListCardInfoFragmentType = FragmentOf<typeof ListCardInfoFragment>;

export const IconListBlockFragment = graphql(`
  fragment IconListBlockFragment on IconListBlockRecord @_unmask {
    id
    title
    items {
      id
      items {
        icon
        label
      }
    }
  }
`);

export type IconListBlockFragmentType = FragmentOf<
  typeof IconListBlockFragment
>;

export const FeatureListBlockFragment = graphql(`
  fragment FeatureListBlockFragment on FeatureListBlockRecord @_unmask {
    id
    title
    items {
      items {
        title
        paragraph
        id
      }
    }
  }
`);

export type FeatureListBlockFragmentType = FragmentOf<
  typeof FeatureListBlockFragment
>;

export const AuthorListFragment = graphql(
  `
    fragment AuthorListFragment on AuthorListRecord @_unmask {
      id
      title
      authors {
        id
        name
        photo {
          ...ImageFragment
        }
        role
      }
    }
  `,
  [ImageFragment],
);

export type AuthorListFragmentType = FragmentOf<typeof AuthorListFragment>;

export const ArticleNavigationFragment = graphql(
  `
    fragment ArticleNavigationFragment on ArticleNavigationRecord @_unmask {
      nextLabel
      previousLabel
      previousArticle {
        ...MenuArticleItemFragment
      }
      nextArticle {
        ...MenuArticleItemFragment
      }
    }
  `,
  [MenuArticleItemFragment],
);

export type ArticleNavigationFragmentType = FragmentOf<
  typeof ArticleNavigationFragment
>;

export const ArticleListFragment = graphql(
  `
    fragment ArticleListFragment on ArticleListRecord @_unmask {
      relatedArticles {
        ...MenuArticleItemFragment
      }
    }
  `,
  [MenuArticleItemFragment],
);

export type ArticleListFragmentType = FragmentOf<typeof ArticleListFragment>;

export const RelatedArticleFragment = graphql(
  `
    fragment RelatedArticleFragment on RelatedArticleRecord @_unmask {
      id
      relatedBlock {
        ... on RecordInterface {
          id
          componentName: __typename
        }
        ... on ArticleNavigationRecord {
          ...ArticleNavigationFragment
        }
        ... on ArticleListRecord {
          ...ArticleListFragment
        }
      }
    }
  `,
  [ArticleNavigationFragment, ArticleListFragment],
);

export type RelatedArticleFragmentType = FragmentOf<
  typeof RelatedArticleFragment
>;

export const ResourceFragment = graphql(
  `
    fragment ResourceFragment on ResourceRecord @_unmask {
      id
      macroTopic {
        label
      }
      category {
        label
      }
      resource {
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
  `,
  [ExternalLinkFragment, DownloadLinkFragment],
);

export type ResourceFragmentType = FragmentOf<typeof ResourceFragment>;
