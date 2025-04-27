import { getSingleListing } from './getSingleListing.js';

export async function renderSingleListing() {
  const listing = await getSingleListing();
  const listingArray = listing.data;

  console.log(listingArray);

  const container = document.querySelector('#single-listing-container');
  container.innerHTML = '';
  console.log(listingArray.media.length === 0);
  if (listingArray.media.length === 0) {
    container.innerHTML = `                
        <div class="col-md-6 col-sm-6 col-xl-4 text-center">
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
    container.innerHTML = `                
        <div class="col-md-6 col-sm-10 col-xl-10 text-center">
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
}
