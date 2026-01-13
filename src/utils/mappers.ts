import type { CardEditorialNewsProps } from "@components/react/CardEditorialNews";
import type { CardEditorialInlineMiniProps } from "@components/react/CardEditorialInlineMini/CardEditorialInlineMini";
import type {
  NewsItemFragmentType,
  ResourceFragmentType,
  StoryItemFragmentType,
  WebinarItemFragmentType,
} from "@graphql/commonFragments";
import { linkResolver } from "@utils/linkResolver";
import type { ResourceProps } from "@components/react/Resource";

export const mapNewsToCardEditorialNewsProps = (
  news: NewsItemFragmentType,
  lang: string,
): CardEditorialNewsProps => ({
  title: news.title,
  description: news.paragraph,
  image: news.image,
  linkTo: news.link,
  category: news.topic.label,
  dateTime: news.dateOfPublication,
  action: new URL(news.link).host,
  lang: lang,
});

export const mapStoryToCardEditorialInlineMiniProps = (
  story: StoryItemFragmentType,
  lang: string,
): CardEditorialInlineMiniProps => ({
  title: story.title,
  image: story.image,
  linkTo: linkResolver(story.id, lang),
  category: story.topic.label,
  dateTime: story.dateOfPublication,
  description: "",
  lang: lang,
});

export const mapWebinarToCardEditorialNewsProps = (
  webinar: WebinarItemFragmentType,
  lang: string,
): CardEditorialNewsProps => ({
  title: webinar.title,
  description: webinar.paragraph,
  image: webinar.image,
  linkTo: linkResolver(webinar.id, lang),
  category: webinar.topic.label,
  dateTime: webinar.date,
  lang: lang,
});
export const mapResourceToResourceProps = (
  resource: ResourceFragmentType,
): ResourceProps => {
  let url = "";
  let isDownload = false;

  if ("url" in resource.resource) {
    url = resource.resource.url;
    isDownload = false;
  } else {
    url = resource.resource.doc
      ? `${resource.resource.doc.url}?dl=${resource.resource.doc.filename}.${resource.resource.doc.format}`
      : "#";
    isDownload = true;
  }

  return {
    title: resource.resource.label,
    category: resource.category.label,
    description: resource.resource.description || "",
    url: url,
    download: isDownload,
  };
};
