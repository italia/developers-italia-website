import { graphql } from "../graphql/graphql";
import { TagFragment, LocaleFragment } from "../graphql/commonFragments";

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
        title
        slug
        seo: _seoMetaTags(locale: $locale) {
          ...TagFragment
        }
      }
    }
  `,
  [TagFragment],
);
