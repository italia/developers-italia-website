import type { ImageProps } from "@components/atoms/Image/types";

export type SupportCTASectionProps = {
  title: string;
  paragraph: string;
  labelButton?: string;
  linkTo?: string;
  image: ImageProps;
  background?: SupportCTASectionBackgroundProps;
  size?: SupportCTASectionSizeProps;
  openInNewTab?: boolean;
};

export type SupportCTASectionBackgroundProps = "lighter" | "default";
export type SupportCTASectionSizeProps = "default" | "small";
