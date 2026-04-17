import { StoryCardFragment } from "@graphql/fragment/commonFragments";
import { AllStoriesRecordFragment } from "@graphql/fragment/story";
import { graphql } from "@graphql/graphql";

export const AllStoryCardQuery = graphql(
  `
    query AllStory {
      allStoryItems(first: 2500) {
        ...StoryCardFragment
      }
    }
  `,
  [StoryCardFragment],
);

export const AllStoriesContentQuery = graphql(
  `
    query AllStoriesContentQuery {
      allStoryItems(first: 2500) {
        ...AllStoriesRecordFragment
      }
    }
  `,
  [AllStoriesRecordFragment],
);
