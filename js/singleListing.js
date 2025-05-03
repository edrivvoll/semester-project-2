import { getHeaderInfo } from './functions/getHeaderInfo.js';
import { getProfile } from './functions/getProfile.js';
import { headerDisplay } from './functions/headerDisplay.js';
import { load } from './functions/load.js';
import { logout } from './functions/logout.js';
import { renderSingleListing } from './functions/renderSingleListing.js';
import { apiBase, apiKey } from './urls.js';

renderSingleListing();
getHeaderInfo();
logout();
headerDisplay();

/* console.log('test');

const profile = load('profile');

console.log(profile);

const username = load('profile');
console.log(username);

const p = await getProfile(username.name);

console.log(p.credits);
console.log(p); */
