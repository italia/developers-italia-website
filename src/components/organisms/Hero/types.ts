import type { ButtonVariantProps } from "@components/atoms/Button/types";
import type { ImageProps } from "@components/atoms/Image/types";
import type { SectionBackgroundHero } from "@utils/background";

export type HeroProps = {
  title: string;
  image?: ImageProps;
  imageMobile?: ImageProps;
  paragraph?: string;
  showBreadcrumb?: boolean;
  variant?: HeroVariantProps;
  backgroundColor?: SectionBackgroundHero;
  bgClass?: string;
  labelButton?: string;
  linkTo?: string;
  variantButton?: ButtonVariantProps;
  openInNewTab?: boolean;
};

export type HeroSizeProps = "xsmall" | "small" | "default";
export type HeroVariantProps =
  | "default"
  | "small"
  | "xsmall-full"
  | "xsmall-compact";
