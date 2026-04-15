type SelectProps = {
  categories: string[];
  selectedCategory: string;
  filterTitle: string;
  onCategoryChange: (value: string) => void;
};

export function Select({
  categories,
  selectedCategory,
  filterTitle,
  onCategoryChange,
}: SelectProps) {
  return (
    <div className="it-list-wrapper d-flex flex-column">
      <label
        htmlFor="categorySelect"
        id="filterPagination"
        className="it-label text-dark mt-1 fw-semibold"
      >
        {filterTitle}
      </label>

      <div className="select-wrapper mt-2">
        <select
          id="categorySelect"
          className="custom-select-filter"
          aria-labelledby="filterPagination"
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
