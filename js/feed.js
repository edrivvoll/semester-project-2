import { bidClick } from './functions/bidClick.js';
import { getHeaderInfo } from './functions/getHeaderInfo.js';
import { getListings } from './functions/getListings.js';
import { headerDisplay } from './functions/headerDisplay.js';
import { listingsFeed } from './functions/listingsFeed.js';
import { logout } from './functions/logout.js';
import { renderListings } from './functions/renderListings.js';

getListings();
renderListings();
listingsFeed();
logout();
getHeaderInfo();
headerDisplay();
bidClick();
