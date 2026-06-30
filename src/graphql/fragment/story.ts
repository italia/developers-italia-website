import {
  CalloutFragment,
  TagFragment,
} from "@graphql/fragment/commonFragments";
import {
  ArticleSTFragment,
  HeroFragment,
  IntroArticleFragment,
  SupportCTASectionFragment,
} from "@graphql/fragment/sectionFragments";
import { AllStoryItemsSlugFragment } from "@graphql/fragment/slugFragments";
import { graphql, type FragmentOf } from "@graphql/graphql";

export const StoryContentFragment = graphql(
  `
    fragment StoryContentFragment on StoryItemModelContentField @_unmask {
      ... on RecordInterface {
        id
        componentName: __typename
      }
      ... on HeroRecord {
        ...HeroFragment
      }
      ... on StructuredTextRecord {
        ...ArticleSTFragment
      }
      ... on SupportCtaSectionRecord {
        ...SupportCTASectionFragment
      }
      ... on IntroArticleRecord {
        ...IntroArticleFragment
      }
    }
  `,
  [
    HeroFragment,
    CalloutFragment,
    ArticleSTFragment,
    SupportCTASectionFragment,
    IntroArticleFragment,
  ],
);

export type StoryContentFragmentType = FragmentOf<typeof StoryContentFragment>;

export const AllStoryItemsFragment = graphql(
  `
    fragment AllStoryItemsFragment on StoryItemRecord @_unmask {
      id
      allContentLocales: _allContentLocales {
        locale
        value {
          ...StoryContentFragment
        }
      }
      ...AllStoryItemsSlugFragment
    }
  `,
  [TagFragment, StoryContentFragment, AllStoryItemsSlugFragment],
);

export type AllStoryItemsFragmentType = FragmentOf<
  typeof AllStoryItemsFragment
>;

export const AllStoriesRecordFragment = graphql(
  `
    fragment AllStoriesRecordFragment on StoryItemRecord @_unmask {
      id
      locales: _locales
      publishedAt: _publishedAt
      updatedAt: _updatedAt
      allTitleLocales: _allTitleLocales {
        locale
        value
      }
      allParagraphLocales: _allParagraphLocales {
        locale
        value
      }
      dateOfPublication
      articleClassification {
        id
        allLabelLocales: _allLabelLocales {
          locale
          value
        }
      }
      allTopicLocales: _allTopicLocales {
        locale
        value {
          id
          allLabelLocales: _allLabelLocales {
            locale
            value
          }
        }
      }
      allContentLocales: _allContentLocales {
        locale
        value {
          ...StoryContentFragment
        }
      }
    }
  `,
  [StoryContentFragment],
);

export type AllStoriesRecordFragmentType = FragmentOf<
  typeof AllStoriesRecordFragment
>;
