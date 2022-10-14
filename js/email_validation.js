/* FORM validation */

const errorMessage = document.querySelector('.error');
const emailInput = document.querySelector('input[type="email"]');

function formSubmit() {
  const regex = /^[a-z0-9]+@[a-z0-9-]+\.[a-z0-9-.]+$/;
  const email = emailInput.value;
  if (!regex.test(email)) {
    errorMessage.style.display = 'block';
    errorMessage.style.color = 'orange';
    errorMessage.innerHTML = 'The email should only content lowercase letters';
    return false;
  }
  return true;
}

const form = document.querySelector('.form-container');
form.addEventListener('submit', formSubmit);

emailInput.addEventListener('focus', () => {
  errorMessage.style.display = 'none';
});
