const iceCreamSelect = document.getElementById("iceCreamSelect");
const resultadoDiv = document.querySelector(".resultado");

iceCreamSelect.addEventListener("change", function() {
  const selectedValue = iceCreamSelect.value;
  
  if (selectedValue !== "") {
    resultadoDiv.textContent = "Has elegido el sabor: " + selectedValue;
  } else {
    resultadoDiv.textContent = ""; 
  }
});