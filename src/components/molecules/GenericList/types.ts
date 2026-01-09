export type GenericListProps = {
  items: GenericListItemProps[];
  label?: string;
  size?: GenericListSizeProps;
  variant?: GenericListVariantProps;
  bordered?: boolean;
  titleSize?: GenericListTitleSizeProps;
};

export type GenericListItemProps = {
  text: string;
  subtext?: string;
  avatar?: string;
  icon?: string;
  iconRight?: string;
  linkTo?: string;
};

export type GenericListSizeProps = "default" | "bold" | "small";
export type GenericListVariantProps = "light" | "dark";
export type GenericListTitleSizeProps = "default" | "large";
