import { graphql } from "@graphql/graphql";
import {
  TagFragment,
  LocaleFragment,
  SidebarFragment,
} from "@graphql/commonFragments";
import {
  AllArticlesFragment,
  AllArticlesSlugFragment,
  AllPagesSlugFragment,
  HomepageModelContentFragment,
  PageContentFragment,
} from "@graphql/templateFragments";
import { FooterFragment, HeaderFragment } from "@graphql/sectionFragments";

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
      homepage {
        id
        locales: _locales
      }
    }
  `,
  [AllArticlesSlugFragment, AllPagesSlugFragment],
);
