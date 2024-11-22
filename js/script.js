document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.the-best-offers .animated-image');
  let currentImageIndex = 0;

  function showNextImage() {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('active');
  }

  images[currentImageIndex].classList.add('active');
  setInterval(showNextImage, 3000);

  images.forEach((image) => {
    image.addEventListener('mouseover', () => {
      images.forEach(img => img.classList.remove('active'));
      image.classList.add('active');
    });

    image.addEventListener('mouseout', () => {
      image.classList.remove('active');
      images[currentImageIndex].classList.add('active');
    });
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  const images = document.querySelectorAll('.carousel-image');
  let currentIndex = 0;

  function showNextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  setInterval(showNextImage, 2000);
});



document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.add-to-cart');
  
  buttons.forEach(button => {
      button.addEventListener('click', () => {
          const item = button.closest('.menu-item');
          const name = item.querySelector('.menu-name').textContent;
          const price = item.querySelector('.menu-price').textContent;
          const quantity = item.querySelector('.menu-quantity').textContent;
          
          // alert(`Added to cart:\n\nName: ${name}\nPrice: ${price}\n${quantity}`);
            alert(`Add to Cart:\n\n name : ${name} \nPrice ${price} \nPrice ${quantity}`);
          
      });
  });
});

