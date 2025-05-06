import { getListings } from './getListings.js';
import { load } from './load.js';

export async function listingsFeed() {
  const listings = await getListings();
  const listingsContainer = document.getElementById('listings-container');
  // const listingsArray = listings.data;
  const userEmail = load('useremail');
  console.log(listings);
  let displayBid = '';
  let displayBtn = '';
  if (!userEmail) {
    displayBid = 'd-none';
    displayBtn = '';
  } else {
    displayBtn = 'd-none';
    displayBid = '';
  }

  listingsContainer.innerHTML = ``;

  listings.forEach((i) => {
    // const sellerEmail = i.seller.email;
    // console.log(sellerEmail);
    // const isSeller = sellerEmail === userEmail;
    // console.log(isSeller);
    // console.log(i.media.url);

    const card = document.createElement('div');
    card.className = 'col-md-6 col-sm-6 col-xl-4';

    const mediaUrl = i?.media[0]?.url;
    let img = '';

    if (mediaUrl === undefined) {
      img = '../img/NA_image.jpg';
    } else {
      img = mediaUrl;
    }

    const listingCard = `

        <div class="card mb-4">
            <img src="${img}" alt="${i?.media[0]?.alt}">
            <p class="btn bg-secondary position-absolute m-2">Bids ${i.bids.length}</p>
            <div class="card-body">
                <h5 class="card-title">${i.title}</h5>
                <p class="card-text">${i.description}</p>
                
                <a href="/src/singlelisting.html?id=${i.id}" class="btn btn-primary">View Details</a>
            </div>
        </div>

    `;

    card.innerHTML = listingCard;
    listingsContainer.appendChild(card);
  });
}

//<div class="bid-box ${displayBid}">
//                <input
//                  type="number"
//                  class=""
//                  id="bid-input"
//                  name="bid-input"
//                  placeholder="Enter bid" />
//                  <button type="submit" id="bidBtn" class="btn bg-secondary m-2">Bid</button>
//                </div>
//                <div class="button-container ${displayBtn} m-2">
//                  <a href="./login.html" class="btn bg-secondary">Login</a>
//                  <a href="./register.html" class="btn bg-secondary">Register</a>
//                </div>
