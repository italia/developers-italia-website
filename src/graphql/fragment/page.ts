import {
  CardLinkListFragment,
  DataSectionRecordFragment,
  FaqSectionRecordFragment,
  HeroFragment,
  NewsFeedFragment,
  StructuredTextFragment,
  SupportChannelsSectionFragment,
  SupportCTASectionFragment,
  TextAndAccordionFragment,
  TextAndImageFragment,
  TextOnlyFragment,
  TopicFilterFragment,
  UseCaseContainerFragment,
} from "@graphql/fragment/sectionFragments";
import { graphql, type FragmentOf } from "@graphql/graphql";

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
    FaqSectionRecordFragment,
    DataSectionRecordFragment,
    UseCaseContainerFragment,
    TopicFilterFragment,
    SupportCTASectionFragment,
    StructuredTextFragment,
    TextAndImageFragment,
    TextAndAccordionFragment,
    TextOnlyFragment,
    CardLinkListFragment,
  ],
);

export type PageContentFragmentType = FragmentOf<typeof PageContentFragment>;

export const PageFragment = graphql(
  `
    fragment PageFragment on PageRecord @_unmask {
      id
      locales: _locales
      publishedAt: _publishedAt
      updatedAt: _updatedAt
      allContentLocales: _allContentLocales {
        locale
        value {
          ...PageContentFragment
        }
      }
    }
  `,
  [PageContentFragment],
);

export type PageFragmentType = FragmentOf<typeof PageFragment>;
