import type { ImageProps } from "@components/atoms/Image/types";
import type { SectionBackground } from "@components/layout/SplitContent/types";

export type HeroProps = {
  title: string;
  image?: ImageProps;
  imageMobile?: ImageProps;
  paragraph?: string;
  showBreadcrumb?: boolean;
  variant?: HeroVariantProps;
  backgroundColor?: SectionBackground;
};

export type HeroSizeProps = "xsmall" | "small" | "default";
export type HeroVariantProps =
  | "default"
  | "small"
  | "xsmall-full"
  | "xsmall-compact";
