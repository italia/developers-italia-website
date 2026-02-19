export type SectionBackground = "default" | "primary" | "dark" | "lighter";
export type SectionBackgroundHero = "default" | "primary" | "lighter";

const BACKGROUND_COLOR_MAP: Record<SectionBackground, string> = {
  default: "it-section-bg-default dark",
  primary: "it-section-bg-primary",
  dark: "it-section-bg-dark",
  lighter: "it-section-bg-light dark",
};

const BACKGROUND_HERO_COLOR_MAP: Record<SectionBackgroundHero, string> = {
  default: "it-section-bg-default dark",
  primary: "it-section-bg-primary",
  lighter: "it-section-bg-light dark",
};

export const getSectionBgClass = (
  bg: SectionBackground = "default",
): string => {
  return BACKGROUND_COLOR_MAP[bg];
};

export const getHeroBgClass = (
  bg: SectionBackgroundHero = "default",
): string => {
  return BACKGROUND_HERO_COLOR_MAP[bg];
};
