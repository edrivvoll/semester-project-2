import { getProfile } from './functions/getProfile.js';
import { load } from './functions/load.js';
import { renderSingleListing } from './functions/renderSingleListing.js';
import { apiBase, apiKey } from './urls.js';

renderSingleListing();

console.log('test');

const profile = load('profile');

console.log(profile);

const username = load('profile');
console.log(username);

const p = await getProfile(username.name);

console.log(p.credits);
console.log(p);
