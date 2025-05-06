import { apiAuctionListings, apiBase, apiKey, apiSeller } from '../urls.js';
import { load } from './load.js';

// Allow usage as guest or with auth
export async function getListings({
  includeSeller = true,
  useAuth = false,
} = {}) {
  const token = load('token');

  // Build query string based on whether to include seller info
  const query = includeSeller ? apiSeller : '';

  const response = await fetch(
    `${apiBase}${apiAuctionListings}${query}&sortOrder=desc&limit=10&offset=0`,
    {
      headers: {
        'X-Noroff-API-Key': apiKey,
        ...(useAuth && token ? { Authorization: `Bearer ${token}` } : {}),
      },
    }
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Could not fetch listings');
  }

  const result = await response.json();
  return result.data; // v2 wraps listings in `data`
}
