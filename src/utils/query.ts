import { graphql } from "@graphql/graphql";
import {
  TagFragment,
  LocaleFragment,
  SidebarFragment,
  NewsItemFragment,
  StoryItemFragment,
  WebinarItemFragment,
  ResourceFragment,
} from "@graphql/commonFragments";
import {
  AllArticlesFragment,
  AllInsightsFragment,
  AllStoryItemsFragment,
  AllWebinarItemsFragment,
  HomepageModelContentFragment,
  CatalogueContentFragment,
  PageContentFragment,
} from "@graphql/templateFragments";
import { FooterFragment, HeaderFragment } from "@graphql/sectionFragments";
import {
  AllArticlesSlugFragment,
  AllCataloguesSlugFragment,
  AllInsightsSlugFragment,
  AllPagesSlugFragment,
  AllStoryItemsSlugFragment,
  AllWebinarItemsSlugFragment,
  HomepageFragment,
} from "@graphql/slugFragments";

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
    }
  `,
  [FooterFragment, HeaderFragment],
);

export const HomepageQuery = graphql(
  `
    query HomepageQuery($locale: SiteLocale!) {
      homepage(locale: $locale) {
        id
        title
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
    LocaleFragment,
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
