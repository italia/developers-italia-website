import "./style.scss";

type ChipProps = {
  label: string;
  visuallyHidden: string;
  disabled?: boolean;
  active?: boolean;
  variant?: "primary" | "standard" | "outline-white";
  size?: "default" | "large";
  onClick?: () => void;
};

const sizeMap = {
  default: "",
  large: "chip-lg",
};

const variantMap = {
  standard: "",
  "outline-white": "chip-outline-white",
  primary: "chip-primary",
};

export function Chip({
  label,
  visuallyHidden,
  variant = "standard",
  disabled = false,
  size = "default",
  active = false,
  onClick,
}: ChipProps) {
  const sizeClass = sizeMap[size];
  const chipVariant = variantMap[variant];
  const disabledClass = disabled ? "chip-disabled" : "";
  const className = [
    "chip",
    "chip-simple",
    chipVariant,
    disabledClass,
    sizeClass,
    active ? "active" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button disabled={disabled} className={className} onClick={onClick}>
      <span className="visually-hidden">{visuallyHidden}</span>
      <span className="chip-label">{label}</span>
    </button>
  );
}
