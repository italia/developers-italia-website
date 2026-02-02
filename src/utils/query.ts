import {
  LocaleFragment,
  NewsItemFragment,
  ResourceFragment,
  SidebarFragment,
  StoryItemFragment,
  TagFragment,
  WebinarItemFragment,
} from "@graphql/commonFragments";
import { graphql } from "@graphql/graphql";
import {
  FooterFragment,
  HeaderFragment,
  SearchMenuFragment,
} from "@graphql/sectionFragments";
import {
  AllArticlesSlugFragment,
  AllCataloguesSlugFragment,
  AllInsightsSlugFragment,
  AllPagesSlugFragment,
  AllStoryItemsSlugFragment,
  AllWebinarItemsSlugFragment,
  HomepageFragment,
  SearchFragment,
} from "@graphql/slugFragments";
import {
  AllArticlesFragment,
  AllInsightsFragment,
  AllStoryItemsFragment,
  AllWebinarItemsFragment,
  ArticleContentFragment,
  CatalogueContentFragment,
  HomepageModelContentFragment,
  InsightContentFragment,
  PageContentFragment,
  StoryContentFragment,
  WebinarContentFragment,
} from "@graphql/templateFragments";

export const LocalesQuery = graphql(`
  query Locales {
    site: _site {
      locales
    }
  }
`);

export const SiteMetaTagsQuery = graphql(
  `
    query SiteMetaTags {
      site: _site {
        faviconMetaTags {
          ...TagFragment
        }
      }
    }
  `,
  [TagFragment],
);

export const GlobalSettingsQuery = graphql(`
  query GlobalSettings($locale: SiteLocale!) {
    globalSetting(locale: $locale) {
      siteName
      lastUpdateLabel
    }
  }
`);

export const LayoutQuery = graphql(
  `
    query Layout($locale: SiteLocale!) {
      layout(locale: $locale) {
        ...FooterFragment
        ...HeaderFragment
      }
      homepage(locale: $locale) {
        id
      }
      search(locale: $locale) {
        ...SearchMenuFragment
      }
    }
  `,
  [FooterFragment, HeaderFragment, SearchMenuFragment],
);

export const HomepageQuery = graphql(
  `
    query HomepageQuery($locale: SiteLocale!) {
      homepage(locale: $locale) {
        id
        title
        publishedAt: _publishedAt
        seo: _seoMetaTags(locale: $locale) {
          ...TagFragment
        }
        content {
          ...HomepageModelContentFragment
        }
      }
    }
  `,
  [HomepageModelContentFragment, TagFragment],
);

export const AllPagesSlugQuery = graphql(
  `
    query AllPages {
      allPages {
        allSlugLocales: _allSlugLocales {
          ...LocaleFragment
        }
      }
    }
  `,
  [LocaleFragment],
);

export const PageBySlugQuery = graphql(
  `
    query PageBySlug($slug: String!, $locale: SiteLocale!) {
      page(filter: { slug: { eq: $slug } }, locale: $locale) {
        id
        title
        slug
        seo: _seoMetaTags(locale: $locale) {
          ...TagFragment
        }
        content {
          ...PageContentFragment
        }
      }
    }
  `,
  [PageContentFragment, TagFragment],
);

export const AllArticlesQuery = graphql(
  `
    query AllArticles {
      allArticles {
        ...AllArticlesFragment
        publishedAt: _publishedAt
      }
    }
  `,
  [AllArticlesFragment],
);

export const SidebarQuery = graphql(
  `
    query Sidebar($locale: SiteLocale!) {
      sidebarForArticle(locale: $locale) {
        ...SidebarFragment
      }
    }
  `,
  [SidebarFragment],
);

export const AllLinkQuery = graphql(
  `
    query AllLinks {
      allPages {
        ...AllPagesSlugFragment
      }
      allArticles {
        ...AllArticlesSlugFragment
      }
      allInsights {
        ...AllInsightsSlugFragment
      }
      allStoryItems {
        ...AllStoryItemsSlugFragment
      }
      allWebinarItems {
        ...AllWebinarItemsSlugFragment
      }
      allWebinarItems {
        ...AllWebinarItemsSlugFragment
      }
      allCatalogues {
        ...AllCataloguesSlugFragment
      }
      homepage {
        ...HomepageFragment
      }
      search {
        ...SearchFragment
      }
    }
  `,
  [
    AllArticlesSlugFragment,
    AllPagesSlugFragment,
    AllInsightsSlugFragment,
    AllStoryItemsSlugFragment,
    AllWebinarItemsSlugFragment,
    AllCataloguesSlugFragment,
    HomepageFragment,
    SearchFragment,
  ],
);

export const AllInsightsQuery = graphql(
  `
    query allInsights {
      allInsights {
        ...AllInsightsFragment
      }
    }
  `,
  [AllInsightsFragment],
);

export const AllCataloguesQuery = graphql(
  `
    query AllCatalogues {
      allCatalogues {
        id
        locales: _locales
        allSlugLocales: _allSlugLocales {
          ...LocaleFragment
        }
        allContentLocales: _allContentLocales {
          locale
          value {
            ...CatalogueContentFragment
          }
        }
      }
    }
  `,
  [CatalogueContentFragment, LocaleFragment],
);

export const AllNewsQuery = graphql(
  `
    query AllNews {
      allNewsItems {
        ...NewsItemFragment
      }
    }
  `,
  [NewsItemFragment],
);

export const AllStoryQuery = graphql(
  `
    query AllStory {
      allStoryItems {
        ...StoryItemFragment
      }
    }
  `,
  [StoryItemFragment],
);

export const AllWebinarQuery = graphql(
  `
    query AllWebinar {
      allWebinarItems {
        ...WebinarItemFragment
      }
    }
  `,
  [WebinarItemFragment],
);

export const AllStoryItemsQuery = graphql(
  `
    query allStoryItems {
      allStoryItems {
        ...AllStoryItemsFragment
      }
    }
  `,
  [AllStoryItemsFragment],
);

export const AllWebinarItemsQuery = graphql(
  `
    query allWebinarItems {
      allWebinarItems {
        ...AllWebinarItemsFragment
      }
    }
  `,
  [AllWebinarItemsFragment],
);

export const AllResourcesQuery = graphql(
  `
    query AllResources {
      allResources {
        ...ResourceFragment
      }
    }
  `,
  [ResourceFragment],
);

export const PageByIdQuery = graphql(
  `
    query PageById($id: ItemId!, $locale: SiteLocale!) {
      page(filter: { id: { eq: $id } }, locale: $locale) {
        id
        title
        slug
        seo: _seoMetaTags(locale: $locale) {
          ...TagFragment
        }
        content {
          ...PageContentFragment
        }
      }
    }
  `,
  [PageContentFragment, TagFragment],
);

export const CatalogueByIdQuery = graphql(
  `
    query CatalogueById($id: ItemId!, $locale: SiteLocale!) {
      catalogue(filter: { id: { eq: $id } }, locale: $locale) {
        id
        title
        slug
        seo: _seoMetaTags(locale: $locale) {
          ...TagFragment
        }
        content {
          ...CatalogueContentFragment
        }
      }
    }
  `,
  [CatalogueContentFragment, TagFragment],
);

export const ArticleByIdQuery = graphql(
  `
    query ArticleByIdQuery($id: ItemId!, $locale: SiteLocale!) {
      article(filter: { id: { eq: $id } }, locale: $locale) {
        id
        seo: _seoMetaTags {
          ...TagFragment
        }
        content {
          ...ArticleContentFragment
        }
      }
    }
  `,
  [ArticleContentFragment, TagFragment],
);

export const WebinarByIdQuery = graphql(
  `
    query WebinarByIdQuery($id: ItemId!, $locale: SiteLocale!) {
      webinarItem(filter: { id: { eq: $id } }, locale: $locale) {
        id
        seo: _seoMetaTags {
          ...TagFragment
        }
        content {
          ...WebinarContentFragment
        }
      }
    }
  `,
  [WebinarContentFragment, TagFragment],
);

export const InsightByIdQuery = graphql(
  `
    query InsightByIdQuery($id: ItemId!, $locale: SiteLocale!) {
      insight(filter: { id: { eq: $id } }, locale: $locale) {
        id
        seo: _seoMetaTags {
          ...TagFragment
        }
        content {
          ...InsightContentFragment
        }
      }
    }
  `,
  [InsightContentFragment, TagFragment],
);

export const StoryItemByIdQuery = graphql(
  `
    query StoryItemByIdQuery($id: ItemId!, $locale: SiteLocale!) {
      storyItem(filter: { id: { eq: $id } }, locale: $locale) {
        id
        seo: _seoMetaTags {
          ...TagFragment
        }
        content {
          ...StoryContentFragment
        }
      }
    }
  `,
  [StoryContentFragment, TagFragment],
);
