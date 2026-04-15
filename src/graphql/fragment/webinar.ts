import { TagFragment } from "@graphql/fragment/commonFragments";
import {
  ActionCardFragment,
  HeroFragment,
  IntroArticleFragment,
  SpeakerFragment,
  WebinarDescriptionFragment,
} from "@graphql/fragment/sectionFragments";
import { AllWebinarItemsSlugFragment } from "@graphql/fragment/slugFragments";
import { graphql, type FragmentOf } from "@graphql/graphql";

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
      ... on ActionCardRecord {
        ...ActionCardFragment
      }
      ... on SpeakerRecord {
        ...SpeakerFragment
      }
      ... on WebinarDescriptionRecord {
        ...WebinarDescriptionFragment
      }
      ... on IntroArticleRecord {
        ...IntroArticleFragment
      }
    }
  `,
  [
    HeroFragment,
    ActionCardFragment,
    SpeakerFragment,
    WebinarDescriptionFragment,
    IntroArticleFragment,
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

export const AllWebinarRecordFragment = graphql(
  `
    fragment AllWebinarRecordFragment on WebinarItemRecord @_unmask {
      id
      locales: _locales
      publishedAt: _publishedAt
      updatedAt: _updatedAt
      allContentLocales: _allContentLocales {
        locale
        value {
          ...WebinarContentFragment
        }
      }
    }
  `,
  [WebinarContentFragment],
);

export type AllWebinarRecordFragmentType = FragmentOf<
  typeof AllWebinarRecordFragment
>;
