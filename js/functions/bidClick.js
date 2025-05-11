import { bidCall } from './bidCall.js';
import { getSingleListing } from './getSingleListing.js';

export async function bidClick() {
  const listing = await getSingleListing();
  const bidBtn = document.getElementById('bidBtn');

  bidBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const bid = Number(document.getElementById('bid-input').value);
    let dataSet = {
      amount: bid,
    };

    try {
      await bidCall(listing.id, dataSet);
      alert('Bid placed successfully!');
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  });
}
