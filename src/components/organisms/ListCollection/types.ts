import type { CardEditorialNewsProps } from "@components/molecules/CardEditorialNews/types";
import type { SectionBackground } from "@utils/background";

export type ListCollectionProps = {
  background?: SectionBackground;
  title: string;
  items: CardEditorialNewsProps[];
};
