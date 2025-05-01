import { getProfile } from './getProfile.js';
import { load } from './load.js';

export async function renderProfile() {
  const username = load('profile');
  const profile = await getProfile(username.name);
  console.log(profile);
  const profileBanner = document.querySelector('.profile-banner');
  profileBanner.innerHTML = `<img src="${profile.banner.url}" alt="">`;
  console.log(profile.banner.url);

  /* const creditBox = document.querySelector('.user-credit');
  const credit = await getProfile(username.name);
  creditBox.append(credit.credits); */
}
