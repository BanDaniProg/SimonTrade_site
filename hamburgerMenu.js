const hamburger = document.querySelector(".hamburgerMenu");
const menu = document.querySelector("nav");
const liItems = document.querySelectorAll("nav ul");
hamburger.onclick = () => {
  menu.classList.toggle("active");
  hamburger.classList.toggle("active");

  for (let liItem of liItems) {
    liItem.classList.toggle("open"); 
  }
};
