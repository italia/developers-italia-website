export type BreadcrumbItemProps = {
  linkTo: string;
  label: string;
  id: string;
  active: boolean;
  variant?: VariantBreadcrumbProps;
};

export type BreadcrumbProps = {
  items: BreadcrumbItemProps[];
  variant?: VariantBreadcrumbProps;
};

export type VariantBreadcrumbProps = "dark" | "light";
