import type { CardEditorialNewsProps } from "@components/molecules/CardEditorialNews/types";

export type TopicFilterProps = {
  title: string;
  paragraph: string;
  filterTitle: string;
  labelForAll: string;
  contentCollection: ContentCollectionProps[];
};

export type ContentCollectionProps = {
  topicSlug: string;
  title: string;
  paragraph?: string;
  items: CardEditorialNewsProps[];
};
