/* Local storage */

const userName = document.querySelector('.text-input');
const messageInput = document.querySelector('textarea');

form.addEventListener('input', () => {
  const formData = {
    name: userName.value,
    email: emailInput.value,
    messageInput: messageInput.value,
  };

  localStorage.setItem('contactFormInput', JSON.stringify(formData));
});

let savedFormData = localStorage.getItem('contactFormInput');
savedFormData = JSON.parse(savedFormData);

if (savedFormData != null) {
  userName.value = savedFormData.name;
  emailInput.value = savedFormData.email;
  messageInput.value = savedFormData.messageInput;
}
