import type { ChangeEvent } from "react";
export type SearchBarProps = {
  labelButton: string;
  inputPlaceholder: string;
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
};

export function SearchBar({
  value,
  handleChange,
  handleClick,
  labelButton,
  inputPlaceholder,
}: SearchBarProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleClick();
  };
  return (
    <form id="searchForm" onSubmit={handleSubmit}>
      <div className="d-flex flex-column align-items-center flex-sm-row w-100">
        <div className="form-group mb-0 flex-grow-1 me-sm-4 w-100">
          <label className="active" htmlFor="searchInput">
            {labelButton}
          </label>
          <input
            type="search"
            className="form-control form-control-lg rounded-0"
            name="search"
            id="searchInput"
            placeholder={inputPlaceholder}
            autoComplete="off"
            minLength={3}
            required
            value={value}
            onChange={handleChange}
          />
        </div>
        <div className="button-wrapper mt-4 mt-sm-0">
          <button type="submit" className="btn btn-primary btn-icon">
            <span>{labelButton}</span>
            <svg role="img" className="icon ms-1 icon-white icon-search">
              <use href="/bsi-svg/sprites.svg#it-search"></use>
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
}
