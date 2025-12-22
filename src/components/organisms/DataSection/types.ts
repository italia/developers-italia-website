import type { ChartFragmentType } from "@graphql/commonFragments";
import type { ImageProps } from "@components/atoms/Image/types";
import type { CardEditorialNewsProps } from "@components/molecules/CardEditorialNews/types";
import type { ListItemProps } from "@components/molecules/List/types";
import type { StatisticsBoxProps } from "@components/molecules/StatisticsBox/types";
import type { LinkProps } from "@components/atoms/Link/types";

export type HighlightsProps = {
  title: string;
  paragraph: string;
  image: ImageProps;
  cards?: StatisticsBoxProps[];
};

export type PanelProps = {
  title: string;
  paragraph: string;
  chart?: ChartFragmentType;
  externalLink?: LinkProps;
};

export type ResultProps = {
  title: string;
  paragraph: string;
  items: ListItemProps[];
  label: string;
  news: CardEditorialNewsProps[];
};
