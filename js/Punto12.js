document.addEventListener("DOMContentLoaded", function() {
    var input = document.getElementById("myInput");
    var addButton = document.querySelector(".addBtn");
    var taskList = document.getElementById("myUL");
  
    function addTask() {
      var taskText = input.value.trim();
      if (taskText === "") return;
  
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(taskText));
      taskList.appendChild(li);
  
      input.value = "";
    }
  
    addButton.addEventListener("click", addTask);
  
    input.addEventListener("keyup", function(event) {
      if (event.key === "Enter") {
        addTask();
      }
    });
  });