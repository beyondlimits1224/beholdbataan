// Visitor Counter

// Navmenu
const NavMenu = () => {
  const Bar = document.querySelector("nav .bar");
  const NavMenu = document.querySelector("nav .navmenu");
  const Close = document.querySelector(".navmenu .close");

  // Events
  Bar.addEventListener("click", openMenu);
  Close.addEventListener("click", closeMenu);

  function openMenu() {
    NavMenu.classList.add("navmenu-active");
  }

  function closeMenu() {
    NavMenu.classList.remove("navmenu-active");
  }
};

NavMenu();
