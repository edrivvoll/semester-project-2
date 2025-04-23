import { getListings } from './getListings.js';

export async function renderListings() {
  const posts = await getListings();
  console.log(posts);
}
