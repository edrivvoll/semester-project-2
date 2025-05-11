import { apiAuth, apiBase, apiReg } from '../urls.js';

export async function register(name, email, password) {
  const response = await fetch(`${apiBase}${apiAuth}${apiReg}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
  });

  if (!response.ok) {
    const error = await response.json();

    const message =
      error?.errors?.[0]?.message || 'Could not register the account';

    throw new Error(message);
  }
  return await response.json();
}
