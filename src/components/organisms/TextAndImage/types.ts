import type { SectionBackground } from "@utils/background";

export type TextAndImageProps = {
  background?: SectionBackground;
  variant?: VariantTextAndImageProps;
  sectionTitleId?: string;
};

export type VariantTextAndImageProps = "variant-1" | "variant-2" | "variant-3";
