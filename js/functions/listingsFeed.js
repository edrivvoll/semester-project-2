import { getListings } from './getListings.js';
import { load } from './load.js';

export async function listingsFeed() {
  const listings = await getListings();
  const listingsContainer = document.getElementById('listings-container');
  const listingsArray = listings.data;
  const userEmail = load('useremail');

  listingsContainer.innerHTML = ``;

  listingsArray.forEach((i) => {
    const sellerEmail = i.seller.email;
    // console.log(sellerEmail);
    const isSeller = sellerEmail === userEmail;
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
            <div class="card-body">
                <h5 class="card-title">${i.title}</h5>
                <p class="card-text">${i.description}</p>
                <a href="/src/singllisting.html?id=${i.id}" class="btn btn-primary">View Post</a>
                    <div class="button-container"></div>
                </div>
        </div>

    `;

    card.innerHTML = listingCard;
    listingsContainer.appendChild(card);
  });
}
