import type { CardEditorialWithIconProps } from "@components/molecules/CardEditorialWithIcon/types";

export type AdditionalContentProps = {
  title?: string;
  variant?: VariantAdditionalContentProps;
  content: CardEditorialWithIconProps[];
};

export type VariantAdditionalContentProps = "dark" | "light";
