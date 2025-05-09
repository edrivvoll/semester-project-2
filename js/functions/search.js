import { apiAuctionListings, apiBase, apiKey } from '../urls.js';
import { load } from './load.js';

export async function search() {
  const searchWord = document.getElementById('search-input').value;
  const searchBtn = document.getElementById('search-btn');
  const listingsContainer = document.getElementById('listings-container');

  const token = load('token');
  const userEmail = load('useremail');
  let myListing = '';
  let displayBid = '';
  let displayBtn = '';
  if (!userEmail) {
    displayBid = 'd-none';
    displayBtn = '';
    myListing = 'd-none';
  } else {
    displayBtn = 'd-none';
    displayBid = '';
    myListing = '';
  }

  // if (!token) throw new Error('No authorization token found');

  const response = await fetch(
    `${apiBase}${apiAuctionListings}/search?sort=created&q=${searchWord}&_seller=true&_bids=true`,
    {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        /* Authorization: `Bearer ${token}`, */
        'X-Noroff-API-Key': `${apiKey}`,
      },
    }
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(errors.message || 'Could not edit profile');
  }
  const answer = await response.json();
  console.log(answer.data);
  //return await response.json();

  listingsContainer.innerHTML = ``;
  answer.data.forEach((i) => {
    if (userEmail) {
      const sellerEmail = i.seller.email;
      const isSeller = sellerEmail === userEmail;

      if (isSeller) {
        myListing = '';
      } else {
        myListing = 'd-none';
      }
    }

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
                <div class="button-container ${displayBtn} m-2">
                    <a href="./login.html" class="btn bg-secondary">Login</a>
                    <a href="./register.html" class="btn bg-secondary">Register</a>
                </div>
                <a href="/src/singlelisting.html?id=${i.id}" class="btn btn-primary mt-1">View Details</a>
                <a href="#" class="btn btn-primary mt-1 ${myListing}">Edit Listing</a>
                <a href="#" id="delete-button" class="btn btn-danger mt-1 ${myListing}">Delete Listing</a>
            </div>
        </div>
        `;

    card.innerHTML = listingCard;
    listingsContainer.appendChild(card);
  });
}
