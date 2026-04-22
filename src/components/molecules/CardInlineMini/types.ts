import type { ImageProps } from "@components/atoms/Image/types";

export type CardInlineMiniProps = {
  id?: string;
  title: string;
  image?: ImageProps;
  linkTo: string;
  category?: string;
  dateTime?: string;
  ariaLabelCardCategory?: string;
  isExternal?: boolean;
};
