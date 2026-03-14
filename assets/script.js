// Dark mode toggle
function toggleDark() {
  document.body.classList.toggle("dark");
  localStorage.setItem("dark", document.body.classList.contains("dark"));
}

if (localStorage.getItem("dark") === "true") {
  document.body.classList.add("dark");
}

// Load Markdown content
async function loadContent(path, target) {
  const res = await fetch(path);
  const text = await res.text();
  const html = marked.parse(text);
  document.querySelector(target).innerHTML = html;
}

// Tag filtering
function filterByTag(tag) {
  document.querySelectorAll(".item").forEach(item => {
    const tags = item.dataset.tags.split(",");
    item.style.display = tags.includes(tag) ? "block" : "none";
  });
}