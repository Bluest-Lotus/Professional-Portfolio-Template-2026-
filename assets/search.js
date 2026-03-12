// Simple client-side search for titles only
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("search");
  if (!input) return;

  input.addEventListener("input", () => {
    const query = input.value.toLowerCase();
    const items = document.querySelectorAll(".card");

    items.forEach(card => {
      const title = card.innerText.toLowerCase();
      card.style.display = title.includes(query) ? "block" : "none";
    });
  });
});