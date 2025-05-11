import { getProfile } from './getProfile.js';
import { load } from './load.js';

export async function getHeaderInfo() {
  const usernameBox = document.querySelector('.dropdown-user');
  const username = load('profile');
  if (username) {
    usernameBox.append(username.name);
    const profileImg = document.querySelector('.profile-img');
    const creditBox = document.querySelectorAll('.user-credit');
    const credit = await getProfile(username.name);

    creditBox.forEach((e) => (e.textContent = credit.credits));

    profileImg.src = username.avatar.url;
  }
}
