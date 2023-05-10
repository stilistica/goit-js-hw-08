import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onTextareaInput, 500));
form.addEventListener('submit', onFormSubmit);

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
const { email, message } = form.elements;
populateTextarea();

function onTextareaInput(e) {
  formData = { email: email.value, message: message.value };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextarea() {
  if (formData) {
    email.value = formData.email || '';
    message.value = formData.message || '';
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  let formSubmit = {
    email: email.value,
    message: message.value,
  }

  if (email.value === '' || message.value === '') {
    return alert('Будь-ласка, заповніть всі поля');
  }
  console.log(formSubmit);
  localStorage.removeItem(STORAGE_KEY);
  e.currentTarget.reset();
  formSubmit = {};
}










