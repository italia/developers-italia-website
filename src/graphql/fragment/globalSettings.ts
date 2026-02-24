import { graphql, type FragmentOf } from "@graphql/graphql";
import { ImageFragment } from "./commonFragments";

export const ErrorRecordFragment = graphql(
  `
    fragment ErrorRecordFragment on GlobalSettingRecord @_unmask {
      _allTitleLocales {
        locale
        value
      }
      _allParagraphLocales(markdown: true) {
        locale
        value
      }
      image {
        ...ImageFragment
      }
      _allLabelCtaLocales {
        locale
        value
      }
    }
  `,
  [ImageFragment],
);

export type ErrorRecordFragmentType = FragmentOf<typeof ErrorRecordFragment>;
