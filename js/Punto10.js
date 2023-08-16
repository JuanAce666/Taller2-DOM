const menu = document.querySelector(".menu");
const myBtn = document.getElementById("myBtn");


window.addEventListener("scroll", function() {
  if (window.scrollY > 0) {
    myBtn.style.display = "block";
  } else {
    myBtn.style.display = "none";
  }
});

myBtn.addEventListener("click", function() {
  menu.style.top = "-100%"; 
  myBtn.style.display = "none"; 
});