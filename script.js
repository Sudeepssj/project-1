document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("modeToggle");
  const body = document.body;
  const navbar = document.querySelector(".navbar");

  // Start in light mode
  navbar.classList.add("navbar-light");

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      navbar.classList.remove("navbar-light");
      navbar.classList.add("navbar-dark");
      toggleBtn.textContent = "☀ Light";
    } else {
      navbar.classList.remove("navbar-dark");
      navbar.classList.add("navbar-light");
      toggleBtn.textContent = "🌙 Dark";
    }
  });
});