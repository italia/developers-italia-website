import type { AllArticlesRecordFragmentType } from "@graphql/fragment/article";
import type { AllCataloguesRecordFragmentType } from "@graphql/fragment/catalogue";
import type {
  NewsItemFragmentType,
  ResourceFragmentType,
  StoryCardFragmentType,
  TagFragmentType,
  WebinarItemFragmentType,
} from "@graphql/fragment/commonFragments";
import type { ErrorRecordFragmentType } from "@graphql/fragment/globalSettings";
import type { HomepageRecordFragmentType } from "@graphql/fragment/homepage";
import type {
  ArticleIndexingFragmentType,
  CatalogueIndexingFragmentType,
  InsightIndexingFragmentType,
  NewsIndexingFragmentType,
  PageIndexingFragmentType,
  ResourseIndexingFragmentType,
  StoryIndexingFragmentType,
  WebinarIndexingFragmentType,
} from "@graphql/fragment/indexing";
import type { AllInsightsRecordFragmentType } from "@graphql/fragment/insight";
import type {
  FooterFragmentType,
  HeaderFragmentType,
  SidebarFragmentType,
} from "@graphql/fragment/layout";
import type { PageFragmentType } from "@graphql/fragment/page";
import type { SearchRecordFragmentType } from "@graphql/fragment/search";
import type { SearchMenuFragmentType } from "@graphql/fragment/sectionFragments";
import type { SeoFieldFragmentType } from "@graphql/fragment/seoFragments";
import type { AllStoriesRecordFragmentType } from "@graphql/fragment/story";
import type { AllWebinarRecordFragmentType } from "@graphql/fragment/webinar";
import type { SiteLocale } from "@graphql/types";
import { z } from "astro:content";

export const newsSchema = z.custom<NewsItemFragmentType>();

export const storySchema = z.custom<StoryCardFragmentType>();

export const webinarSchema = z.custom<WebinarItemFragmentType>();

export const resourceSchema = z.custom<ResourceFragmentType>();

export const pageSchema = z.custom<PageFragmentType>();

export const homepageSchema = z.custom<HomepageRecordFragmentType>();

export const searchSchema = z.custom<SearchRecordFragmentType>();

export const webinarContentSchema = z.custom<AllWebinarRecordFragmentType>();

export const storyContentSchema = z.custom<AllStoriesRecordFragmentType>();

export const insightSchema = z.custom<AllInsightsRecordFragmentType>();

export const articleSchema = z.custom<AllArticlesRecordFragmentType>();

export const globalSettingsSchema = z.object({
  id: z.string(),
  locale: z.string(),
  value: z.object({
    siteName: z.string(),
    lastUpdateLabel: z.string(),
  }),
});

export const layoutSchema = z.object({
  id: z.string(),
  layout: z.intersection(
    z.custom<HeaderFragmentType>(),
    z.custom<FooterFragmentType>(),
  ),
  search: z.custom<SearchMenuFragmentType>(),
  homepageId: z.string(),
});

export const sidebarSchema = z.custom<SidebarFragmentType>();

export const catalogueSchema = z.intersection(
  z.custom<AllCataloguesRecordFragmentType>(),
  z.object({
    datesRegistry: z.object({
      news: z.string().optional(),
      story: z.string().optional(),
      webinar: z.string().optional(),
      resource: z.string().optional(),
    }),
  }),
);

export const localesSchema = z.object({
  id: z.string(),
  locales: z.array(z.custom<SiteLocale>()),
});

export const errorPageSchema = z.object({
  id: z.string(),
  globalSetting: z.custom<ErrorRecordFragmentType>(),
  homepageId: z.string().optional(),
});

export const siteMetaTagsSchema = z.object({
  id: z.string(),
  faviconMetaTags: z.array(z.custom<TagFragmentType>()),
});

export const globalSeoSchema = z.object({
  id: z.string(),
  recordId: z.string(),
  locale: z.string(),
  metaTags: z.array(z.custom<TagFragmentType>()),
  seo: z.custom<SeoFieldFragmentType>(),
  updatedAt: z.string(),
});

export const allDocumentsSchema = z.object({
  id: z.string(),
  allArticles: z.array(z.custom<ArticleIndexingFragmentType>()),
  allInsights: z.array(z.custom<InsightIndexingFragmentType>()),
  allStoryItems: z.array(z.custom<StoryIndexingFragmentType>()),
  allNewsItems: z.array(z.custom<NewsIndexingFragmentType>()),
  allWebinarItems: z.array(z.custom<WebinarIndexingFragmentType>()),
  allResources: z.array(z.custom<ResourseIndexingFragmentType>()),
  allCatalogues: z.array(z.custom<CatalogueIndexingFragmentType>()),
  allPages: z.array(z.custom<PageIndexingFragmentType>()),
});
