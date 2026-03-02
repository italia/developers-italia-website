import type { CardEditorialInlineMiniProps } from "@components/react/CardEditorialInlineMini/CardEditorialInlineMini";
import type { CardEditorialNewsProps } from "@components/react/CardEditorialNews";
import type { ResourceProps } from "@components/react/Resource";
import type {
  NewsItemFragmentType,
  ResourceFragmentType,
  StoryCardFragmentType,
  WebinarItemFragmentType,
} from "@graphql/fragment/commonFragments";
import type { SiteLocale } from "@graphql/types";
import { linkResolver } from "@utils/linkResolver";

export const mapNewsToCardEditorialNewsProps = (
  news: NewsItemFragmentType,
  lang: SiteLocale,
): CardEditorialNewsProps => {
  const link = news.allLinkLocales?.find((t) => t.locale === lang)?.value;
  return {
    id: news.id,
    title: news.allTitleLocales?.find((t) => t.locale === lang)?.value || "",
    description:
      news.allParagraphLocales?.find((t) => t.locale === lang)?.value || "",
    image: news.image,
    linkTo: link || "#",
    category:
      news.allTopicLocales?.find((t) => t.locale === lang)?.value.label || "",
    dateTime: news.publishedAt,
    action: link ? new URL(link).host : "",
    lang: lang,
  };
};

export const mapStoryToCardEditorialInlineMiniProps = (
  story: StoryCardFragmentType,
  lang: SiteLocale,
): CardEditorialInlineMiniProps => ({
  id: story.id,
  title: story.allTitleLocales?.find((t) => t.locale === lang)?.value || "",
  image: story.image,
  linkTo: linkResolver(story.id, lang),
  category:
    story.allTopicLocales?.find((t) => t.locale === lang)?.value.label || "",
  dateTime: story.publishedAt,
  description: "",
  lang: lang,
});

export const mapWebinarToCardEditorialNewsProps = (
  webinar: WebinarItemFragmentType,
  lang: SiteLocale,
): CardEditorialNewsProps => ({
  id: webinar.id,
  title: webinar.allTitleLocales?.find((t) => t.locale === lang)?.value || "",
  description:
    webinar.allParagraphLocales?.find((t) => t.locale === lang)?.value || "",
  image: webinar.image,
  linkTo: linkResolver(webinar.id, lang),
  category:
    webinar.allTopicLocales?.find((t) => t.locale === lang)?.value.label || "",
  dateTime: webinar.publishedAt,
  lang: lang,
});
export const mapResourceToResourceProps = (
  resource: ResourceFragmentType,
  lang: SiteLocale,
): ResourceProps => {
  let url = "";
  let isDownload = false;

  const resourceContent = resource.allResourceLocales?.find(
    (t) => t.locale === lang,
  )?.value;
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

  return {
    title: resourceContent.label,
    category:
      resource.allCategoryLocales
        ?.find((t) => t.locale === lang)
        ?.value.map((v) => v.label) || [],
    description: resourceContent.description || "",
    url: url,
    download: isDownload,
    type:
      resource.allTypeResourceLocales?.find((t) => t.locale === lang)?.value
        .label || "",
    lang: lang,
  };
};
