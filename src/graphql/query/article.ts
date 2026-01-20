import { TagFragment } from "@graphql/commonFragments";
import { graphql } from "@graphql/graphql";
import { ArticleContentFragment } from "@graphql/templateFragments";

export const AllArticlesContentQuery = graphql(
  `
    query AllArticlesContentQuery {
      allArticles {
        id
        locales: _locales
        allContentLocales: _allContentLocales {
          locale
          value {
            ...ArticleContentFragment
          }
        }
      }
    }
  `,
  [ArticleContentFragment],
);

export const ArticleSeoQuery = graphql(
  `
    query ArticleSeoQuery($id: ItemId!, $locale: SiteLocale!) {
      article(filter: { id: { eq: $id } }, locale: $locale) {
        seo: _seoMetaTags {
          ...TagFragment
        }
      }
    }
  `,
  [TagFragment],
);
