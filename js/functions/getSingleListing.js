import { apiAuctionListings, apiBase, apiKey, apiSeller } from '../urls.js';
import { load } from './load.js';

const querryString = document.location.search;
const params = new URLSearchParams(querryString);
let id = params.get('id');

if (id === null) {
  id = '';
} else {
  id = '/' + id;
}

export async function getSingleListing({
  includeSeller = true,
  useAuth = false,
} = {}) {
  const token = load('token');

  const query = includeSeller ? apiSeller : '';

  const response = await fetch(`${apiBase}${apiAuctionListings}${id}${query}`, {
    headers: {
      'X-Noroff-API-Key': apiKey,
      ...(useAuth && token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Could not fetch listings');
  }

  const result = await response.json();
  return result.data; // v2 wraps listings in `data`
}
