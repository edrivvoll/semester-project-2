import { bidClick } from './functions/bidClick.js';
import { getHeaderInfo } from './functions/getHeaderInfo.js';
import { headerDisplay } from './functions/headerDisplay.js';
import { logout } from './functions/logout.js';
import { renderSingleListing } from './functions/renderSingleListing.js';

renderSingleListing();
bidClick();
getHeaderInfo();
logout();
headerDisplay();
