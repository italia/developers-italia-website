import { TagFragment } from "@graphql/commonFragments";
import { graphql } from "@graphql/graphql";
import { WebinarContentFragment } from "@graphql/templateFragments";

export const AllWebinarsContentQuery = graphql(
  `
    query AllWebinarsContentQuery {
      allWebinarItems {
        id
        locales: _locales
        allContentLocales: _allContentLocales {
          locale
          value {
            ...WebinarContentFragment
          }
        }
      }
    }
  `,
  [WebinarContentFragment],
);

export const WebinarSeoQuery = graphql(
  `
    query WebinarSeoQuery($id: ItemId!, $locale: SiteLocale!) {
      webinarItem(filter: { id: { eq: $id } }, locale: $locale) {
        seo: _seoMetaTags {
          ...TagFragment
        }
      }
    }
  `,
  [TagFragment],
);
