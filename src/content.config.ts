import type {
  NewsItemFragmentType,
  ResourceFragmentType,
  StoryItemFragmentType,
  WebinarItemFragmentType,
} from "@graphql/commonFragments";
import { executeQuery } from "@lib/datocms";
import {
  AllNewsQuery,
  AllStoryQuery,
  AllWebinarQuery,
  AllResourcesQuery,
} from "@utils/query";
import { defineCollection, z } from "astro:content";

const newsSchema = z.custom<NewsItemFragmentType>();

const storySchema = z.custom<StoryItemFragmentType>();

const webinarSchema = z.custom<WebinarItemFragmentType>();

const resourceSchema = z.custom<ResourceFragmentType>();

const newsCollection = defineCollection({
  schema: newsSchema,
  loader: async () => {
    const response = await executeQuery(AllNewsQuery);
    return response.allNewsItems;
  },
});

const storiesCollection = defineCollection({
  schema: storySchema,
  loader: async () => {
    const response = await executeQuery(AllStoryQuery);
    return response.allStoryItems;
  },
});

const webinarsCollection = defineCollection({
  schema: webinarSchema,
  loader: async () => {
    const response = await executeQuery(AllWebinarQuery);
    return response.allWebinarItems;
  },
});

const resourcesCollection = defineCollection({
  schema: resourceSchema,
  loader: async () => {
    const response = await executeQuery(AllResourcesQuery);
    return response.allResources;
  },
});

export const collections = {
  news: newsCollection,
  stories: storiesCollection,
  webinars: webinarsCollection,
  resources: resourcesCollection,
};
