export type LinkProps = {
  label: string;
  linkTo?: string;
  url?: string;
  download?: string;
  openInNewTab?: boolean;
  variant?: "dark" | "light";
  titleIcon?: string;
  active?: boolean;
  disabled?: boolean;
  iconPosition?: "left" | "right";
  isIcon?: boolean;
};
