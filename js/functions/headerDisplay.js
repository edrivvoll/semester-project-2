import { load } from './load.js';

export async function headerDisplay() {
  const usernameBox = document.querySelector('.dropdown');
  const creditBox = document.querySelector('.credit-box');
  const loginRegisterBox = document.querySelector('.login-register');
  const token = load('token');

  if (!token) {
    usernameBox.classList.add('d-none');
    creditBox.classList.add('d-none');
  } else {
    loginRegisterBox.classList.add('d-none');
  }
}
