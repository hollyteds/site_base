// import
import "./module/webFont";
import "./module/setAnimation";
import "./module/fixViewport";
import SmoothScroll from "smooth-scroll";
/*import Swiper, { Navigation, Pagination, Autoplay,Scrollbar } from 'swiper';

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
});*/

const scroll = new SmoothScroll('a[href*="#"]',{
  header: '[data-scroll-header]'
});