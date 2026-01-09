import type { ButtonSizeProps, ButtonVariantProps } from "./types";

export function getButtonClasses(
  variant: ButtonVariantProps,
  size: ButtonSizeProps,
  hasIcon: boolean,
) {
  const sizeMap: Record<ButtonSizeProps, string> = {
    mini: "btn-xs",
    small: "btn-sm",
    large: "btn-lg",
  };

  const variantMap: Record<ButtonVariantProps, string> = {
    light: "btn-primary",
    "outline-light": "btn-outline-primary",
    dark: "btn-light text-primary",
    "outline-dark": "border border-2 text-white border-white",
    link: "text-uppercase text-primary",
  };

  const className = `btn ${variantMap[variant]} ${sizeMap[size]} ${hasIcon ? "btn-icon" : ""}`;

  const colorIcon =
    variant === "outline-dark" || variant === "light"
      ? "icon-white"
      : "icon-primary";

  return { className, colorIcon };
}
