import type { SectionBackground } from "@utils/background";

export type TabItemProps = {
  id: string;
  label: string;
  active?: boolean;
  disabled?: boolean;
};

export type TabsProps = {
  id: string;
  items: TabItemProps[];
  background?: SectionBackground;
};
