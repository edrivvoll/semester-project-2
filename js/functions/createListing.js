import { apiAuctionListings, apiBase, apiKey } from '../urls.js';
import { load } from './load.js';

export async function createListing() {
  const token = load('token');
  if (!token) throw new Error('No authorization token found');

  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const media = document.getElementById('media').value;
  const endsAt = document.getElementById('ends-at').value;

  const dataSet = {
    title: title, // Required
    description: description, // Optional
    media: [
      {
        url: media,
        alt: '',
      },
    ], // Optional
    endsAt: endsAt, // Required - Instance of new Date()
  };

  try {
    const response = await fetch(`${apiBase}${apiAuctionListings}`, {
      method: 'POST',
      body: JSON.stringify(dataSet),
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
        'X-Noroff-API-Key': apiKey,
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Could not create post');
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating post:', error.message);
    throw error;
  }
}

export function loadListing() {
  const createBtn = document.getElementById('create-listing-btn');

  if (createBtn) {
    createBtn.addEventListener('click', async function (e) {
      e.preventDefault();
      try {
        const response = await createListing();
        console.log('Listing created successfully:', response);
        alert('Listing created successfully');
        window.location.reload;
      } catch (error) {
        console.error('Failed to create listing:', error.message);
      }
    });
  }
}
