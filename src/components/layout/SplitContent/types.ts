export type SectionBackground = "default" | "primary" | "dark" | "lighter";
export type SectionAlignItems = "top" | "center";

export type SplitContentProps = {
  leftColumns?: number;
  rightColumns?: number;
  alignItems?: SectionAlignItems;
  background?: SectionBackground;
};
