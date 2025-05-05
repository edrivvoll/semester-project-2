export async function createListingBox() {
  document.addEventListener('DOMContentLoaded', function () {
    const editBtn = document.getElementById('create-listing');
    const editCard = document.getElementById('edit-card');
    const cancelBtn = document.getElementById('cancel-btn');

    editBtn.addEventListener('click', function () {
      editCard.classList.toggle('visible-card');
      editCard.classList.toggle('hidden-card');
    });

    cancelBtn.addEventListener('click', function () {
      editCard.classList.toggle('visible-card');
      editCard.classList.toggle('hidden-card');
    });
  });
}
