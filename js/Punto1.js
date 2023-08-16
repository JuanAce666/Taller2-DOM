document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menuIcon');
    const navbar = document.getElementById('myNavbar');

    menuIcon.addEventListener('click', function() {
      navbar.classList.toggle('responsive');
    });
  });