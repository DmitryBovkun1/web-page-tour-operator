const slides = ["./img/main_img1.jpg", "./img/main_img2.jpg", "./img/main_img3.jpg"];
let currentIndex = 0;
let intervalId;

function showSlide(index) {
  const carousel = document.querySelector('.carousel');
  const currentSlide = carousel.querySelector('.current-slide');
  const prevSlide = carousel.querySelector('.prev-slide');
  const nextSlide = carousel.querySelector('.next-slide');
  
  currentSlide.src = slides[index];
  prevSlide.src = slides[(index - 1 + slides.length) % slides.length];
  nextSlide.src = slides[(index + 1) % slides.length];
  
  currentIndex = index;
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function startAutoSlide() {
  intervalId = setInterval(function() {
    nextSlide();
  }, 5000);
}

function stopAutoSlide() {
  clearInterval(intervalId);
}

document.addEventListener('DOMContentLoaded', function() {
  showSlide(currentIndex);
  startAutoSlide();
});

document.querySelector('.carousel').addEventListener('mouseenter', stopAutoSlide);

document.querySelector('.carousel').addEventListener('mouseleave', startAutoSlide);
