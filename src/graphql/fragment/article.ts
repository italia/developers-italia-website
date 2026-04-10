import {
  CalloutFragment,
  DownloadLinkFragment,
  ExternalLinkFragment,
  ImageBlockFragment,
  InternalLinkFragment,
  ListBlockquoteFragment,
  ListCardEditorialWithIconFragment,
  ListCardInfoFragment,
  OrderedListFragment,
  QuickLinkCardFragment,
  RelatedArticleFragment,
  TopicsBlockFragment,
} from "@graphql/fragment/commonFragments";
import { SupportCTASectionFragment } from "@graphql/fragment/sectionFragments";
import { graphql, type FragmentOf } from "@graphql/graphql";

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
        ... on CardServiceRecord {
          card {
            ...ExternalLinkFragment
          }
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
        ... on ExternalLinkRecord {
          ...ExternalLinkFragment
        }
        ... on InternalLinkRecord {
          ...InternalLinkFragment
        }
        ... on ListExternalLinkRecord {
          links {
            ...ExternalLinkFragment
          }
        }
        ... on DownloadLinkRecord {
          ...DownloadLinkFragment
        }
      }
    }
  `,
  [
    ListCardEditorialWithIconFragment,
    InternalLinkFragment,
    ExternalLinkFragment,
    OrderedListFragment,
    CalloutFragment,
    QuickLinkCardFragment,
    SupportCTASectionFragment,
    TopicsBlockFragment,
    RelatedArticleFragment,
    ImageBlockFragment,
    ListBlockquoteFragment,
    ListCardInfoFragment,
    DownloadLinkFragment,
  ],
);

export type ArticleContentFragmentType = FragmentOf<
  typeof ArticleContentFragment
>;

export const AllArticlesRecordFragment = graphql(
  `
    fragment AllArticlesRecordFragment on ArticleRecord @_unmask {
      id
      locales: _locales
      updatedAt: _updatedAt
      publishedAt: _publishedAt
      allContentLocales: _allContentLocales {
        locale
        value {
          ...ArticleContentFragment
        }
      }
    }
  `,
  [ArticleContentFragment],
);

export type AllArticlesRecordFragmentType = FragmentOf<
  typeof AllArticlesRecordFragment
>;
