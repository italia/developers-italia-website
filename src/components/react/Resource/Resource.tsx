export type ResourceProps = {
  category: string;
  title: string;
  description: string;
  url: string;
  download?: boolean;
};

export function Resource({
  title,
  category,
  description,
  url,
  download,
}: ResourceProps) {
  const icon = download ? "it-download" : "it-external-link";

  return (
    <>
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
      </a>
      <span className={`ms-3 badge bg-secondary text-uppercase`}>
        {category}
      </span>
      <p>{description}</p>
    </>
  );
}
