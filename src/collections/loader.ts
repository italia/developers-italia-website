import { AllArticlesContentQuery } from "@graphql/query/article";
import {
  AllCataloguesContentQuery,
  LastItemsUpdateQuery,
} from "@graphql/query/catalogue";
import { ErrorPageQuery } from "@graphql/query/errorPage";
import { HomepageQuery } from "@graphql/query/homepage";
import {
  ArticlesIdxQuery,
  CataloguesIdxQuery,
  InsightsIdxQuery,
  NewsIdxQuery,
  PagesIdxQuery,
  ResourcesIdxQuery,
  StoriesIdxQuery,
  WebinarsIdxQuery,
} from "@graphql/query/indexing";
import { AllInsightsContentQuery } from "@graphql/query/insight";
import { LayoutQuery, SidebarQuery } from "@graphql/query/layout";
import { AllNewsQuery } from "@graphql/query/news";
import { AllPagesContentQuery } from "@graphql/query/page";
import { AllResourcesQuery } from "@graphql/query/resource";
import { SearchPageContentQuery } from "@graphql/query/search";
import {
  ArticlesSeoQuery,
  CataloguesSeoQuery,
  HomepageSeoQuery,
  InsightsSeoQuery,
  PagesSeoQuery,
  SearchSeoQuery,
  StoriesSeoQuery,
  WebinarsSeoQuery,
} from "@graphql/query/seo";
import {
  AllGlobalSettingsQuery,
  LocalesQuery,
  SiteMetaTagsQuery,
} from "@graphql/query/settings";
import {
  AllStoriesContentQuery,
  AllStoryCardQuery,
} from "@graphql/query/story";
import {
  AllWebinarQuery,
  AllWebinarsContentQuery,
} from "@graphql/query/webinar";
import { executeAutoPagingQuery, executeQuery } from "@lib/datocms";

export const newsLoader = async () => {
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  const dateLimit = oneYearAgo.toISOString();
  const response = await executeAutoPagingQuery(AllNewsQuery, {
    variables: {
      dateLimit: dateLimit,
    },
  });
  return response?.allNewsItems || [];
};

export const storiesLoader = async () => {
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  const dateLimit = oneYearAgo.toISOString();
  const response = await executeAutoPagingQuery(AllStoryCardQuery, {
    variables: {
      dateLimit: dateLimit,
    },
  });
  return response?.allStoryItems || [];
};

export const webinarsLoader = async () => {
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  const dateLimit = oneYearAgo.toISOString();
  const response = await executeAutoPagingQuery(AllWebinarQuery, {
    variables: {
      dateLimit: dateLimit,
    },
  });
  return response?.allWebinarItems || [];
};

export const resourcesLoader = async () => {
  const response = await executeAutoPagingQuery(AllResourcesQuery);
  return response?.allResources || [];
};

export const globalSettingsLoader = async () => {
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
};

export const pagesLoader = async () => {
  const response = await executeAutoPagingQuery(AllPagesContentQuery);
  return response?.allPages || [];
};

export const homepageLoader = async () => {
  const response = await executeQuery(HomepageQuery);
  return response?.homepage ? [response.homepage] : [];
};

export const searchLoader = async () => {
  const response = await executeQuery(SearchPageContentQuery);
  return response?.search ? [response.search] : [];
};

export const cataloguesLoader = async () => {
  const [cataloguesData, updatesData] = await Promise.all([
    executeAutoPagingQuery(AllCataloguesContentQuery),
    executeQuery(LastItemsUpdateQuery),
  ]);
  const datesRegistry = {
    news: updatesData?.lastNews?.[0]?.publishedAt,
    story: updatesData?.lastStory?.[0]?.publishedAt,
    webinar: updatesData?.lastWebinar?.[0]?.publishedAt,
    resource: updatesData?.lastResource?.[0]?.publishedAt,
  };

  return (
    cataloguesData?.allCatalogues.map((cat: any) => ({
      ...cat,
      datesRegistry: datesRegistry,
    })) || []
  );
};

export const webinarContentLoader = async () => {
  const response = await executeAutoPagingQuery(AllWebinarsContentQuery);
  return response?.allWebinarItems || [];
};

export const storyContentLoader = async () => {
  const response = await executeAutoPagingQuery(AllStoriesContentQuery);
  return response?.allStoryItems || [];
};

export const insightContentLoader = async () => {
  const response = await executeAutoPagingQuery(AllInsightsContentQuery);
  return response?.allInsights || [];
};

export const articleContentLoader = async () => {
  const response = await executeAutoPagingQuery(AllArticlesContentQuery);
  return response?.allArticles || [];
};

export const layoutLoader = async () => {
  const response = await executeQuery(LayoutQuery);
  if (!response?.homepage?.id) return [];
  return [
    {
      id: "layout",
      layout: response?.layout,
      search: response?.search,
      homepageId: response?.homepage?.id,
    },
  ];
};

export const sidebarLoader = async () => {
  const response = await executeQuery(SidebarQuery);
  if (!response?.sidebarForArticle) return [];

  return [
    {
      ...response.sidebarForArticle,
      id: "sidebar",
    },
  ];
};

export const localesLoader = async () => {
  const response = await executeQuery(LocalesQuery);

  if (!response?.site?.locales) return [];

  return [
    {
      id: "site-locales",
      locales: response.site.locales,
    },
  ];
};

export const errorPageLoader = async () => {
  const response = await executeQuery(ErrorPageQuery);

  if (!response?.globalSetting) return [];

  return [
    {
      id: "error-page",
      globalSetting: response.globalSetting,
      homepageId: response.homepage?.id,
    },
  ];
};

export const siteMetaTagsLoader = async () => {
  const response = await executeQuery(SiteMetaTagsQuery);

  if (!response?.site?.faviconMetaTags) return [];

  return [
    {
      id: "site-meta-tags",
      faviconMetaTags: response.site.faviconMetaTags,
    },
  ];
};

export const globalSeoLoader = async () => {
  const localesRes = await executeQuery(LocalesQuery);
  const locales = localesRes?.site?.locales || ["it"];

  const allLocalesResults = await Promise.all(
    locales.map(async (locale) => {
      const [
        homepageRes,
        articlesRes,
        insightsRes,
        cataloguesRes,
        pagesRes,
        storiesRes,
        webinarsRes,
        searchRes,
      ] = await Promise.all([
        executeQuery(HomepageSeoQuery, { variables: { locale } }),
        executeAutoPagingQuery(ArticlesSeoQuery, { variables: { locale } }),
        executeAutoPagingQuery(InsightsSeoQuery, { variables: { locale } }),
        executeAutoPagingQuery(CataloguesSeoQuery, { variables: { locale } }),
        executeAutoPagingQuery(PagesSeoQuery, { variables: { locale } }),
        executeAutoPagingQuery(StoriesSeoQuery, { variables: { locale } }),
        executeAutoPagingQuery(WebinarsSeoQuery, { variables: { locale } }),
        executeAutoPagingQuery(SearchSeoQuery, { variables: { locale } }),
      ]);

      const mapEntry = (record: any) => ({
        id: `${record.id}_${locale}`,
        recordId: record.id,
        locale: locale,
        metaTags: record.metaTags,
        seo: record.seo,
        updatedAt: record.updatedAt,
      });

      return [
        ...(homepageRes?.homepage ? [mapEntry(homepageRes.homepage)] : []),
        ...(articlesRes?.allArticles?.map(mapEntry) || []),
        ...(insightsRes?.allInsights?.map(mapEntry) || []),
        ...(cataloguesRes?.allCatalogues?.map(mapEntry) || []),
        ...(pagesRes?.allPages?.map(mapEntry) || []),
        ...(storiesRes?.allStoryItems?.map(mapEntry) || []),
        ...(webinarsRes?.allWebinarItems?.map(mapEntry) || []),
        ...(searchRes?.search ? [mapEntry(searchRes.search)] : []),
      ];
    }),
  );

  return allLocalesResults.flat();
};

export const allDocumentsLoader = async () => {
  const [
    articlesRes,
    insightsRes,
    storiesRes,
    newsRes,
    webinarsRes,
    resourcesRes,
    cataloguesRes,
    pagesRes,
  ] = await Promise.all([
    executeAutoPagingQuery(ArticlesIdxQuery),
    executeAutoPagingQuery(InsightsIdxQuery),
    executeAutoPagingQuery(StoriesIdxQuery),
    executeAutoPagingQuery(NewsIdxQuery),
    executeAutoPagingQuery(WebinarsIdxQuery),
    executeAutoPagingQuery(ResourcesIdxQuery),
    executeAutoPagingQuery(CataloguesIdxQuery),
    executeAutoPagingQuery(PagesIdxQuery),
  ]);

  return [
    {
      id: "all-documents",
      allArticles: articlesRes.allArticles || [],
      allInsights: insightsRes.allInsights || [],
      allStoryItems: storiesRes.allStoryItems || [],
      allNewsItems: newsRes.allNewsItems || [],
      allWebinarItems: webinarsRes.allWebinarItems || [],
      allResources: resourcesRes.allResources || [],
      allCatalogues: cataloguesRes.allCatalogues || [],
      allPages: pagesRes.allPages || [],
    },
  ];
};
