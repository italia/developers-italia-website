import { AllNewsQuery } from "@graphql/query/news";
import { AllResourcesQuery } from "@graphql/query/resource";
import { AllStoryCardQuery } from "@graphql/query/story";
import { AllWebinarQuery } from "@graphql/query/webinar";
import { executeQuery } from "@lib/datocms";
import { getCollection } from "astro:content";

const wrap = (items: any[]) => items.map((item) => ({ data: item }));

export const getNews = async (isPreview: boolean) => {
  if (isPreview) {
    const res = await executeQuery(AllNewsQuery, {
      includeDrafts: true,
    });
    return wrap(res.allNewsItems);
  }
  return await getCollection("news_item");
};

export const getStories = async (isPreview: boolean) => {
  if (isPreview) {
    const res = await executeQuery(AllStoryCardQuery, {
      includeDrafts: true,
    });
    return wrap(res.allStoryItems);
  }
  return await getCollection("story_item");
};

export const getWebinars = async (isPreview: boolean) => {
  if (isPreview) {
    const res = await executeQuery(AllWebinarQuery, {
      includeDrafts: true,
    });
    return wrap(res.allWebinarItems);
  }
  return await getCollection("webinar_item");
};

export const getResources = async (isPreview: boolean) => {
  if (isPreview) {
    const res = await executeQuery(AllResourcesQuery, {
      includeDrafts: true,
    });
    return wrap(res.allResources);
  }
  return await getCollection("resource");
};

export async function getGlobalSettings(lang: string) {
  const globalSettingsCollection = await getCollection("global_settings");
  const globalSettingLocale = globalSettingsCollection.find(
    (setting) => setting.data.locale === lang,
  );
  return globalSettingLocale?.data.value;
}
