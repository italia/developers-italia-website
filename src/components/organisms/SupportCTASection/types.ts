import type { ImageProps } from "@components/atoms/Image/types";

export type SupportCTASectionProps = {
  title: string;
  paragraph: string;
  labelButton?: string;
  linkTo?: string;
  image: ImageProps;
  variant?: SupportCTASectionVariantProps;
  size?: SupportCTASectionSizeProps;
};

export type SupportCTASectionVariantProps = "lighter" | "default";
export type SupportCTASectionSizeProps = "default" | "small";
