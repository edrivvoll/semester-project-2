import { apiAuctionListings, apiBase, apiKey } from '../urls.js';
import { load } from './load.js';

export async function deleteListing(id) {
  const token = load('token');
  if (!token) throw new Error('No authorization token found');

  const response = await fetch(`${apiBase}${apiAuctionListings}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
      'X-Noroff-API-Key': `${apiKey}`,
    },
  });
  if (!response.ok) {
    const error = await response.json();

    const message = error?.errors?.[0]?.message || 'Could not delete listing';
    throw new Error(message);
  }

  return await response.json();
}
