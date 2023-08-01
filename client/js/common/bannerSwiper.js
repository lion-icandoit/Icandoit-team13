//swiper 기능 구현
/* global Swiper */


const swiper = new Swiper('#swiper', {
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



const firstSwiper = new Swiper('#first-swiper', {
  slidesPerView: 6,
  spaceBetween: 5,
  // Navigation arrows
  navigation: {
    nextEl: '#swiper-button-next-first',
    prevEl: '#swiper-button-prev-first',
  },
});


  const secondSwiper = new Swiper('#second-swiper', {
    slidesPerView: 4,
    spaceBetween: 10,
    // Navigation arrows
    navigation: {
      nextEl: '#swiper-button-next-second',
      prevEl: '#swiper-button-prev-second',
    },
  });  


  const thirdswiper = new Swiper("#third-swiper", {
    slidesPerView: 12,
    spaceBetween: 30,
    navigation: {
      prevEl: "#swiper-button-prev-third",
      nextEl: "#swiper-button-next-third",
    },
  });
  
  const fourthswiper = new Swiper("#fourth-swiper", {
    slidesPerView: 6,
    spaceBetween: 30,
    navigation: {
      prevEl: "#swiper-button-prev-fourth",
      nextEl: "#swiper-button-next-fourth",
    },
  });


let swiperOnly = new Swiper('.mySwiper', {
  slidesPerView: 6,
  // spaceBetween: 15,
  freeMode: true,
});

