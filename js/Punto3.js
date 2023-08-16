document.addEventListener('DOMContentLoaded', function() {
    const openBtn = document.getElementById('openBtn');
    const closeBtn = document.querySelector('.closebtn');
    const sidebar = document.getElementById('mySidebar');
    const mainContent = document.getElementById('main');
  
    openBtn.addEventListener('click', function() {
      sidebar.style.left = "0";
      mainContent.style.marginLeft = "200px"; 
    });
  
    closeBtn.addEventListener('click', function() {
      sidebar.style.left = "-200px"; 
      mainContent.style.marginLeft = "0";
    });
  });