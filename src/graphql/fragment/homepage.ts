import {
  CardLinkListFragment,
  HeroFragment,
  NewsFeedFragment,
  SupportChannelsSectionFragment,
  TextAndImageFragment,
  TextAndStatisticsFragment,
  TextAndUseCasesFragment,
  TextOnlyFragment,
} from "@graphql/fragment/sectionFragments";
import { graphql, type FragmentOf } from "@graphql/graphql";

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
      ... on TextOnlyRecord {
        ...TextOnlyFragment
      }
      ... on CardLinkListRecord {
        ...CardLinkListFragment
      }
    }
  `,
  [
    HeroFragment,
    NewsFeedFragment,
    SupportChannelsSectionFragment,
    TextAndImageFragment,
    TextAndStatisticsFragment,
    TextAndUseCasesFragment,
    TextOnlyFragment,
    CardLinkListFragment,
  ],
);

export type HomepageModelContentFragmentType = FragmentOf<
  typeof HomepageModelContentFragment
>;

export const HomepageRecordFragment = graphql(
  `
    fragment HomepageRecordFragment on HomepageRecord @_unmask {
      id
      title
      publishedAt: _publishedAt
      updatedAt: _updatedAt
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

export type HomepageRecordFragmentType = FragmentOf<
  typeof HomepageRecordFragment
>;
