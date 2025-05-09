// import { bidCall } from './bidCall';
// import { bidCall } from './bidCall.js';
import { getSingleListing } from './getSingleListing.js';
import { load } from './load.js';

export async function renderSingleListing() {
  const listing = await getSingleListing();
  // const listing = listing.data;

  document.title = 'Auction House - ' + listing.title;
  console.log(listing);

  const listingContainer = document.querySelector('#single-listing-container');
  listingContainer.innerHTML = '';
  console.log(listing.media.length === 0);
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
  console.log(listing.bids);
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
  console.log(profile);
  if (profile) {
    makeBidContainer.classList.remove('d-none');
  }

  /* const bidBtn = document.getElementById('bidBtn');

  bidBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const bid = Number(document.getElementById('bid-input').value);
    let dataSet = {
      amount: bid,
    };
    console.log(dataSet);

    try {
      await bidCall(listing.id, dataSet);
      console.log(listing.id);
      alert('Bid placed successfully!');
      window.location.reload();
    } catch (error) {
      console.error('Failed to place bid:', error.message);
      alert('Failed to place bid. Please try again.');
    }
  }); */
}
