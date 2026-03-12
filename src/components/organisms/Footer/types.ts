import type { ChipLinkProps } from "@components/atoms/Chip/types";
import type { LinkProps } from "@components/atoms/Link/types";

export type FooterProps = FooterMainProps & {
  brand: FooterBrandProps;
  smallPrints: FooterSmallPrintsProps;
};

export type FooterMainProps = {
  topics: FooterTopicsProps;
  utilities: FooterUtilityProps[];
  mailingListForm?: MailingListFormProps;
};

export type FooterLogoProps = {
  label: string;
  mainLogo: string;
  brandLogo: string;
  linkTo: string;
  ariaLabel?: string;
};

export type FooterSmallPrintsProps = {
  links: LinkProps[];
  showSitemap?: boolean;
};

export type FooterBrandProps = {
  heading: string;
  logos: FooterLogoProps[];
};

export type FooterTopicsProps = {
  title: string;
  items: ChipLinkProps[];
};

export type FooterUtilityProps = {
  title: string;
  socialItems: FooterLinkSupportingBrandProps[];
  linkItems: LinkProps[];
};

export type FooterLinkSupportingBrandProps = {
  icon?: string;
  label: string;
  url: string;
};

export type FooterLinkProps = {
  label: string;
  linkTo?: string;
  url?: string;
  openInNewTab?: boolean;
  variant?: "dark" | "light";
  titleIcon?: string;
  isIcon?: boolean;
};

export type MailingListFormProps = {
  title: string;
  privacyPolicy: FooterLinkProps;
};
