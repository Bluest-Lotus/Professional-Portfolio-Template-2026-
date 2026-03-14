function filterByTag(tag) {
  document.querySelectorAll(".item").forEach(item => {
    const tags = item.dataset.tags.split(",");
    item.style.display = tags.includes(tag) ? "block" : "none";
  });
}