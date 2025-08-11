import { graphql } from "../graphql/graphql";

export const TagFragment = graphql(`
  fragment TagFragment on Tag @_unmask {
    tag
    attributes
    content
  }
`);

export const LocaleFragment = graphql(`
  fragment LocaleFragment on StringNonNullMultiLocaleField @_unmask {
    locale
    value
  }
`);
