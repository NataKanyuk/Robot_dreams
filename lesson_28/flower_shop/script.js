const images = document.querySelectorAll('.flower_shop_photo');
images.forEach(image => {
  image.addEventListener('click', toggleImageSize);
});

function toggleImageSize(event) {
  const image = event.target;
  if (image.classList.contains('enlarged')) {
    image.style.transform = 'scale(1)';
    image.classList.remove('enlarged');
  } else { 
    image.style.transform = 'scale(1.6)'; 
    image.classList.add('enlarged');
  }
}
