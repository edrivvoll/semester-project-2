import { apiAuctionListings, apiBase, apiKey, apiSeller } from '../urls.js';
import { load } from './load.js';

export async function getListings() {
  const token = load('token');
  if (!token) throw new Error('No authorization token found');

  const response = await fetch(`${apiBase}${apiAuctionListings}${apiSeller}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'X-Noroff-API-Key': `${apiKey}`,
    },
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Could not fetch posts');
  }

  return await response.json();
}
//
