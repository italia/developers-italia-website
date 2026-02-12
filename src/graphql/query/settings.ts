import { LocaleFragment, TagFragment } from "@graphql/fragment/commonFragments";
import { CatalogueIndexingFragment } from "@graphql/fragment/indexing";
import {
  AllArticlesSlugFragment,
  AllCataloguesSlugFragment,
  AllInsightsSlugFragment,
  AllPagesSlugFragment,
  AllStoryItemsSlugFragment,
  AllWebinarItemsSlugFragment,
  HomepageFragment,
  SearchFragment,
} from "@graphql/fragment/slugFragments";
import { graphql } from "@graphql/graphql";

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

export const AllGlobalSettingsQuery = graphql(
  `
    query AllGlobalSettings {
      globalSetting {
        _allAriaLabelCardActionLocales {
          ...LocaleFragment
        }
        _allAnalyzerLocales {
          ...LocaleFragment
        }
        _allAriaLabelCardCategoryLocales {
          ...LocaleFragment
        }
        _allAriaLabelDownloadLinkLocales {
          ...LocaleFragment
        }
        _allAriaLabelExternalLinkLocales {
          ...LocaleFragment
        }
        _allAriaLabelInternalLinkLocales {
          ...LocaleFragment
        }
        _allAriaLabelLogoLocales {
          ...LocaleFragment
        }
        _allLabelCtaLocales {
          ...LocaleFragment
        }
        _allChipTopicLabelLocales {
          ...LocaleFragment
        }
        _allLanguageSelectorLocales {
          ...LocaleFragment
        }
        _allLastUpdateLabelLocales {
          ...LocaleFragment
        }
        _allLoadingLocales {
          ...LocaleFragment
        }
        _allSiteNameLocales {
          ...LocaleFragment
        }
      }
    }
  `,
  [LocaleFragment],
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
      allCatalogues {
        ...CatalogueIndexingFragment
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
    CatalogueIndexingFragment,
  ],
);
