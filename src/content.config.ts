import type {
  NewsItemFragmentType,
  ResourceFragmentType,
  StoryCardFragmentType,
  WebinarItemFragmentType,
} from "@graphql/fragment/commonFragments";
import { AllNewsQuery } from "@graphql/query/news";
import { AllResourcesQuery } from "@graphql/query/resource";
import { AllGlobalSettingsQuery } from "@graphql/query/settings";
import { AllStoryCardQuery } from "@graphql/query/story";
import { AllWebinarQuery } from "@graphql/query/webinar";
import { executeQuery } from "@lib/datocms";

import { defineCollection, z } from "astro:content";

const newsSchema = z.custom<NewsItemFragmentType>();

const storySchema = z.custom<StoryCardFragmentType>();

const webinarSchema = z.custom<WebinarItemFragmentType>();

const resourceSchema = z.custom<ResourceFragmentType>();

const globalSettingsSchema = z.object({
  locale: z.string(),
  value: z.object({
    siteName: z.string(),
    lastUpdateLabel: z.string(),
    ariaLabelLogo: z.string(),
    languageSelector: z.string(),
    chipTopicLabel: z.string(),
    ariaLabelCardCategory: z.string(),
    ariaLabelCardAction: z.string(),
    ariaLabelExternalLink: z.string(),
    ariaLabelInternalLink: z.string(),
    ariaLabelDownloadLink: z.string(),
    analyzer: z.string(),
    loading: z.string(),
  }),
});

const newsCollection = defineCollection({
  schema: newsSchema,
  loader: async () => {
    const response = await executeQuery(AllNewsQuery);
    return response?.allNewsItems || [];
  },
});

const storiesCollection = defineCollection({
  schema: storySchema,
  loader: async () => {
    const response = await executeQuery(AllStoryCardQuery);
    return response?.allStoryItems || [];
  },
});

const webinarsCollection = defineCollection({
  schema: webinarSchema,
  loader: async () => {
    const response = await executeQuery(AllWebinarQuery);
    return response?.allWebinarItems || [];
  },
});

const resourcesCollection = defineCollection({
  schema: resourceSchema,
  loader: async () => {
    const response = await executeQuery(AllResourcesQuery);
    return response?.allResources || [];
  },
});

const globalSettingsCollection = defineCollection({
  schema: globalSettingsSchema,
  loader: async () => {
    function transformGlobalSettings(data: any) {
      const localesMap: Record<string, any> = {};

      const fieldMapping: Record<string, string> = {
        _allSiteNameLocales: "siteName",
        _allLastUpdateLabelLocales: "lastUpdateLabel",
        _allAriaLabelLogoLocales: "ariaLabelLogo",
        _allLanguageSelectorLocales: "languageSelector",
        _allChipTopicLabelLocales: "chipTopicLabel",
        _allAriaLabelCardCategoryLocales: "ariaLabelCardCategory",
        _allAriaLabelCardActionLocales: "ariaLabelCardAction",
        _allAriaLabelExternalLinkLocales: "ariaLabelExternalLink",
        _allAriaLabelInternalLinkLocales: "ariaLabelInternalLink",
        _allAriaLabelDownloadLinkLocales: "ariaLabelDownloadLink",
        _allAnalyzerLocales: "analyzer",
        _allLoadingLocales: "loading",
      };

      Object.entries(fieldMapping).forEach(([datoKey, zodKey]) => {
        const translations = data.globalSetting[datoKey] || [];

        translations.forEach((item: { locale: string; value: string }) => {
          if (!localesMap[item.locale]) {
            localesMap[item.locale] = {};
          }
          localesMap[item.locale][zodKey] = item.value;
        });
      });

      return Object.entries(localesMap).map(([locale, values]) => ({
        id: locale,
        locale,
        value: values,
      }));
    }

    const response = await executeQuery(AllGlobalSettingsQuery);
    if (!response?.globalSetting) return [];

    return transformGlobalSettings(response);
  },
});

export const collections = {
  news_item: newsCollection,
  story_item: storiesCollection,
  webinar_item: webinarsCollection,
  resource: resourcesCollection,
  global_settings: globalSettingsCollection,
};
