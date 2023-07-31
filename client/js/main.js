//import { swiper, swiperOnly, swiperLive } from './common/bannerSwiper.js';
// import banner from './server/db/data.json';
// import { bannerData } from './../../server/db/data.json';
// import { swiperOnly } from './common/only.js';
//import {} from './common/index.js';
const swiper1 = new Swiper('#swiper', {
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

let swiperOnly = new Swiper('.mySwiper', {
    slidesPerView: 6,
    // spaceBetween: 15,
    freeMode: true,
    });


let swiperLive = new Swiper('.liveswiper', {
    slidesPerView: 8,
    delay: 3000,
    // spaceBetween: 15,
    freeMode: true,
    });
