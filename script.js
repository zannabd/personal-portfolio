// ...existing code...
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("aside button");
  const sections = document.querySelectorAll("main section");

  // Hide all sections except the first one on initial load
  sections.forEach((section, index) => {
    if (index !== 0) {
      section.style.display = "none";
    }
  });
  buttons[0].classList.add("active");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const sectionId = button.textContent.toLowerCase().replace(/\s+/g, "-");
      const targetSection = document.getElementById(sectionId);

      if (targetSection) {
        // Hide all sections
        sections.forEach((section) => {
          section.style.display = "none";
        });

        // Show target section
        targetSection.style.display = "block";
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Update active button state
        buttons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
      }
    });
  });

  // set footer year (ensure element is present after DOM loaded)
  const _yearEl = document.getElementById("year");
  if (_yearEl) {
    _yearEl.textContent = new Date().getFullYear();
  }

  // Scroll-to-top floating button behavior
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (scrollBtn) {
    const THRESHOLD = 200; // show button after this many px
    const updateVisibility = () => {
      if (window.scrollY > THRESHOLD) {
        scrollBtn.classList.add("visible");
      } else {
        scrollBtn.classList.remove("visible");
      }
    };

    // initial state + listener
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    // click handler (also supports keyboard activation)
    scrollBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
// ...existing code...

// make scrollToTop available for inline onclick in HTML
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
