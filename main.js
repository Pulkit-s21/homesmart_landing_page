import './style.css'

const navBtn = document.querySelector("#menu");
const menuBar = document.querySelector("[role='menuBar']");

navBtn.addEventListener("click", () => {
  const isExpanded = JSON.parse(navBtn.getAttribute('aria-expanded')); // we are storing the value if btn has value of expanded or not... then we just reverse it below
  navBtn.setAttribute('aria-expanded',!isExpanded); // if true then set it to false and vice verse
  menuBar.classList.toggle('hidden');
  menuBar.classList.toggle('flex');
});


// Manual dark/light mode toggle 

// Icons
const moonIcon = document.querySelector(".moon");
const sunIcon = document.querySelector(".sun");

// Theme vars
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Icon toggling
const iconToggle = () => {
  moonIcon.classList.toggle("display-none");
  sunIcon.classList.toggle("display-none");
}

// Initial theme check
const themeCheck = () => {
  if((userTheme === 'dark') || (userTheme && systemTheme)){
    document.documentElement.classList.add("dark");
    moonIcon.classList.add("display-none");
    return;
  }
  sunIcon.classList.add("display-none");
}

// Manual Switch
const themeSwitch = () => {
  if(document.documentElement.classList.contains("dark")){
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme","light");
    iconToggle();
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme","dark");
  iconToggle();
}

// call them and switch the mode
moonIcon.addEventListener("click",()=>{
  themeSwitch();
});

sunIcon.addEventListener("click",()=>{
  themeSwitch();
});

// invoke them on inital load
themeCheck();