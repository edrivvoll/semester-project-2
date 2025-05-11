import { loadListing } from './functions/createListing.js';
import { createListingBox } from './functions/createListingBox.js';
import { getHeaderInfo } from './functions/getHeaderInfo.js';
import { getListings } from './functions/getListings.js';
import { headerDisplay } from './functions/headerDisplay.js';
import { hideCreateListingBtn } from './functions/hideCreateListingBtn.js';
import { listingsFeed } from './functions/listingsFeed.js';
import { logout } from './functions/logout.js';
import { renderListings } from './functions/renderListings.js';
import { search } from './functions/search.js';

getListings();
renderListings();
listingsFeed();
logout();
getHeaderInfo();
headerDisplay();
createListingBox();
loadListing();
hideCreateListingBtn();

const searchBtn = document.getElementById('search-btn');
const searchWord = document.getElementById('search-input');
searchBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  search();
});
