import {
  CalloutLinkFragment,
  CardLinkListFragment,
  CatalogueFeedFragment,
  HeroFragment,
  SupportCTASectionFragment,
  TextOnlyFragment,
} from "@graphql/fragment/sectionFragments";
import { graphql, type FragmentOf } from "@graphql/graphql";

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
      ... on TextOnlyRecord {
        ...TextOnlyFragment
      }
      ... on CardLinkListRecord {
        ...CardLinkListFragment
      }
      ... on SupportCtaSectionRecord {
        ...SupportCTASectionFragment
      }
    }
  `,
  [
    HeroFragment,
    CatalogueFeedFragment,
    CalloutLinkFragment,
    TextOnlyFragment,
    CardLinkListFragment,
    SupportCTASectionFragment,
  ],
);

export type CatalogueContentFragmentType = FragmentOf<
  typeof CatalogueContentFragment
>;

export const AllCataloguesRecordFragment = graphql(
  `
    fragment AllCataloguesRecordFragment on CatalogueRecord @_unmask {
      id
      locales: _locales
      publishedAt: _publishedAt
      updatedAt: _updatedAt
      allContentLocales: _allContentLocales {
        locale
        value {
          ...CatalogueContentFragment
        }
      }
    }
  `,
  [CatalogueContentFragment],
);

export type AllCataloguesRecordFragmentType = FragmentOf<
  typeof AllCataloguesRecordFragment
>;
