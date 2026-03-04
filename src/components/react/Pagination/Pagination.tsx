import type { SiteLocale } from "@graphql/types";
import { getI18n } from "@i18n/microcopy";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  lang: SiteLocale;
};

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  lang,
}: PaginationProps) {
  if (totalPages <= 1) return null;
  const t = getI18n(lang);

  return (
    <nav aria-label={t["nav.pagination"]}>
      <ul className="pagination justify-content-center pt-5">
        <li className="page-item">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label={t["nav.prev"]}
            className="page-link"
          >
            &laquo;
          </button>
        </li>
        {Array.from({ length: totalPages }, (_, idx) => (
          <li key={idx} className="page-item">
            <button
              onClick={() => onPageChange(idx + 1)}
              aria-current={currentPage === idx + 1 ? "page" : undefined}
              className={`page-link ${currentPage === idx + 1 ? "active" : ""}`}
            >
              {idx + 1}
            </button>
          </li>
        ))}
        <li className="page-item">
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label={t["nav.next"]}
            className="page-link"
          >
            &raquo;
          </button>
        </li>
      </ul>
    </nav>
  );
}
