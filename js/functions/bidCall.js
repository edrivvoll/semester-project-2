import { apiAuctionListings, apiBase, apiKey } from '../urls.js';
import { dataSet } from './editProfile.js';
import { load } from './load.js';

export async function bidCall(id, dataSet) {
  const profile = load('profile');
  const token = load('token');
  if (!token) throw new Error('No authorization token found');

  const response = await fetch(`${apiBase}${apiAuctionListings}/${id}/bids`, {
    method: 'POST',
    body: JSON.stringify(dataSet),
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
      'X-Noroff-API-Key': `${apiKey}`,
    },
  });
  if (!response.ok) {
    const error = await response.json();

    const message = error?.errors?.[0]?.message || 'Could not place bid';
    throw new Error(message);

    // throw new Error(error.message || 'Could not place bid');
  }

  return await response.json();
}
