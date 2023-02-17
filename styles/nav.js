//MENU REDUIT QUAND ON CLIQUE CA APPARAIT

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});


// MENU REDUIT QUI DISARAIT QUAND CLIC SUR UN DES LIENS
const navLinks = document.querySelectorAll('.nav-menu');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });