/* global Swiper */
//swiper 기능 구현
export const swiper = new Swiper('#swiper', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 0,
  autoplay: {
    delay: 3500,
    disableOnInteraction: true,
  },
  loop: true,
  loopAdditionalSlides: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  fadeEffect: {
    crossFade: true,
  },
  speed: 3.5, // 트랜지션 속도를 0ms로 설정
});

export var swiperOnlyBtn = new Swiper('.mySwiperOnlyBtn', {
  slidesPerView: 6,
  loop: true,
  loopAdditionalSlides: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
