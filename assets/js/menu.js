// Mobile menu toggle
document.querySelector(".mobile")?.addEventListener("click", function () {
  document.getElementById("mobileMenu").classList.toggle("open");
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href").slice(1);
    const section = document.getElementById(id);
    if (section) {
      e.preventDefault();
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

(function () {
  const btn = document.getElementById("hamburgerBtn");
  const menu = document.getElementById("mobileMenu");
  const openIcon = btn.querySelector('[data-icon="open"]');
  const closeIcon = btn.querySelector('[data-icon="close"]');

  function toggle(force) {
    const isOpen =
      typeof force === "boolean" ? force : menu.classList.contains("hidden");
    menu.classList.toggle("hidden", !isOpen);
    document.body.classList.toggle("overflow-hidden", isOpen); // กันหน้าเลื่อนตอนเปิดเมนู
    btn.setAttribute("aria-expanded", isOpen);
    openIcon.classList.toggle("hidden", isOpen);
    closeIcon.classList.toggle("hidden", !isOpen);
  }

  btn.addEventListener("click", () => toggle());
  menu.addEventListener("click", (e) => {
    if (e.target.matches("a")) toggle(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") toggle(false);
  });
})();
