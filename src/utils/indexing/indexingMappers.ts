import type {
  ArticleIndexingFragmentType,
  InsightIndexingFragmentType,
  NewsIndexingFragmentType,
  PageIndexingFragmentType,
  ResourseIndexingFragmentType,
  StoryIndexingFragmentType,
  WebinarIndexingFragmentType,
} from "@graphql/fragment/indexing";
import type { SiteLocale } from "@graphql/types";
import { DatoBlockModel } from "@utils/cmsMapper";
import { createDownloadUrl } from "@utils/createDownloadUrl";
import { getLocaleValue } from "@utils/getLocaleValue";
import {
  flattenBlocks,
  getSearchRenderOptions,
} from "@utils/indexing/blockContentMappers";
import { linkResolver } from "@utils/linkResolver";
import { render } from "datocms-structured-text-to-plain-text";

export const getMapArticle = (
  article: ArticleIndexingFragmentType,
  lang: SiteLocale,
  category: string,
) => {
  const structuredText = getLocaleValue(article.allContentLocales, lang, null);

  const stOptions = getSearchRenderOptions();

  return {
    type: "article",
    id: article.id,
    category,
    internalLink: linkResolver(article.id, lang),
    title: getLocaleValue(article.allTitleLocales, lang, ""),
    description: getLocaleValue(article.allParagraphLocales, lang, ""),
    content: render(structuredText, stOptions),
  };
};

export const getMapInsight = (
  insight: InsightIndexingFragmentType,
  lang: SiteLocale,
  category: string,
) => {
  const contentData = getLocaleValue(insight.allContentLocales, lang, null);

  const content = flattenBlocks(contentData ?? []);
  return {
    type: "insight",
    id: insight.id,
    category,
    internalLink: linkResolver(insight.id, lang),
    title: getLocaleValue(insight.allTitleLocales, lang, ""),
    description: getLocaleValue(insight.allAbstractLocales, lang, ""),
    content: content,
  };
};

export const getMapStory = (
  story: StoryIndexingFragmentType,
  lang: SiteLocale,
  category: string,
) => {
  const contentData = getLocaleValue(story.allContentLocales, lang, null);

  const content = flattenBlocks(contentData ?? []);

  return {
    type: "story",
    id: story.id,
    category,
    internalLink: linkResolver(story.id, lang),
    title: getLocaleValue(story.allTitleLocales, lang, ""),
    description: "",
    content: content,
  };
};

export const getMapWebinar = (
  webinar: WebinarIndexingFragmentType,
  lang: SiteLocale,
  category: string,
) => {
  const contentData = getLocaleValue(webinar.allContentLocales, lang, null);
  const content = flattenBlocks(contentData ?? []);

  return {
    type: "webinar",
    id: webinar.id,
    category,
    internalLink: linkResolver(webinar.id, lang),
    title: getLocaleValue(webinar.allTitleLocales, lang, ""),
    description: getLocaleValue(webinar.allParagraphLocales, lang, ""),
    content: content,
  };
};

export const getMapNews = (
  news: NewsIndexingFragmentType,
  lang: SiteLocale,
  category: string,
) => {
  return {
    type: "news",
    id: news.id,
    category,
    externalLink: getLocaleValue(news.allLinkLocales, lang, ""),
    title: getLocaleValue(news.allTitleLocales, lang, ""),
    description: getLocaleValue(news.allParagraphLocales, lang, ""),
    content: getLocaleValue(news.allParagraphLocales, lang, ""),
  };
};

export const getMapResourse = (
  resourse: ResourseIndexingFragmentType,
  lang: SiteLocale,
  category: string,
) => {
  const block = getLocaleValue(resourse.allResourseLocales, lang, null);

  if (!block) return null;

  switch (block.componentName) {
    case DatoBlockModel.ExternalLink:
      return {
        type: "resourse",
        id: resourse.id,
        category,
        externalLink: block.url,
        title: block.label,
        description: block.description,
        content: block.description,
      };
    case DatoBlockModel.DownloadLink:
      return {
        type: "resourse",
        id: resourse.id,
        category,
        downloadLink: createDownloadUrl(block.doc),
        title: block.label,
        description: block.description,
        content: block.description,
      };
    default:
      return null;
  }
};

export const getMapPages = (
  page: PageIndexingFragmentType,
  lang: SiteLocale,
) => {
  const contentData = getLocaleValue(page.allContentLocales, lang, []);

  const content = flattenBlocks(contentData);
  return {
    type: "page",
    id: page.id,
    category: "",
    internalLink: linkResolver(page.id, lang),
    title: getLocaleValue(page.allTitleLocales, lang, ""),
    description: "",
    content: content,
  };
};
