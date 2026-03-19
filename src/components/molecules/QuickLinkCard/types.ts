import type { SectionBackground } from "@utils/background";
import type { ListLinkItemProps } from "../ListLink/types";

export type QuickLinkCardProps = {
  title?: string;
  links: ListLinkItemProps[];
  background?: SectionBackground;
};
