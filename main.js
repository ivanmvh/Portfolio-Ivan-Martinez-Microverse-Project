const showMobileMenu = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const crossDiv = document.querySelector('.close-menu');
showMobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  mobileMenu.style.display = 'block';
  mobileMenu.style.height = '100vh';
  showMobileMenu.style.visibility = 'hidden';
  crossDiv.style.visibility = 'visible';
});

crossDiv.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  mobileMenu.style.height = '0';
  showMobileMenu.style.visibility = 'visible';
  crossDiv.style.visibility = 'hidden';
  mobileMenu.style.height = '0';
});

window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    mobileMenu.classList.remove('open');
    mobileMenu.style.display = 'none';
    crossDiv.style.visibility = 'hidden';
    showMobileMenu.style.visibility = 'visible';
  } else {
    showMobileMenu.style.visibility = 'hidden';
    mobileMenu.style.height = 'auto';
  }
});

mobileMenu.addEventListener('click', () => {
  crossDiv.style.visibility = 'hidden';
  mobileMenu.style.display = 'none';
  mobileMenu.style.height = '0';
  showMobileMenu.style.visibility = 'visible';
  mobileMenu.classList.remove('open');
});

/* modal */
