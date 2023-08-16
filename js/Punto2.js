document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtn = document.getElementById('dropdownBtn');
    const dropdownContent = document.getElementById('myDropdown');
  
    dropdownBtn.addEventListener('click', function() {
      dropdownContent.classList.toggle('show');
    });

    window.addEventListener('click', function(event) {
      if (!event.target.matches('.dropbtn')) {
        if (dropdownContent.classList.contains('show')) {
          dropdownContent.classList.remove('show');
        }
      }
    });
  });