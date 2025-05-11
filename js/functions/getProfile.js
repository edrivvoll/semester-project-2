import { apiBase, apiKey } from '../urls.js';
import { load } from './load.js';

export async function getProfile(username) {
  const token = load('token');
  if (!token) throw new Error('No token found');

  const response = await fetch(`${apiBase}/auction/profiles/${username}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'X-Noroff-API-Key': apiKey,
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Could not fetch profile');
  }

  const result = await response.json();
  return result.data;
}
