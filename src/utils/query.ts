import { graphql } from "../graphql/graphql";
import { TagFragment, LocaleFragment } from "../graphql/commonFragments";

export const LocalesQuery = graphql(`
  query Locales {
    site: _site {
      locales
    }
  }
`);