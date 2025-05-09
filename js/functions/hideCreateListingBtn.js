import { load } from './load.js';

export async function hideCreateListingBtn() {
  const createBtn = document.getElementById('create-listing');
  const token = load('token');

  if (!token) {
    createBtn.classList.add('d-none');
  }
}
