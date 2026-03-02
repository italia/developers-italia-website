import type { SiteLocale } from "@graphql/types";
import { getI18n } from "@i18n/microcopy";
import {
  getCataloguesMapCategory,
  getCategoryName,
  getTitleByTypeNews,
  getTitleByTypeResourse,
  resolveArticleCategory,
} from "@utils/indexing/getCategory";
import * as Mappers from "@utils/indexing/indexingMappers";
import type { APIRoute } from "astro";
import { getEntry } from "astro:content";

export async function getStaticPaths() {
  const response = await getEntry("locales", "site-locales");

  const locales = response?.data.locales;
  if (!locales) throw new Error("Locales not found");

  return locales.map((lang) => ({
    params: {
      lang,
    },
  }));
}

export const prerender = true;

export const GET: APIRoute = async ({ params }) => {
  const lang = params.lang as SiteLocale;
  const t = getI18n(lang);

  if (!lang) {
    return new Response("Language parameter is missing", { status: 400 });
  }

  const analyzer = t["language.analyzer"] || "standard";

  const responseCollection = await getEntry("documents", "all-documents");
  const response = responseCollection?.data;

  if (!response)
    return new Response("No documents to indexing", { status: 400 });

  const articles = response.allArticles;
  const insights = response.allInsights;
  const stories = response.allStoryItems;
  const newsItems = response.allNewsItems;
  const webinars = response.allWebinarItems;
  const resourses = response.allResources;
  const pages = response.allPages;

  const cataloguesMapCategory = getCataloguesMapCategory(
    response.allCatalogues,
    lang,
  );

  const articleCategory = resolveArticleCategory(articles, lang);
  const insightCategory = getCategoryName(insights[0]?.parentPage, lang);
  const storyCategory =
    getTitleByTypeNews(cataloguesMapCategory, stories[0]?.modelApiKey) || "";
  const newsCategory =
    getTitleByTypeNews(cataloguesMapCategory, newsItems[0]?.modelApiKey) || "";
  const webinarCategory =
    getTitleByTypeNews(cataloguesMapCategory, webinars[0]?.modelApiKey) || "";
  const resourseCategory =
    getTitleByTypeResourse(cataloguesMapCategory, resourses[0]?.modelApiKey) ||
    "";

  const allDocuments = [
    ...pages.map((item) => Mappers.getMapPages(item, lang)),
    ...newsItems.map((item) => Mappers.getMapNews(item, lang, newsCategory)),
    ...articles.flatMap((item) =>
      Mappers.getMapArticle(item, lang, articleCategory),
    ),
    ...insights.map((item) =>
      Mappers.getMapInsight(item, lang, insightCategory),
    ),
    ...stories.map((item) => Mappers.getMapStory(item, lang, storyCategory)),
    ...webinars.map((item) =>
      Mappers.getMapWebinar(item, lang, webinarCategory),
    ),
    ...resourses
      .map((item) => Mappers.getMapResourse(item, lang, resourseCategory))
      .filter(Boolean),
  ];

  return new Response(
    JSON.stringify({
      analyzer: analyzer,
      documents: allDocuments,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
};
