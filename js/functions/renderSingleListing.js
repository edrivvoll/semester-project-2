import { getSingleListing } from './getSingleListing.js';

export async function renderSingleListing() {
  const listing = await getSingleListing();
  const listingArray = listing.data;

  console.log(listingArray);

  const listingContainer = document.querySelector('#single-listing-container');
  listingContainer.innerHTML = '';
  console.log(listingArray.media.length === 0);
  if (listingArray.media.length === 0) {
    listingContainer.innerHTML = `                
        <div class="w-75 text-center">
            <div class="card mb-4">
                <img src="#" alt="">
                <div class="card-body">
                    <h5 class="card-title">${listingArray.title}</h5>
                    <p class="card-text">${listingArray.description}</p>
                    <a href="feed.html" class="btn btn-primary">Back</a>
                </div>
            </div>
        </div>
        `;
  } else {
    listingContainer.innerHTML = `                
        <div class="w-75 text-center">
            <div class="card mb-4">
                <img class="img" src="${listingArray.media[0].url}" alt="${listingArray.media[0].alt}">
                <div class="card-body">
                    <h5 class="card-title">${listingArray.title}</h5>
                    <p class="card-text">${listingArray.description}</p>
                    <a href="feed.html" class="btn btn-primary">Back</a>
                </div>
            </div>
        </div>
        `;
  }

  const bidContainer = document.querySelector('#bid-container');
  bidContainer.innerHTML = '';
  console.log(listingArray.bids);
  for (let i = 0; i < listingArray.bids.length; i++) {
    bidContainer.innerHTML += `
    <tr>
      <th scope="row">${i + 1}</th>
      <td>${listingArray.bids[i].bidder.name}</td>
      <td>${listingArray.bids[i].amount}</td>
      <td>${listingArray.bids[i].created}</td>
    </tr>
    `;
  }
}
