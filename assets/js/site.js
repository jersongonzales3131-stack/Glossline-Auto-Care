const menuToggle = document.querySelector("[data-menu-toggle]");
const primaryNavigation = document.querySelector("#primary-navigation");
const siteHeader = document.querySelector(".site-header");
const menuLabel = menuToggle?.querySelector(".menu-toggle__label");

if (menuToggle && primaryNavigation && siteHeader && menuLabel) {
  const setMenuExpanded = (expanded, returnFocus = false) => {
    menuToggle.setAttribute("aria-expanded", String(expanded));
    primaryNavigation.querySelector(".site-nav__list").dataset.expanded = String(expanded);
    menuLabel.textContent = expanded ? "Close menu" : "Menu";

    if (returnFocus) {
      menuToggle.focus();
    }
  };

  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    setMenuExpanded(!isExpanded);
  });

  siteHeader.addEventListener("keydown", (event) => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";

    if (event.key === "Escape" && isExpanded) {
      setMenuExpanded(false, true);
    }
  });

  primaryNavigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      setMenuExpanded(false);
    }
  });

  const desktopNavigation = window.matchMedia("(min-width: 48rem)");
  desktopNavigation.addEventListener("change", (event) => {
    if (event.matches) {
      setMenuExpanded(false);
    }
  });

  primaryNavigation.querySelector(".site-nav__list").dataset.expanded = "false";
  document.documentElement.classList.add("has-enhanced-menu");
  menuToggle.hidden = false;
}
