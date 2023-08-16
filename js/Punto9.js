const menu = document.querySelector(".menu");

window.addEventListener("scroll", function() {
  if (window.scrollY > 0) {
    menu.style.backgroundColor = "blue"; 
  } else {
    menu.style.backgroundColor = "black"; 
  }
});