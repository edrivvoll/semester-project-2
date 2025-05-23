// import { getListings } from "../getListings.js";

import { login } from './login.js';
import { register } from './register.js';
import { save } from './save.js';

export async function onAuth(event) {
  event.preventDefault();

  const errorBox = document.querySelector('.error-box');
  if (errorBox) errorBox.textContent = ''; // Clear previous error

  const name = event.target.name?.value || '';
  const email = event.target.email.value;
  const password = event.target.password.value;

  save('useremail', email);

  try {
    if (
      !email ||
      !password ||
      (event.submitter.dataset.auth === 'register' && !name)
    ) {
      throw new Error('All fields are required');
    }

    if (event.submitter.dataset.auth === 'login') {
      await login(email, password);
      window.location.replace('/src/feed.html');
    } else {
      await register(name, email, password);
      await login(email, password);
      window.location.replace('/src/feed.html');
    }
  } catch (error) {
    if (errorBox) {
      errorBox.textContent = error.message;
      errorBox.classList.add('text-danger');
    }
  }
}

export function setAuthListener() {
  const form = document.forms.auth;
  if (!form) throw new Error('Auth form not found');
  form.addEventListener('submit', onAuth);
}
