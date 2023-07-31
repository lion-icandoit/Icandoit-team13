const swiper = new Swiper("#swiper", {
  spaceBetween: 30,
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 0,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true, 
  },
  loop: true,
  loopAdditionalSlides: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

