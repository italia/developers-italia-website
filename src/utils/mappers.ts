import type { CardEditorialNewsProps } from "@components/react/CardEditorialNews";
import type { CardEditorialStoryProps } from "@components/react/CardEditorialStory";
import type { ResourceProps } from "@components/react/Resource";
import type {
  NewsItemFragmentType,
  ResourceFragmentType,
  StoryCardFragmentType,
  WebinarItemFragmentType,
} from "@graphql/fragment/commonFragments";
import type { SiteLocale } from "@graphql/types";
import { getLocaleValue } from "@utils/getLocaleValue";
import { linkResolver } from "@utils/linkResolver";

export const mapNewsToCardEditorialNewsProps = (
  news: NewsItemFragmentType,
  lang: SiteLocale,
): CardEditorialNewsProps => {
  const link = getLocaleValue(news.allLinkLocales, lang, "");
  const topic = getLocaleValue(news.allTopicLocales, lang, null);
  return {
    id: news.id,
    title: getLocaleValue(news.allTitleLocales, lang, ""),
    description: getLocaleValue(news.allParagraphLocales, lang, ""),
    image: news.image,
    linkTo: link || "#",
    category: getLocaleValue(topic?._allLabelLocales, lang, ""),
    dateTime: news.publishedAt,
    action: link ? new URL(link).host : "",
    lang: lang,
    isExternal: true,
  };
};

export const mapStoryToCardEditorialStoryProps = (
  story: StoryCardFragmentType,
  lang: SiteLocale,
): CardEditorialStoryProps => {
  const topic = getLocaleValue(story.allTopicLocales, lang, null);
  return {
    id: story.id,
    title: getLocaleValue(story.allTitleLocales, lang, ""),
    image: story.image,
    linkTo: linkResolver(story.id, lang),
    category: getLocaleValue(topic?._allLabelLocales, lang, ""),
    dateTime: story.publishedAt || undefined,
    description: getLocaleValue(story.allParagraphLocales, lang, "") || "",
    lang: lang,
  };
};

export const mapWebinarToCardEditorialNewsProps = (
  webinar: WebinarItemFragmentType,
  lang: SiteLocale,
): CardEditorialNewsProps => {
  const topic = getLocaleValue(webinar.allTopicLocales, lang, null);
  return {
    id: webinar.id,
    title: getLocaleValue(webinar.allTitleLocales, lang, ""),
    description: getLocaleValue(webinar.allParagraphLocales, lang, ""),
    image: webinar.image,
    linkTo: linkResolver(webinar.id, lang),
    category: getLocaleValue(topic?._allLabelLocales, lang, ""),
    dateTime: webinar.publishedAt,
    lang: lang,
    isExternal: false,
  };
};
export const mapResourceToResourceProps = (
  resource: ResourceFragmentType,
  lang: SiteLocale,
): ResourceProps => {
  let url = "";
  let isDownload = false;

  const resourceContent = getLocaleValue(
    resource.allResourceLocales,
    lang,
    undefined,
  );
  if (!resourceContent) {
    return {} as ResourceProps;
  }

  if ("url" in resourceContent) {
    url = resourceContent.url;
    isDownload = false;
  } else {
    url = resourceContent.doc
      ? `${resourceContent.doc.url}?dl=${resourceContent.doc.filename}.${resourceContent.doc.format}`
      : "#";
    isDownload = true;
  }

  const categories = getLocaleValue(resource.allCategoryLocales, lang, []);
  const type = getLocaleValue(resource.allTypeResourceLocales, lang, null);
  return {
    title: resourceContent.label,
    category:
      categories.map((v: any) =>
        getLocaleValue(v._allLabelLocales, lang, ""),
      ) || [],
    description: resourceContent.description || "",
    url: url,
    download: isDownload,
    type: getLocaleValue(type?._allLabelLocales, lang, ""),
    lang: lang,
  };
};
