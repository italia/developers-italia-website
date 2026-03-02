import type { ImageProps } from "@components/atoms/Image/types";
import { Chip } from "@components/react/Chip";
import { DateTime } from "@components/react/DateTime";
import { Image } from "@components/react/Image";
import type { SiteLocale } from "@graphql/types";
import { getI18n } from "@i18n/microcopy";

export type CardEditorialInlineMiniProps = {
  id?: string;
  title: string;
  description: string;
  image: ImageProps;
  linkTo: string;
  category?: string;
  dateTime?: string;
  lang: SiteLocale;
  ariaLabelCardCategory?: string;
};

export function CardEditorialInlineMini({
  id = "",
  title,
  description,
  image,
  linkTo,
  category,
  dateTime,
  lang,
}: CardEditorialInlineMiniProps) {
  const shouldShowFooter = !!category || !!dateTime;
  const cardTitleId = `card-title-${id}`;
  const t = getI18n(lang);

  return (
    <article
      className="it-card it-card-image it-card-height-full rounded shadow-sm border"
      aria-labelledby={cardTitleId}
    >
      <h3 className="it-card-title" id={cardTitleId}>
        <a href={linkTo}>{title}</a>
      </h3>

      <div className="it-card-image-wrapper">
        <div className="ratio ratio-16x9">
          <figure className="figure img-full">
            <Image {...image} />
          </figure>
        </div>
      </div>

      <div className="it-card-body">
        <p className="it-card-text">{description}</p>
      </div>

      {shouldShowFooter && (
        <footer className="it-card-related it-card-footer">
          {category && (
            <div className="it-card-taxonomy">
              <Chip
                label={category}
                visuallyHidden={t["card.topic"]}
                disabled
              />
            </div>
          )}
          {dateTime && (
            <DateTime className="it-card-date" value={dateTime} lang={lang} />
          )}
        </footer>
      )}
    </article>
  );
}
