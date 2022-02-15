// import
import "./module/webFont";
import "./module/setAnimation";
import "./module/fixViewport";
import smoothscroll from "smoothscroll-polyfill";
import Swiper, { Navigation, Pagination, Autoplay,Scrollbar } from 'swiper';

const swiper = new Swiper(".mySwiper", {
	modules: [Navigation, Pagination, Autoplay,Scrollbar],
	slidesPerView: 3,
	spaceBetween: 15,
	autoplay: {
    delay: 1500,
  },
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
    // ウィンドウサイズが700px以下
		700: {
      slidesPerView: 5,
      spaceBetween: 30
    }
  }
});

// kick off the polyfill!
smoothscroll.polyfill();

document.addEventListener("click", e => {
  const target = e.target;

  if (target.href.match(/#/)) {
    e.preventDefault();
    const targetId = target.hash;
    const targetElement = document.querySelector(targetId);
    // 画面上部から要素までの距離
    const rectTop = targetElement.getBoundingClientRect().top;
    // 現在のスクロール距離
    const offsetTop = window.pageYOffset;
    // スクロール位置に持たせるバッファ
    const buffer = 50;
    const top = rectTop + offsetTop - buffer;

    window.scrollTo({
      top,
      behavior: "smooth"
    });
  }
});