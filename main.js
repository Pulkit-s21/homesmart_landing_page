import './style.css'

const navBtn = document.querySelector("#menu");
const menuBar = document.querySelector("[role='menuBar']");

navBtn.addEventListener("click", () => {
  const isExpanded = JSON.parse(navBtn.getAttribute('aria-expanded')); // we are storing the value if btn has value of expanded or not... then we just reverse it below
  navBtn.setAttribute('aria-expanded',!isExpanded); // if true then set it to false and vice verse
  menuBar.classList.toggle('hidden');
  menuBar.classList.toggle('flex');
});