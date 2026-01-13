import { Chip } from "@components/react/Chip";
import type { ImageProps } from "@components/atoms/Image/types";
import { Image } from "@components/react/Image";
import { DateTime } from "@components/react/DateTime";

export type CardEditorialInlineMiniProps = {
  title: string;
  description: string;
  image: ImageProps;
  linkTo: string;
  category?: string | null;
  dateTime?: string | null;
  lang: string;
};

export function CardEditorialInlineMini({
  title,
  description,
  image,
  linkTo,
  category,
  dateTime,
  lang,
}: CardEditorialInlineMiniProps) {
  const shouldShowFooter = !!category || !!dateTime;

  return (
    <article className="it-card it-card-inline it-card-inline-mini it-card-image rounded shadow-sm border">
      <div className="it-card-inline-content">
        <h3 className="it-card-title h4">
          <a href={linkTo}>{title}</a>
        </h3>
        {description && (
          <div className="it-card-body">
            <p className="it-card-text">{description}</p>
          </div>
        )}
        {shouldShowFooter && (
          <footer className="it-card-related it-card-footer">
            {category && (
              <div className="it-card-taxonomy">
                <Chip label={category} visuallyHidden="" disabled />
              </div>
            )}
            {dateTime && (
              <DateTime className="it-card-date" value={dateTime} lang={lang} />
            )}
          </footer>
        )}
      </div>
      <div className="it-card-image-wrapper">
        <div className="ratio ratio-1x1">
          <figure className="figure img-full">
            <Image {...image} />
          </figure>
        </div>
      </div>
    </article>
  );
}
