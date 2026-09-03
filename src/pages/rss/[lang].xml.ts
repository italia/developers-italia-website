import rss from "@astrojs/rss";
import StructuredTextRssAdapter from "@components/cms-adapters/datocms/StructuredTextRssAdapter.astro";
import type { SiteLocale } from "@graphql/types";
import { getLocaleValue } from "@utils/getLocaleValue";
import { linkResolver } from "@utils/linkResolver";
import type { APIRoute } from "astro";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getEntry } from "astro:content";

const FEED_TITLE = "Developers Italia news feed";
const FEED_DESCRIPTION: Record<SiteLocale, string> = {
  it: "Ultimi articoli e notizie pubblicati su Developers Italia.",
  en: "Latest articles and news published on Developers Italia.",
};
const MAX_ITEMS = 50;

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

export const GET: APIRoute = async ({ params, site }) => {
  const lang = params.lang as SiteLocale;

  if (!lang) {
    return new Response("Language parameter is missing", { status: 400 });
  }

  const responseCollection = await getEntry("documents", "all-documents");
  const articles = responseCollection?.data.allArticles;

  if (!articles) {
    return new Response("No articles to feed", { status: 400 });
  }

  const localizedArticles = articles
    .filter((article) => article.locales.includes(lang))
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, MAX_ITEMS);

  const container = await AstroContainer.create();

  const items = await Promise.all(
    localizedArticles.map(async (article) => {
      const content = getLocaleValue(article.allContentLocales, lang, null);

      const body = content
        ? await container.renderToString(StructuredTextRssAdapter, {
            props: { block: content },
            locals: { lang, recordId: article.id },
            partial: true,
          })
        : "";

      return {
        title: getLocaleValue(article.allTitleLocales, lang, ""),
        description:
          getLocaleValue(article.allParagraphLocales, lang, "") || "",
        link: linkResolver(article.id, lang),
        pubDate: new Date(article.publishedAt),
        content: body,
      };
    }),
  );

  return rss({
    title: FEED_TITLE,
    description: FEED_DESCRIPTION[lang],
    site: site!,
    items,
    customData: `<language>${lang}</language>`,
  });
};
