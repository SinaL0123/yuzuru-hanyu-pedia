// navigation for menu bar for max-width 45em
let menuIcon = document.querySelector("svg.menu");
console.log(menuIcon);
let menuList = document.querySelector(".menubar");
let header = document.querySelector("header");


function toggleMenu(){
  console.log("toggle");//for checking
  menuList.classList.toggle("toggle");//navigation.className = "toggle";
  header.classList.toggle("toggle");//header.className = "toggle";
}

menuIcon.addEventListener("click", toggleMenu);
