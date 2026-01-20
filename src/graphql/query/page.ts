import { TagFragment } from "@graphql/commonFragments";
import { graphql } from "@graphql/graphql";
import { PageContentFragment } from "@graphql/templateFragments";

export const AllPagesContentQuery = graphql(
  `
    query AllPagesContentQuery {
      allPages {
        id
        locales: _locales
        allContentLocales: _allContentLocales {
          locale
          value {
            ...PageContentFragment
          }
        }
      }
    }
  `,
  [PageContentFragment],
);

export const PageSeoQuery = graphql(
  `
    query PageSeoQuery($id: ItemId!, $locale: SiteLocale!) {
      page(filter: { id: { eq: $id } }, locale: $locale) {
        seo: _seoMetaTags {
          ...TagFragment
        }
      }
    }
  `,
  [TagFragment],
);
