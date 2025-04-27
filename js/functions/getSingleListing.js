import { apiAuctionListings, apiBase, apiKey, apiSeller } from '../urls.js';
import { load } from './load.js';

const querryString = document.location.search;
const params = new URLSearchParams(querryString);
const id = params.get('id');

export async function getSingleListing() {
  const token = load('token');
  if (!token) throw new error('No authorization token found');

  const response = await fetch(
    `${apiBase}${apiAuctionListings}/${id}${apiSeller}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'X-Noroff-API-Key': `${apiKey}`,
      },
    }
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Could not fetch listing');
  }
  return await response.json();
}
