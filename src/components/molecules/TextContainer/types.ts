export type TextContainerProps = {
  title: string;
  paragraph: string;
  variant?: TextContainerVariant;
  labelButton?: string;
  linkTo?: string;
};

export type TextContainerVariant = "light" | "dark" | "primary";
