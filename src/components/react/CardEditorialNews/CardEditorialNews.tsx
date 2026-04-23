import type { ImageProps } from "@components/atoms/Image/types";
import { DateTime } from "@components/react/DateTime";
import { Image } from "@components/react/Image";
import type { SiteLocale } from "@graphql/types";
import { getI18n } from "@i18n/microcopy";

export type CardEditorialNewsProps = {
  id?: string;
  title: string;
  description: string;
  image: ImageProps;
  linkTo: string;
  category?: string;
  dateTime?: string;
  action?: string;
  fullHeight?: boolean;
  lang: SiteLocale;
  isExternal?: boolean;
};

export function CardEditorialNews({
  id = "",
  title,
  description,
  image,
  linkTo,
  category,
  dateTime,
  action,
  fullHeight = true,
  lang,
  isExternal = true,
}: CardEditorialNewsProps) {
  const shouldShowFooter = !!category || !!dateTime;
  const cardTitleId = `card-title-${id}`;
  const t = getI18n(lang);
  const ariaLabel = isExternal ? t["link.external"] : t["link.internal"];
  const target = isExternal ? "_blank" : "_self";
  const rel = isExternal ? "noopener noreferrer" : undefined;

  return (
    <article
      className={`it-card it-card-image ${fullHeight ? "it-card-height-full" : ""} rounded shadow-sm border`}
      aria-labelledby={cardTitleId}
    >
      <h3 className="it-card-title" id={cardTitleId}>
        <a href={linkTo} target={target} rel={rel}>
          {title}
          <span className="visually-hidden">{ariaLabel}</span>
        </a>
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
              <span className="visually-hidden">{t["card.topic"]}</span>
              <p className="it-card-category">{category}</p>
            </div>
          )}
          {dateTime && (
            <DateTime className="it-card-date" value={dateTime} lang={lang} />
          )}
        </footer>
      )}
      {action && <div className="it-card-footer">{action}</div>}
    </article>
  );
}
