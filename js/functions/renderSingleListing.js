import { getSingleListing } from './getSingleListing.js';
import { load } from './load.js';

export async function renderSingleListing() {
  const listing = await getSingleListing();

  document.title = 'Auction House - ' + listing.title;

  const listingContainer = document.querySelector('#single-listing-container');
  listingContainer.innerHTML = '';
  if (listing.media.length === 0) {
    listingContainer.innerHTML = `                
        <div class="w-75 text-center">
            <div class="card mb-4">
                <img src="#" alt="">
                <div class="card-body">
                    <h5 class="card-title">${listing.title}</h5>
                    <p class="card-text">${listing.description}</p>
                    <a href="feed.html" class="btn btn-primary">Back</a>
                </div>
            </div>
        </div>
        `;
  } else {
    listingContainer.innerHTML = `                
        <div class="w-75 text-center">
            <div class="card mb-4">
                <img class="img listing-img" src="${listing.media[0].url}" alt="${listing.media[0].alt}">
                <div class="card-body">
                    <h5 class="card-title">${listing.title}</h5>
                    <p class="card-text">${listing.description}</p>
                    <a href="feed.html" class="btn btn-primary">Back</a>
                </div>
            </div>
        </div>
        `;
  }

  const bidContainer = document.querySelector('#bid-container');
  bidContainer.innerHTML = '';
  for (let i = 0; i < listing.bids.length; i++) {
    bidContainer.innerHTML += `
    <tr>
      <th scope="row">${i + 1}</th>
      <td>${listing.bids[i].bidder.name}</td>
      <td>${listing.bids[i].amount}</td>
      <td>${listing.bids[i].created}</td>
    </tr>
    `;
  }

  const profile = load('profile');
  const makeBidContainer = document.querySelector('.make-bid-container');
  if (profile) {
    makeBidContainer.classList.remove('d-none');
  }
}
