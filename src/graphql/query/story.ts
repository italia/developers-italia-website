import { TagFragment } from "@graphql/commonFragments";
import { graphql } from "@graphql/graphql";
import { StoryContentFragment } from "@graphql/templateFragments";

export const AllStoriesContentQuery = graphql(
  `
    query AllStoriesContentQuery {
      allStoryItems {
        id
        locales: _locales
        allContentLocales: _allContentLocales {
          locale
          value {
            ...StoryContentFragment
          }
        }
      }
    }
  `,
  [StoryContentFragment],
);

export const StorySeoQuery = graphql(
  `
    query StorySeoQuery($id: ItemId!, $locale: SiteLocale!) {
      storyItem(filter: { id: { eq: $id } }, locale: $locale) {
        seo: _seoMetaTags {
          ...TagFragment
        }
      }
    }
  `,
  [TagFragment],
);
