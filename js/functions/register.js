import { apiAuth, apiBase, apiReg } from './urls.js';

export async function register(name, email, password) {
  const respons = await fetch(`${apiBase}${apiAuth}${apiReg}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
  });

  if (!respons.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Could not register the account');
  }
  return await response.json();
}
