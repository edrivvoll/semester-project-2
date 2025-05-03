import { load } from './load.js';

export async function bidContainer() {
  const token = load('token');
  const bidContainer = document.querySelector('.bid-box');

  if (token) {
    console.log(token);
    bidContainer.innerHTML = `<div>test</div>`;
    // console.log(bidContainer.innerHTML);
  } else {
    console.log('no token');
  }
}
