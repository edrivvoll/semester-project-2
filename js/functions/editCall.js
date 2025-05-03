import { apiAuctionProfiles, apiBase, apiKey } from '../urls.js';
import { dataSet } from './editProfile.js';
import { load } from './load.js';

export async function editCall() {
  const profile = load('profile');
  const token = load('token');
  if (!token) throw new Error('No authorization token found');

  const response = await fetch(
    `${apiBase}${apiAuctionProfiles}/${profile.name}`,
    {
      method: 'PUT',
      body: JSON.stringify(dataSet),
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
        'X-Noroff-API-Key': `${apiKey}`,
      },
    }
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Could not update the post');
  }

  return await response.json();
}
