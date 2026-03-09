export type ImageProps = {
  url: string;
  width: number | null;
  height: number | null;
  alt?: string | null;
  title?: string | null;
  loading?: "lazy" | "eager";
};
