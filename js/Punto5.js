function myFunction() {
    const checkbox = document.getElementById("myCheck");
    const text = document.getElementById("text");
  
    if (checkbox.checked) {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }