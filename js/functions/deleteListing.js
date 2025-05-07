import { apiAuctionListings, apiBase } from '../urls.js';
import { load } from './load.js';

export async function deleteListing(id) {
  const profile = load('profile');
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
    throw new Error(error.message || 'Could not delete listing');
  }

  return await response.json();
}

export async function delClick() {
  /*   const delBtn = document.getElementById('delete-button');

  delBtn.addEventListener('click', () => {
    console.log(i);
    deleteListing(i.id);
    alert('Listing Deleted!');
    window.location.reload();
  }); */
}
