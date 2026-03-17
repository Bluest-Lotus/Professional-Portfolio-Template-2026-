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
async function loadIndex(folder, containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const list = await fetch(`/Professional-Portfolio-Template-2026-/content/${folder}/projects.json`)
    .then(r => r.json());

  for (const file of list) {
    const mdPath = `/Professional-Portfolio-Template-2026-/content/${folder}/${file}`;
    const md = await fetch(mdPath).then(r => r.text());

    const meta = {};
    const fm = md.match(/---([\s\S]*?)---/);
    if (fm) {
      fm[1].trim().split("\n").forEach(line => {
        const [key, ...rest] = line.split(":");
        meta[key.trim()] = rest.join(":").trim();
      });
    }

    const card = document.createElement("div");
    card.className = "card item";
    card.dataset.tags = meta.tags || "";

    card.innerHTML = `
      <h3><a href="/Professional-Portfolio-Template-2026-/view.html?path=${mdPath}">${meta.title}</a></h3>
      <p>${meta.description || ""}</p>
    `;

    container.appendChild(card);
  }
}
function filterByTag(tag) {
  document.querySelectorAll(".item").forEach(item => {
    const tags = item.dataset.tags.split(",").map(t => t.trim());
    item.style.display = tags.includes(tag) ? "block" : "none";
  });
}