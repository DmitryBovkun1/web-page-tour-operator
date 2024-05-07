let galleryIndex = 0;

function currentGallery(n) {
  galleryIndex = n;
  updateImagesPath(getGalleryTitle(galleryIndex));
  updateImages(galleryIndex);
}

function getGalleryTitle(index) {
  switch (index) {
    case 1:
      return "./img/gallery/hotel";
    case 2:
      return "./img/gallery/food";
    default:
      return "./img/gallery/restPlace";
  }
}

const totalImages = 3;
let imagePaths = [];

function updateImagesPath(galleryPath)
{	imagePaths = [];
	for (let i = 1; i <= totalImages; i++) {
		imagePaths.push(`${galleryPath}${i}.jpg`);
	}
}
updateImagesPath(getGalleryTitle(galleryIndex));
updateImages(galleryIndex);

function updateImages(currentIndex) {
  const prevSlide = document.getElementById('prev-slide-gallery');
  const currentSlide = document.getElementById('current-slide-gallery');
  const nextSlide = document.getElementById('next-slide-gallery');

  prevSlide.src = imagePaths[(currentIndex - 1 + totalImages) % totalImages];
  currentSlide.src = imagePaths[currentIndex];
  nextSlide.src = imagePaths[(currentIndex + 1) % totalImages];
}

function prevGallerySlide() {
  galleryIndex = (galleryIndex - 1 + totalImages) % totalImages;
  updateImages(galleryIndex);
}

function nextGallerySlide() {
  galleryIndex = (galleryIndex + 1) % totalImages;
  updateImages(galleryIndex);
}

const buttons = document.querySelectorAll('.controls-gallery .btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
   currentGallery(parseInt(button.dataset.index));
  });
});
