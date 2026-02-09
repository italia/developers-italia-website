import type { ImageProps } from "@components/atoms/Image/types";
import type { TopicsProps } from "@components/molecules/Topics/types";

export type UseCaseCardProps = {
  id?: string;
  title: string;
  paragraph: string;
  linkTo: string;
  image?: ImageProps;
  listTopics?: TopicsProps;
  descriptionTitle?: string;
  description?: string;
  variant?: VariantUseCardProps;
  backgroundColor?: UseCaseCardBackgroundColor;
};

export type VariantUseCardProps = "default" | "big";

export type UseCaseCardBackgroundColor = "light" | "default";
