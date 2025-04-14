import { save } from './save.js';
import { apiAuth, apiBase, apiLogin } from '../urls.js';

export async function login(email, password) {
  const response = await fetch(`${apiBase}${apiAuth}${apiLogin}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const result = await response.json();
    const { accessToken, ...profile } = result.data || {};
    if (!accessToken) throw new Error('No access token in response');
    save('token', accessToken);
    save('profile', profile);
    return profile;
  }

  const error = await response.json();
  throw new Error(error.message || 'Could not log in account');
}
