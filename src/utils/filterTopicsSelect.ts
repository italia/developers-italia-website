export const initFilters = () => {
  const container = document.querySelector("#filter-container") as HTMLElement;
  const selectElement = document.querySelector("select") as HTMLSelectElement;
  const sections = document.querySelectorAll(".filter-section");

  if (!container || !selectElement) return;

  const labelForAll = container.dataset.labelForAll?.toLowerCase().trim() || "";

  const updateFilters = (value: string) => {
    const filterSlug = value
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

    sections.forEach((section) => {
      const sectionTopic = section.getAttribute("data-topic");
      const desktopView = section.querySelector(".content-desktop");
      const mobileView = section.querySelector(".content-mobile");

      if (filterSlug === labelForAll) {
        desktopView?.classList.add("d-none", "d-lg-block");
        desktopView?.classList.remove("d-block");

        mobileView?.classList.add("d-block", "d-lg-none");
        mobileView?.classList.remove("d-none");

        section.classList.remove("d-none");
        section.classList.add("d-block");
      } else if (sectionTopic === filterSlug) {
        desktopView?.classList.remove("d-none", "d-lg-block");
        desktopView?.classList.add("d-block");

        mobileView?.classList.remove("d-block", "d-lg-none");
        mobileView?.classList.add("d-none");

        section.classList.remove("d-none");
        section.classList.add("d-block");
      } else {
        section.classList.add("d-none");
        section.classList.remove("d-block");
      }
    });
  };

  // Listener sul cambiamento della select
  selectElement.addEventListener("change", (e) => {
    const target = e.target as HTMLSelectElement;
    updateFilters(target.value);
  });

  // Esecuzione al caricamento (Stato Iniziale)
  updateFilters(selectElement.value);
};
