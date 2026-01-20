import { TagFragment } from "@graphql/commonFragments";
import { graphql } from "@graphql/graphql";
import { CatalogueContentFragment } from "@graphql/templateFragments";

export const AllCataloguesContentQuery = graphql(
  `
    query AllCataloguesContentQuery {
      allCatalogues {
        id
        locales: _locales
        allContentLocales: _allContentLocales {
          locale
          value {
            ...CatalogueContentFragment
          }
        }
      }
    }
  `,
  [CatalogueContentFragment],
);

export const CatalogueSeoQuery = graphql(
  `
    query CatalogueSeoQuery($id: ItemId!, $locale: SiteLocale!) {
      catalogue(filter: { id: { eq: $id } }, locale: $locale) {
        seo: _seoMetaTags {
          ...TagFragment
        }
      }
    }
  `,
  [TagFragment],
);
