import {
  allDocumentsLoader,
  allStoryClassesLoader,
  articleContentLoader,
  cataloguesLoader,
  errorPageLoader,
  globalSeoLoader,
  globalSettingsLoader,
  homepageLoader,
  insightContentLoader,
  layoutLoader,
  localesLoader,
  newsLoader,
  pagesLoader,
  resourcesLoader,
  searchLoader,
  sidebarLoader,
  siteMetaTagsLoader,
  storiesLoader,
  storyContentLoader,
  webinarContentLoader,
  webinarsLoader,
} from "@collections/loader";
import {
  allDocumentsSchema,
  allStoryClassesSchema,
  articleSchema,
  catalogueSchema,
  errorPageSchema,
  globalSeoSchema,
  globalSettingsSchema,
  homepageSchema,
  insightSchema,
  layoutSchema,
  localesSchema,
  newsSchema,
  pageSchema,
  resourceSchema,
  searchSchema,
  sidebarSchema,
  siteMetaTagsSchema,
  storyContentSchema,
  storySchema,
  webinarContentSchema,
  webinarSchema,
} from "@collections/schema";
import { defineCollection } from "astro:content";

export const collections = {
  news_item: defineCollection({
    schema: newsSchema,
    loader: newsLoader,
  }),
  story_item: defineCollection({
    schema: storySchema,
    loader: storiesLoader,
  }),
  webinar_item: defineCollection({
    schema: webinarSchema,
    loader: webinarsLoader,
  }),
  resource: defineCollection({
    schema: resourceSchema,
    loader: resourcesLoader,
  }),
  global_settings: defineCollection({
    schema: globalSettingsSchema,
    loader: globalSettingsLoader,
  }),
  page: defineCollection({
    schema: pageSchema,
    loader: pagesLoader,
  }),
  homepage: defineCollection({
    schema: homepageSchema,
    loader: homepageLoader,
  }),
  search: defineCollection({
    schema: searchSchema,
    loader: searchLoader,
  }),
  catalogue: defineCollection({
    schema: catalogueSchema,
    loader: cataloguesLoader,
  }),
  webinar_content: defineCollection({
    schema: webinarContentSchema,
    loader: webinarContentLoader,
  }),
  story_content: defineCollection({
    schema: storyContentSchema,
    loader: storyContentLoader,
  }),
  insight: defineCollection({
    schema: insightSchema,
    loader: insightContentLoader,
  }),
  article: defineCollection({
    schema: articleSchema,
    loader: articleContentLoader,
  }),
  layout: defineCollection({
    schema: layoutSchema,
    loader: layoutLoader,
  }),
  sidebar: defineCollection({
    schema: sidebarSchema,
    loader: sidebarLoader,
  }),
  locales: defineCollection({
    schema: localesSchema,
    loader: localesLoader,
  }),
  error_page: defineCollection({
    schema: errorPageSchema,
    loader: errorPageLoader,
  }),
  site_meta: defineCollection({
    schema: siteMetaTagsSchema,
    loader: siteMetaTagsLoader,
  }),
  global_seo: defineCollection({
    schema: globalSeoSchema,
    loader: globalSeoLoader,
  }),
  documents: defineCollection({
    loader: allDocumentsLoader,
    schema: allDocumentsSchema,
  }),
  story_classes: defineCollection({
    loader: allStoryClassesLoader,
    schema: allStoryClassesSchema,
  }),
};
