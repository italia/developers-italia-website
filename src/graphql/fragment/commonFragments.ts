import { graphql, type FragmentOf } from "@graphql/graphql";

export const TagFragment = graphql(`
  fragment TagFragment on Tag @_unmask {
    tag
    attributes
    content
  }
`);

export type TagFragmentType = FragmentOf<typeof TagFragment>;

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
      ... on CatalogueRecord {
        id
      }
      ... on PageRecord {
        id
      }
      ... on InsightRecord {
        id
      }
      ... on ArticleRecord {
        id
      }
      ... on StoryItemRecord {
        id
      }
    }
  }
`);
export type InternalLinkFragmentType = FragmentOf<typeof InternalLinkFragment>;

export const ExternalLinkFragment = graphql(`
  fragment ExternalLinkFragment on ExternalLinkRecord @_unmask {
    id
    url
    label
    description
  }
`);

export type ExternalLinkFragmentType = FragmentOf<typeof ExternalLinkFragment>;

export const LinkBlockFragment = graphql(`
  fragment LinkBlockFragment on LinkBlockRecord @_unmask {
    link {
      ... on ArticleRecord {
        id
      }
      ... on CatalogueRecord {
        id
      }
      ... on StoryItemRecord {
        id
      }
      ... on PageRecord {
        id
      }
      ... on InsightRecord {
        id
      }
    }
    externalUrl
  }
`);

export type LinkBlockFragmentType = FragmentOf<typeof LinkBlockFragment>;

export const BrandFragment = graphql(`
  fragment BrandFragment on BrandRecord @_unmask {
    id
    brandLogo
    mainLogo
    label
    url
  }
`);
export type BrandFragmentType = FragmentOf<typeof BrandFragment>;

export const SupportingBrandFragment = graphql(`
  fragment SupportingBrandFragment on SupportingBrandRecord @_unmask {
    id
    brandLogo
    label
    url
  }
`);
export type SupportingBrandFragmentType = FragmentOf<
  typeof SupportingBrandFragment
>;

export const TopicsBlockFragment = graphql(`
  fragment TopicsBlockFragment on TopicsBlockRecord @_unmask {
    id
    title
    topics {
      id
      _allLabelLocales {
        locale
        value
      }
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

export const KpiElementFragment = graphql(`
  fragment KpiElementFragment on KpiElementRecord @_unmask {
    title
    valuePrefix
    value
  }
`);

export type KpiElementFragmentType = FragmentOf<typeof KpiElementFragment>;

export const ArticleCardPreviewFragment = graphql(
  `
    fragment ArticleCardPreviewFragment on ArticleRecord @_unmask {
      id
      allTitleLocales: _allTitleLocales {
        locale
        value
      }
      allParagraphLocales: _allParagraphLocales {
        locale
        value
      }
      allTopicsLocales: _allTopicsLocales {
        locale
        value {
          ...TopicsBlockFragment
        }
      }
      image {
        ...ImageFragment
      }
      allDescriptionTitleLocales: _allDescriptionTitleLocales {
        locale
        value
      }
      allDescriptionLocales: _allDescriptionLocales(markdown: true) {
        locale
        value
      }
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
      allTitleLocales: _allTitleLocales {
        locale
        value
      }
      allParagraphLocales: _allParagraphLocales {
        locale
        value
      }
      allTopicLocales: _allTopicLocales {
        value {
          id
          _allLabelLocales {
            locale
            value
          }
        }
        locale
      }
      allLinkLocales: _allLinkLocales {
        locale
        value
      }
      publishedAt: dateOfPublication
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
      allTitleLocales: _allTitleLocales {
        locale
        value
      }
      allParagraphLocales: _allParagraphLocales {
        locale
        value
      }
      allTopicLocales: _allTopicLocales {
        value {
          id
          _allLabelLocales {
            locale
            value
          }
        }
        locale
      }

      publishedAt: date
      image {
        ...ImageFragment
      }
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
      news {
        ...NewsItemFragment
      }
    }
  `,
  [NewsItemFragment, InternalLinkFragment],
);

export type NewsTabFragmentType = FragmentOf<typeof NewsTabFragment>;

export const StoryCardFragment = graphql(
  `
    fragment StoryCardFragment on StoryItemRecord @_unmask {
      id
      articleClassification {
        id
      }
      allTitleLocales: _allTitleLocales {
        locale
        value
      }
      allTopicLocales: _allTopicLocales {
        value {
          id
          _allLabelLocales {
            locale
            value
          }
        }
        locale
      }
      publishedAt: dateOfPublication
      image {
        ...ImageFragment
      }
    }
  `,
  [ImageFragment],
);

export type StoryCardFragmentType = FragmentOf<typeof StoryCardFragment>;

export const InsightCardFragment = graphql(
  `
    fragment InsightCardFragment on InsightRecord @_unmask {
      id
      allTitleLocales: _allTitleLocales {
        locale
        value
      }
      allParagraphLocales: _allAbstractLocales {
        locale
        value
      }
      allTopicLocales: _allTopicLocales {
        locale
        value {
          _allLabelLocales {
            locale
            value
          }
        }
      }
      image {
        ...ImageFragment
      }
    }
  `,
  [ImageFragment],
);

export type InsightCardFragmentType = FragmentOf<typeof InsightCardFragment>;

export const StoryTabFragment = graphql(
  `
    fragment StoryTabFragment on StoryTabRecord @_unmask {
      ... on RecordInterface {
        componentName: __typename
      }
      id
      title
      news {
        ... on StoryItemRecord {
          ...StoryCardFragment
        }
        ... on WebinarItemRecord {
          ...WebinarItemFragment
        }
        ... on InsightRecord {
          ...InsightCardFragment
        }
        ... on ArticleRecord {
          ...ArticleCardPreviewFragment
        }
      }
    }
  `,
  [
    StoryCardFragment,
    WebinarItemFragment,
    InsightCardFragment,
    ArticleCardPreviewFragment,
    InternalLinkFragment,
  ],
);

export type StoryTabFragmentType = FragmentOf<typeof StoryTabFragment>;

export const ChannelFragment = graphql(`
  fragment ChannelFragment on ChannelRecord @_unmask {
    id
    title
    iconSelect
    description(markdown: true)
    linkTo
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
  [InternalLinkFragment, ExternalLinkFragment],
);

export type TextBlockFragmentType = FragmentOf<typeof TextBlockFragment>;

export const DataContainerFragment = graphql(`
  fragment DataContainerFragment on DataContainerRecord @_unmask {
    id
    iconSelect
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
      kpiElement {
        ...KpiElementFragment
      }
    }
  `,
  [DataContainerFragment, KpiElementFragment],
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
      body(markdown: true)
      header
    }
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

export const MegaMenuItemFragment = graphql(
  `
    fragment MegaMenuItemFragment on MegaMenuItemRecord @_unmask {
      id
      title
      subtitle
      pointsTo {
        ... on CatalogueRecord {
          id
        }
        ... on PageRecord {
          id
        }
      }
      image {
        ...ImageFragment
      }
      caption(markdown: true)
      subMenu {
        ... on MenuItemRecord {
          ...MenuItemFragment
        }
      }
    }
  `,
  [ImageFragment, MenuItemFragment],
);

export type MegaMenuItemFragmentType = FragmentOf<typeof MegaMenuItemFragment>;

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
    paragraph(markdown: true)
    title
  }
`);

export type ListItemFragmentType = FragmentOf<typeof ListItemFragment>;

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

export const CardEditorialWithIconFragment = graphql(`
  fragment CardEditorialWithIconFragment on CardEditorialWithIconRecord
  @_unmask {
    id
    title
    iconSelect
    description
  }
`);

export type CardEditorialWithIconFragmentType = FragmentOf<
  typeof CardEditorialWithIconFragment
>;

export const AdditionalContentFragment = graphql(
  `
    fragment AdditionalContentFragment on AdditionalContentRecord @_unmask {
      id
      title
      content {
        ...CardEditorialWithIconFragment
      }
    }
  `,
  [CardEditorialWithIconFragment],
);

export type AdditionalContentFragmentType = FragmentOf<
  typeof AdditionalContentFragment
>;

export const ListCollectionFragment = graphql(
  `
    fragment ListCollectionFragment on ListCollectionRecord @_unmask {
      title
      paragraph
      content {
        ...InsightCardFragment
      }
    }
  `,
  [InsightCardFragment],
);

export type ListCollectionFragmentType = FragmentOf<
  typeof ListCollectionFragment
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

export const CalloutFragment = graphql(`
  fragment CalloutFragment on CalloutRecord @_unmask {
    id
    title
    paragraph(markdown: true)
  }
`);

export type CalloutFragmentType = FragmentOf<typeof CalloutFragment>;

export const ListInternalLinkFragment = graphql(
  `
    fragment ListInternalLinkFragment on ListInternalLinkRecord @_unmask {
      id
      links {
        ...InternalLinkFragment
      }
    }
  `,
  [InternalLinkFragment],
);

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
        iconSelect
        label
      }
    }
  }
`);

export type IconListBlockFragmentType = FragmentOf<
  typeof IconListBlockFragment
>;

export const FeatureListBlockFragment = graphql(
  `
    fragment FeatureListBlockFragment on FeatureListRecord @_unmask {
      id
      items {
        ...ListItemFragment
      }
    }
  `,
  [ListItemFragment],
);

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
      allTypeResourceLocales: _allTypeResourceLocales {
        locale
        value {
          _allLabelLocales {
            locale
            value
          }
        }
      }
      allCategoryLocales: _allCategoryLocales {
        locale
        value {
          _allLabelLocales {
            locale
            value
          }
        }
      }
      allResourceLocales: _allResourceLocales {
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

export type ResourceFragmentType = FragmentOf<typeof ResourceFragment>;

export const QuickLinkCardFragment = graphql(
  `
    fragment QuickLinkCardFragment on QuickLinkCardRecord @_unmask {
      id
      title
      linkToResource {
        ... on RecordInterface {
          id
          componentName: __typename
        }
        ... on ResourceRecord {
          ...ResourceFragment
        }
        ... on ArticleRecord {
          title
          id
        }
      }
    }
  `,
  [ExternalLinkFragment, ResourceFragment],
);

export type QuickLinkCardFragmentType = FragmentOf<
  typeof QuickLinkCardFragment
>;

export const CardLinkFragment = graphql(
  `
    fragment CardLinkFragment on CardLinkRecord @_unmask {
      title
      paragraph
      link {
        ...LinkBlockFragment
      }
      image {
        ...ImageFragment
      }
    }
  `,
  [TextBlockFragment, ImageFragment, LinkBlockFragment],
);

export type CardLinkFragmentType = FragmentOf<typeof CardLinkFragment>;

export const OrderedListFragment = graphql(
  `
    fragment OrderedListFragment on OrderedListRecord @_unmask {
      id
      items {
        ... on ListItemRecord {
          ...ListItemFragment
        }
        ... on ListItemResourceRecord {
          title
          paragraph(markdown: true)
          subtitle
          links {
            ... on ExternalLinkRecord {
              ...ExternalLinkFragment
            }
            ... on InternalLinkRecord {
              ...InternalLinkFragment
            }
            ... on DownloadLinkRecord {
              ...DownloadLinkFragment
            }
          }
        }
      }
    }
  `,
  [
    ListItemFragment,
    ExternalLinkFragment,
    InternalLinkFragment,
    DownloadLinkFragment,
  ],
);

export type OrderedListFragmentType = FragmentOf<typeof OrderedListFragment>;

export const UseCaseBlockFragment = graphql(
  `
    fragment UseCaseBlockFragment on UseCaseBlockRecord @_unmask {
      id
      title
      useCases {
        ... on ArticleRecord {
          ...ArticleCardPreviewFragment
        }
        ... on InsightRecord {
          ...InsightCardFragment
        }
        ... on StoryItemRecord {
          ...StoryCardFragment
        }
        ... on WebinarItemRecord {
          ...WebinarItemFragment
        }
      }
    }
  `,
  [
    ArticleCardPreviewFragment,
    StoryCardFragment,
    InsightCardFragment,
    WebinarItemFragment,
  ],
);

export type UseCaseBlockFragmentType = FragmentOf<typeof UseCaseBlockFragment>;
