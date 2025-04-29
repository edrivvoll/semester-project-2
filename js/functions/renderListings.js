import { getListings } from './getListings.js';

export async function renderListings() {
  const listing = await getListings({ includeSeller: true, useAuth: true });
  console.log(listing);
}
