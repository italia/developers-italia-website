import type { SearchResult } from "@graphql/types";

type SearchResultItemProps = {
  result: SearchResult;
  ariaLabelExternalLink?: string;
  ariaLabelDownloadLink?: string;
  ariaLabelInternalLink?: string;
};

export const SearchResultItem = ({
  result,
  ariaLabelExternalLink,
  ariaLabelDownloadLink,
  ariaLabelInternalLink,
}: SearchResultItemProps) => {
  const url = result.internalLink || result.externalLink || result.downloadLink;
  const icon = result.downloadLink
    ? "it-download"
    : result.externalLink
      ? "it-external-link"
      : "it-arrow-right";

  const ariaLabelLink = result.downloadLink
    ? `${ariaLabelDownloadLink} ${result.title}`
    : result.externalLink
      ? `${ariaLabelExternalLink} ${result.title}`
      : `${ariaLabelInternalLink} ${result.title}`;

  return (
    <div className="p-2">
      <a
        className={`d-inline-flex align-items-center h6 gap-2`}
        href={url}
        // target="_blank"
        // rel="noopener noreferrer"
        download={!!result.downloadLink}
      >
        <span className="fw-semibold">{result.title}</span>
        <svg className="icon icon-sm icon-primary">
          <use href={`/bsi-svg/sprites.svg#${icon}`} />
        </svg>
        <span className="visually-hidden">{ariaLabelLink}</span>
      </a>
      {result.category &&
        result.category.split(",").map((cat, index) => {
          const trimmedCat = cat.trim();
          return trimmedCat ? (
            <span
              key={index}
              className="mb-2 mb-md-0 mt-2 mt-md-0 ms-lg-3 badge bg-secondary text-uppercase"
            >
              {trimmedCat}
            </span>
          ) : null;
        })}
      <p className="fs-6">{result.description}</p>
    </div>
  );
};
