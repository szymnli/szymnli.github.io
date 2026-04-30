// ============================================================
// THEME — default light, persisted in localStorage
// ============================================================
const STORAGE_KEY = "theme";
const html = document.documentElement;

function applyTheme(theme) {
    if (theme === "dark") {
        html.setAttribute("data-theme", "dark");
    } else {
        html.removeAttribute("data-theme");
    }
}

// On load: check localStorage, fall back to light
const saved = localStorage.getItem(STORAGE_KEY);
applyTheme(saved === "dark" ? "dark" : "light");

// Button toggle
document.getElementById("themeToggle").addEventListener("click", () => {
    const current =
        html.getAttribute("data-theme") === "dark" ? "dark" : "light";
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
});

// ============================================================
// SCROLL REVEAL
// ============================================================
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
        });
    },
    { threshold: 0.1 },
);
reveals.forEach((el) => observer.observe(el));
