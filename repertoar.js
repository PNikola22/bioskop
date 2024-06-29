document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.gallery img');
  const modalImage = document.getElementById('modalImage');
  const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
  let currentIndex;

  images.forEach((img, index) => {
    img.addEventListener('click', () => {
      currentIndex = index;
      showImage();
      imageModal.show();
    });
  });

  document.getElementById('prevButton').addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      showImage();
    }
  });

  document.getElementById('nextButton').addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
      currentIndex++;
      showImage();
    }
  });

  function showImage() {
    const img = images[currentIndex];
    modalImage.src = img.src;
    modalImage.alt = img.alt;
  }
});
