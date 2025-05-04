import { bidClick } from './functions/bidClick.js';
import { getHeaderInfo } from './functions/getHeaderInfo.js';
import { getProfile } from './functions/getProfile.js';
import { headerDisplay } from './functions/headerDisplay.js';
import { load } from './functions/load.js';
import { logout } from './functions/logout.js';
import { renderSingleListing } from './functions/renderSingleListing.js';
import { apiBase, apiKey } from './urls.js';

renderSingleListing();
bidClick();
getHeaderInfo();
logout();
headerDisplay();
