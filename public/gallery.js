const modal = document.getElementById("galleryModal");
const modalImage = document.getElementById("galleryImage");
const modalCaption = document.getElementById("galleryCaption");

let currentImageIndex = 0;

function openGallery(index) {
  currentImageIndex = index;
  const {fullSizeUrl, name} = galleryData[index];
  modalImage.src = fullSizeUrl;
  modalCaption.textContent = name;
  modal.classList.remove("hidden");
}

function closeGallery() {
  modal.classList.add("hidden");
  modalImage.src = "";
  modalCaption.textContent = "";
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + galleryData.length) % galleryData.length;
  openGallery(currentImageIndex);
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % galleryData.length;
  openGallery(currentImageIndex);
}