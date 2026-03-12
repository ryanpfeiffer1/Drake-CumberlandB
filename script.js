
// creating an event listener for the menu buttons, so they open when clicked
//Used a query selector to ensure to loop through the menu buttons for the event listener
document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.querySelector('.nav-links');

  menuBtn.addEventListener('click', function () {
    navLinks.classList.toggle('open');
  });

  //closes the menu bar when a link is clicked
  //Uses a query selector to loop through the different elements in the naigation links
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');

    });
  });
});