type ButtonSharedProps = {
  label: string;
  icon?: string;
  variant?: ButtonVariantProps;
  size?: ButtonSizeProps;
};

export type ButtonLinkProps = ButtonSharedProps & {
  linkTo: string;
  download?: boolean;
  openInNewTab?: boolean;
};

export type ButtonProps = ButtonSharedProps & {
  id?: string;
};

export type ButtonVariantProps =
  | "light"
  | "dark"
  | "outline-light"
  | "outline-dark"
  | "link";

export type ButtonSizeProps = "mini" | "small" | "large";
