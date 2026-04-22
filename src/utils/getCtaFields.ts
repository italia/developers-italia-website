import type { SiteLocale } from "@graphql/types";
import { DatoBlockModel } from "@utils/cmsMapper";
import { linkResolver } from "@utils/linkResolver";

type BaseCta = {
  componentName: string;
  label: string;
  url?: string;
  linkTo?: {
    id: string;
  };
};

export const getCtaFields = (cta: BaseCta | null, lang: SiteLocale) => {
  const defaultReturn = {
    labelButton: undefined,
    linkTo: undefined,
    openInNewTab: undefined,
  };
  if (!cta) return defaultReturn;

  switch (cta.componentName) {
    case DatoBlockModel.ExternalLink:
      return {
        labelButton: cta.label,
        linkTo: cta.url,
        openInNewTab: true,
      };
    case DatoBlockModel.InternalLink:
      return {
        labelButton: cta.label,
        linkTo: linkResolver(cta.linkTo?.id, lang),
        openInNewTab: false,
      };
    default:
      return defaultReturn;
  }
};
