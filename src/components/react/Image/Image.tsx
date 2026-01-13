import type { ImageProps } from "@components/atoms/Image/types";

export function Image({ url, alt, title, width, height }: ImageProps) {
  if (!width || !height) {
    return null;
  }

  const targetWidths = [480, 720, 1024];
  const responsiveWidths = targetWidths.filter((w) => w <= width);

  if (!responsiveWidths.includes(width)) {
    responsiveWidths.push(width);
  }

  const srcset = responsiveWidths
    .map((w) => `${url}?w=${w}&auto=format&fit=max ${w}w`)
    .join(", ");

  return (
    <img
      src={`${url}?w=${width}&auto=format`}
      srcSet={srcset}
      sizes="(max-width: 1024px) 100vw, 1024px"
      alt={alt || ""}
      title={title || ""}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
    />
  );
}
