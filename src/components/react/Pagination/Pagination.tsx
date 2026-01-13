type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <nav aria-label="Pagination">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
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
            aria-label="Next page"
            className="page-link"
          >
            &raquo;
          </button>
        </li>
      </ul>
    </nav>
  );
}
