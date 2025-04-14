// import { getPosts } from "../getPosts.js";

import { login } from './login.js';
import { register } from './register.js';
import { save } from './save.js';

export async function onAuth(event) {
  event.preventDefault();
  const name = event.target.name?.value || '';
  const email = event.target.email.value;
  const password = event.target.password.value;
  save('useremail', email);

  if (
    !email ||
    !password ||
    (event.submitter.dataset.auth === 'register' && !name)
  ) {
    throw new Error('All fields are required');
  }

  if (event.submitter.dataset.auth === 'login') {
    await login(email, password);
    window.location.replace('/feed.html');
  } else {
    await register(name, email, password);
    await login(email, password);
    window.location.replace('/feed.html');
  }

  // const posts = await getPosts();
  // console.log(posts);
}

export function setAuthListener() {
  const form = document.forms.auth;
  if (!form) throw new Error('Auth form not found');
  form.addEventListener('submit', onAuth);
}
