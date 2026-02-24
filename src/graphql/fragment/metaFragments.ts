import { TagFragment } from "@graphql/fragment/commonFragments";
import { graphql, type FragmentOf } from "@graphql/graphql";

export const SeoMetaFragment = graphql(
  `
    fragment SeoMetaFragment on RecordInterface @_unmask {
      seo: _seoMetaTags {
        ...TagFragment
      }
    }
  `,
  [TagFragment],
);

export const PageLocalesFragment = graphql(
  `
    fragment PageLocalesFragment on PageRecord @_unmask {
      allSlugLocales: _allSlugLocales {
        locale
        value
      }
      allTitleLocales: _allTitleLocales {
        locale
        value
      }
    }
  `,
  [],
);

export type PageLocalesFragmentType = FragmentOf<typeof PageLocalesFragment>;

export const CatalogueLocalesFragment = graphql(
  `
    fragment CatalogueLocalesFragment on CatalogueRecord @_unmask {
      allSlugLocales: _allSlugLocales {
        locale
        value
      }
      allTitleLocales: _allTitleLocales {
        locale
        value
      }
    }
  `,
  [],
);

export type CatalogueLocalesFragmentType = FragmentOf<
  typeof CatalogueLocalesFragment
>;

export const ArticleLocalesFragment = graphql(
  `
    fragment ArticleLocalesFragment on ArticleRecord @_unmask {
      allSlugLocales: _allSlugLocales {
        locale
        value
      }
      allTitleLocales: _allTitleLocales {
        locale
        value
      }
    }
  `,
  [],
);

export const InsightLocalesFragment = graphql(
  `
    fragment InsightLocalesFragment on InsightRecord @_unmask {
      allSlugLocales: _allSlugLocales {
        locale
        value
      }
      allTitleLocales: _allTitleLocales {
        locale
        value
      }
      allTopicLocales: _allTopicLocales {
        locale
        value {
          label
        }
      }
    }
  `,
  [],
);

export const StoryItemLocalesFragment = graphql(
  `
    fragment StoryItemLocalesFragment on StoryItemRecord @_unmask {
      allSlugLocales: _allSlugLocales {
        locale
        value
      }
      allTitleLocales: _allTitleLocales {
        locale
        value
      }
    }
  `,
  [],
);

export const WebinarItemLocalesFragment = graphql(
  `
    fragment WebinarItemLocalesFragment on WebinarItemRecord @_unmask {
      allSlugLocales: _allSlugLocales {
        locale
        value
      }
      allTitleLocales: _allTitleLocales {
        locale
        value
      }
    }
  `,
  [],
);
