import type { ImageProps } from "@components/atoms/Image/types";

export type CardEditorialNewsProps = {
  id?: string;
  title: string;
  description: string;
  image?: ImageProps;
  linkTo: string;
  category?: string;
  dateTime?: string;
  action?: string;
  fullHeight?: boolean;
  isExternal?: boolean;
};
