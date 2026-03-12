// Theme toggle
(function () {
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;

  const stored = localStorage.getItem("theme");
  if (stored) root.setAttribute("data-theme", stored);

  const updateUI = () => {
    const theme = root.getAttribute("data-theme") || "light";
    toggle.querySelectorAll("span").forEach((el) => el.classList.remove("active"));
    toggle.querySelector(theme === "dark" ? ".dark-label" : ".light-label").classList.add("active");
  };

  updateUI();

  toggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", current);
    localStorage.setItem("theme", current);
    updateUI();
  });
})();

// Simple search + tag filter for projects
(function () {
  const search = document.getElementById("project-search");
  const filterButtons = document.querySelectorAll("[data-filter-tag]");
  const cards = document.querySelectorAll("[data-project-card]");

  if (!search && !filterButtons.length) return;

  let activeTag = "all";

  const applyFilter = () => {
    const query = (search?.value || "").toLowerCase();
    cards.forEach((card) => {
      const title = card.getAttribute("data-title") || "";
      const tags = card.getAttribute("data-tags") || "";
      const matchesText = title.toLowerCase().includes(query) || tags.toLowerCase().includes(query);
      const matchesTag = activeTag === "all" || tags.split(",").includes(activeTag);
      card.style.display = matchesText && matchesTag ? "block" : "none";
    });
  };

  search?.addEventListener("input", applyFilter);

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeTag = btn.getAttribute("data-filter-tag");
      applyFilter();
    });
  });
})();