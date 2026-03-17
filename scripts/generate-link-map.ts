import {
  ArticlesLinksQuery,
  CataloguesLinksQuery,
  InsightsLinksQuery,
  PagesLinksQuery,
  SingletonLinksQuery,
  StoriesLinksQuery,
  WebinarsLinksQuery,
} from "@graphql/query/settings";
import { executeAutoPagingQuery, executeQuery } from "@lib/datocms";
import {
  getTitle,
  processItemsCategoryPages,
  processItemsNestedPages,
  processItemsPages,
  processItemsTabPages,
  type LocaleMap,
  type SiteMap,
} from "@utils/linkMap/processItems";

import fs from "fs";
import path from "path";

const outputPath = `src/data/linkMap.json`;

async function generateLinkMap() {
  console.log(`Generating link map...`);

  const [
    pagesRes,
    articlesRes,
    insightsRes,
    storiesRes,
    webinarsRes,
    cataloguesRes,
    singletonsRes,
  ] = await Promise.all([
    executeAutoPagingQuery(PagesLinksQuery),
    executeAutoPagingQuery(ArticlesLinksQuery),
    executeAutoPagingQuery(InsightsLinksQuery),
    executeAutoPagingQuery(StoriesLinksQuery),
    executeAutoPagingQuery(WebinarsLinksQuery),
    executeAutoPagingQuery(CataloguesLinksQuery),
    executeQuery(SingletonLinksQuery),
  ]);

  const linkMap: SiteMap = {};
  const home = singletonsRes.homepage;

  if (home) {
    linkMap[home.id] = {} as LocaleMap;
    home.locales.forEach((locale) => {
      linkMap[home.id][locale] = {
        path: `/${locale}`,
        breadcrumb: [],
      };
    });
  }

  const search = singletonsRes.search;

  if (search) {
    linkMap[search.id] = {} as LocaleMap;
    search.locales.forEach((locale) => {
      linkMap[search.id][locale] = {
        path: `/${locale}/${search.allSlugLocales?.find((t) => t.locale === locale)?.value}`,
        breadcrumb: [],
      };
      if (home) {
        linkMap[search.id][locale].breadcrumb.push({
          title: getTitle(home, locale),
          id: home.id,
        });
      }
      linkMap[search.id][locale].breadcrumb.push({
        title: getTitle(search, locale),
        id: search.id,
      });
    });
  }

  const collectionPages = [pagesRes.allPages];

  collectionPages.forEach((collection) =>
    processItemsPages(collection, linkMap, home),
  );

  const collectionNestedPages = [
    articlesRes.allArticles,
    cataloguesRes.allCatalogues,
  ];

  collectionNestedPages.forEach((collection) =>
    processItemsNestedPages(collection, linkMap, home),
  );

  const collectionCategoryPages = [insightsRes.allInsights];

  collectionCategoryPages.forEach((collection) =>
    processItemsCategoryPages(collection, linkMap, home),
  );

  const collectionTabPages = [
    storiesRes.allStoryItems,
    webinarsRes.allWebinarItems,
  ];

  collectionTabPages.forEach((collection) =>
    processItemsTabPages(
      collection,
      linkMap,
      home,
      cataloguesRes.allCatalogues,
    ),
  );

  const fullOutputPath = path.resolve(outputPath);
  if (!fs.existsSync(path.dirname(fullOutputPath))) {
    fs.mkdirSync(path.dirname(fullOutputPath), { recursive: true });
  }

  fs.writeFileSync(fullOutputPath, JSON.stringify(linkMap, null, 2));
  console.log(`Map successfully generated at: ${outputPath}`);
}

async function run() {
  try {
    await generateLinkMap();
    console.log("All link maps generated successfully.");
  } catch (error) {
    console.error("Error generating link maps:", error);
    process.exit(1);
  }
}

run();
