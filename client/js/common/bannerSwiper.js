/* global Swiper */

import { getNode } from "../../lib//dom/getNode.js"
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

const swiper = new Swiper('#swiper', {
  slidesPerView: 'auto',
  initialSlide: 0,
  spaceBetween: 0,
  pagination: {
    el:'.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  fadeEffect: {
          crossFade: true,
  },
  loop: true,

  autoplay: {
          delay: 3500,
          disableOnInteraction: false,
    crossFade: true,
  },
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


// const secondSwiper = new Swiper('#second-swiper', {
//   slidesPerView: 4,
//   spaceBetween: 10,
//   // Navigation arrows
//   navigation: {
//     nextEl: '#swiper-button-next-second',
//     prevEl: '#swiper-button-prev-second',
//   },
// });

// const thirdswiper = new Swiper('#third-swiper', {
//   slidesPerView: 12,
//   spaceBetween: 30,
//   navigation: {
//     prevEl: '#swiper-button-prev-third',
//     nextEl: '#swiper-button-next-third',
//   },
// });

// const fourthswiper = new Swiper('#fourth-swiper', {
//   slidesPerView: 6,
//   spaceBetween: 30,
//   navigation: {
//     prevEl: '#swiper-button-prev-fourth',
//     nextEl: '#swiper-button-next-fourth',
//   },
// });




//배너 영역  html 템플릿 생성 
function getBannerImage(src, alt, text) {
 
  const template = /*html*/ `
    <div class="swiper-slide swiper-slide-contents">
      <img src="${src}" alt="${alt}" />
      <p class="bannerInfo__text z-10">${text}</p>
    </div>
  `;
  return template;
}

// 배너 이미지, 텍스트 랜더링하는 함수
async function renderBanner(){
  const bannerContainer = getNode('#swiper .swiper-wrapper');
  const pauseBtn = getNode('.bannerBtnPause');
  
  pauseBtn.addEventListener('click', handlePlay);
  
  const response = await fetch('http://localhost:3000/bannerData')
  const data = await response.json()
  console.log(data);

  clearContents(bannerContainer);

  bannerData.banner.forEach((item) => {
    const bannerHTML = getBannerImage(item.src, item.alt, item.text);

    insertLast(bannerContainer, bannerHTML);
   
      
  });
}
 
  renderBanner();


  const playButton = getNode('.play');
  
  function handlePlay(){
  let toggle = false
    
  return ()=>{
    const img = playButton.querySelector('img');

    if(!toggle){
      swiper.autoplay.stop();
      img.src = './assets/images/Pause.svg'
      img.alt = '슬라이드 정지 버튼'

    }else{
      swiper.autoplay.start();
      img.src = './assets/images/Play.svg'
      img.alt = '슬라이드 재생 버튼'
    }
    
    toggle = !toggle
  }
}

playButton.addEventListener('click',handlePlay())

