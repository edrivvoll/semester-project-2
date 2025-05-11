import { getProfile } from './getProfile.js';
import { load } from './load.js';

export async function renderProfile() {
  const profileBanner = document.querySelector('.profile-banner');
  const avatar = document.querySelector('.profile-avatar');
  const userInfo = document.querySelector('.user-info');

  const username = load('profile');
  const profile = await getProfile(username.name);

  profileBanner.innerHTML = `<img src="${profile.banner.url}" alt="${profile.banner.alt}">`;

  avatar.innerHTML = `<img src="${profile.avatar.url}" alt="${profile.avatar.alt}">`;

  userInfo.innerHTML = `
    <h2>${profile.name}</h2>
    <h5>${profile.email}</h5>
    <p>${profile.bio}</p>
  `;
}
