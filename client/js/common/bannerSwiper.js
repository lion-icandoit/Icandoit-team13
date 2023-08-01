

import { getNode } from '../../lib/dom/getNode.js';
import { clearContents } from '../../lib/dom/clearContents.js';
import { insertLast } from '../../lib/dom/insert.js';


const bannerData = {
  banner: [
    {
      src: './assets/images/main-banner.svg',
      alt: '재벌집 막내 아들',
      text: '인생 2회차를 사는 판타지 드라마',
    },
    {
      src: './assets/images/main-banner1.webp',
      alt: '반의반',
      text: '정해인의 아련한 짝사랑 로맨스',
    },
    {
      src: './assets/images/main-banner2.webp',
      alt: '경이로운 소문2',
      text: '통쾌한 악귀 타파 히어로물',
    },
    {
      src: './assets/images/main-banner3.webp',
      alt: '킹더랜드',
      text: '갑과 을의 7성급 스위트 로맨스!',
    },
  ],
};

let swiper;

export function bannerSwiper() {
  const swiper = new Swiper('#swiper', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 0,
    initialSlide: 0,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
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
  return swiper;
}

//배너 영역  html 템플릿 생성 함수
export function getBannerImage(src, alt, text) {
  const template = /*html*/ `
    <div class="swiper-slide swiper-slide-contents">
      <img src="${src}" alt="${alt}" />
      <p class="bannerInfo__text z-10">${text}</p>
    </div>
  `;
  return template;
}

// 배너 이미지, 텍스트 랜더링하는 함수
export function renderBanner() {
  const bannerContainer = getNode('#swiper .swiper-wrapper');
  const pauseBtn = getNode('#btnPause');
  pauseBtn.addEventListener('click', toggleAutoPlay);
  
 
  clearContents(bannerContainer);

  bannerData.banner.forEach((item) => {
    const bannerHTML = getBannerImage(item.src, item.alt, item.text);

    insertLast(bannerContainer, bannerHTML);
  });

  swiper = bannerSwiper();



  function toggleAutoPlay(){
    if(swiper.autoplay.running){
      swiper.autoplay.stop();
    } else {
      swiper.autoplay.start();
    }
  }

}
renderBanner();

