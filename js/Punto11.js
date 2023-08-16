window.addEventListener("load", function() {
    const loadingIcon = document.getElementById("loading-icon");
    setTimeout(function() {
      if (loadingIcon) {
        loadingIcon.style.display = "none";
      }
    }, 4000); 
  });