export const initFilters = () => {
  const container = document.querySelector("#filter-container") as HTMLElement;
  const sections = document.querySelectorAll(".filter-section");

  if (!container) return;

  const labelForAll = container.dataset.labelForAll?.toLowerCase().trim() || "";

  const buttons = container.querySelectorAll("button");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const labelSpan = btn.querySelector(".chip-label");
      if (!labelSpan) return;

      const filterText = labelSpan.textContent.trim();
      const filterSlug = filterText
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");

      sections.forEach((section) => {
        const sectionTopic = section.getAttribute("data-topic");

        if (filterSlug === labelForAll || sectionTopic === filterSlug) {
          section.classList.remove("d-none");
          section.classList.add("d-flex");
        } else {
          section.classList.add("d-none");
          section.classList.remove("d-flex");
        }
      });

      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
};
