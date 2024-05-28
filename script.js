document.getElementById("burger").addEventListener("click", function () {
  const nav = document.querySelector("nav .nav-links");
  nav.classList.toggle("hidden");
});

const burger = document.getElementById("burger");
const closeNav = document.getElementById("closenav");
const sideNav = document.getElementById("sidenav");

burger.addEventListener("click", function () {
  sideNav.style.right = 0;
});

closeNav.addEventListener("click", function () {
    sideNav.style.right = "-50%";
  });

