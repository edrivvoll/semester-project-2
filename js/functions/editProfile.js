import { editCall } from './editCall.js';
import { getHeaderInfo } from './getHeaderInfo.js';
import { getProfile } from './getProfile.js';
import { load } from './load.js';
import { save } from './save.js';
export let dataSet = {};

export async function editProfile() {
  const username = load('profile');
  const profile = await getProfile(username.name);

  document.querySelector('#avatarUrl').value = profile.avatar.url || '';
  document.querySelector('#bannerUrl').value = profile.banner.url || '';
  document.querySelector('#bio').value = profile.bio;

  const updateBtn = document.getElementById('save-btn');

  updateBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const newAvatar = document.getElementById('avatarUrl').value;
    const newBanner = document.getElementById('bannerUrl').value;
    const newBio = document.getElementById('bio').value;

    dataSet = {
      bio: newBio,
      avatar: {
        url: newAvatar,
        alt: '',
      },
      banner: {
        url: newBanner,
        alt: '',
      },
    };

    try {
      await editCall();
      alert('Profile updated successfully!');
      const pro = await getProfile(username.name);
      save('profile', pro);

      getHeaderInfo();
      window.location.reload();
    } catch (error) {
      console.error('Failed to update profile:', error.message);
      alert('Failed to update profile. Please try again.');
    }
  });
}
