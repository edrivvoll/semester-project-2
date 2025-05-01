import { getHeaderInfo } from './functions/getHeaderInfo.js';
import { getListings } from './functions/getListings.js';
import { listingsFeed } from './functions/listingsFeed.js';
import { logout } from './functions/logout.js';
import { renderListings } from './functions/renderListings.js';

getListings();
renderListings();
listingsFeed();
logout();
getHeaderInfo();
