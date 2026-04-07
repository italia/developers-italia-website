import type { ImageProps } from "@components/atoms/Image/types";

export type CardEditorialStoryProps = {
  id?: string;
  title: string;
  description?: string;
  image?: ImageProps;
  linkTo: string;
  category?: string;
  dateTime?: string;
  ariaLabelCardCategory?: string;
};
