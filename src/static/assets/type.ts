export type Props = {
  size?: "xs" | "sm" | "lg" | "xl";
  padded?: boolean;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "white";
  class?: string;
  title?: string;
};
