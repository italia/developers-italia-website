import type { SiteLocale } from "@graphql/types";
import { getI18n } from "@i18n/microcopy";

export type ResourceProps = {
  category: string[];
  title: string;
  description: string;
  type: string;
  url: string;
  lang: SiteLocale;
  download?: boolean;
};

export function Resource({
  title,
  description,
  url,
  download,
  type,
  lang,
}: ResourceProps) {
  const icon = download ? "it-download" : "it-external-link";
  const t = getI18n(lang);

  const ariaLabel = download ? t["link.download"] : t["link.external"];

  return (
    <>
      <div className="d-md-flex">
        <a
          className={`d-inline-flex align-items-center gap-2`}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          download={download}
        >
          <span className="fw-semibold">{title}</span>
          <svg className="icon icon-sm icon-primary">
            <use href={`/bsi-svg/sprites.svg#${icon}`} />
          </svg>
          <span className="visually-hidden">{ariaLabel}</span>
        </a>
        <div>
          <div className="mb-2 mb-md-0 mt-2 mt-md-0 ms-lg-3 badge bg-secondary text-uppercase">
            {type}
          </div>
        </div>
      </div>
      <p className="fs-6">{description}</p>
    </>
  );
}
