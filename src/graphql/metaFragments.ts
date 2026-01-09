import { graphql } from "@graphql/graphql";
import { LocaleFragment, TagFragment } from "./commonFragments";

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
        ...LocaleFragment
      }
      allTitleLocales: _allTitleLocales {
        ...LocaleFragment
      }
    }
  `,
  [LocaleFragment],
);

export const NewsPageLocalesFragment = graphql(
  `
    fragment NewsPageLocalesFragment on NewsPageRecord @_unmask {
      allSlugLocales: _allSlugLocales {
        ...LocaleFragment
      }
      allTitleLocales: _allTitleLocales {
        ...LocaleFragment
      }
    }
  `,
  [LocaleFragment],
);

export const ArticleLocalesFragment = graphql(
  `
    fragment ArticleLocalesFragment on ArticleRecord @_unmask {
      allSlugLocales: _allSlugLocales {
        ...LocaleFragment
      }
      allTitleLocales: _allTitleLocales {
        ...LocaleFragment
      }
    }
  `,
  [LocaleFragment],
);

export const InsightLocalesFragment = graphql(
  `
    fragment InsightLocalesFragment on InsightRecord @_unmask {
      allSlugLocales: _allSlugLocales {
        ...LocaleFragment
      }
      allTitleLocales: _allTitleLocales {
        ...LocaleFragment
      }
    }
  `,
  [LocaleFragment],
);

export const StoryItemLocalesFragment = graphql(
  `
    fragment StoryItemLocalesFragment on StoryItemRecord @_unmask {
      allSlugLocales: _allSlugLocales {
        ...LocaleFragment
      }
      allTitleLocales: _allTitleLocales {
        ...LocaleFragment
      }
    }
  `,
  [LocaleFragment],
);

export const WebinarItemLocalesFragment = graphql(
  `
    fragment WebinarItemLocalesFragment on WebinarItemRecord @_unmask {
      allSlugLocales: _allSlugLocales {
        ...LocaleFragment
      }
      allTitleLocales: _allTitleLocales {
        ...LocaleFragment
      }
    }
  `,
  [LocaleFragment],
);
