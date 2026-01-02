import type { ChipLinkProps } from "@components/atoms/Chip/types";
import type { LinkProps } from "@components/atoms/Link/types";

export type FooterLogoProps = {
  label: string;
  icon?: string;
  linkTo: string;
  ariaLabel?: string;
};

export type FooterSmallPrintsProps = {
  labelVisualHidden: string;
  links: LinkProps[];
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
  items: FooterLogoProps[];
};
