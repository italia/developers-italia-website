import type {
  SizeChipProps,
  VariantChipProps,
} from "@components/atoms/Chip/types";

export type TopicsProps = {
  title?: string;
  topics: string[];
  variant?: "row" | "column";
  disabled?: boolean;
  variantChip?: VariantChipProps;
  sizeChip?: SizeChipProps;
};
