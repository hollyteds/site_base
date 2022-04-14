// import
import "./module/webFont";
import { observeAnimation } from "./module/setAnimation";
import { observeNav } from "./module/observeNavigation";
import { openGlobalNavigation, removeClassOnHTML } from "./module/openGlobalNavigation";
import { Accordion } from "./module/accordion";
import { switchViewport } from "./module/fixViewport";
import SmoothScroll from "smooth-scroll";
import Swiper, { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper';

//スライダー（swiper）
const swiper = new Swiper(".mySwiper", {
	modules: [Navigation, Pagination, Autoplay,Scrollbar],
	slidesPerView: 3,
	spaceBetween: 15,
	autoplay: {
		delay: 1500,
  },
	/*
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		700: {
      slidesPerView: 5,
      spaceBetween: 30
    }
  }*/
});

//スムーススクロール
new SmoothScroll('a[href*="#"]',{
  header: '[data-scroll-header]',
	speed: 150,
	updateURL: false, 
	//speedAsDuration: true,
});

//アコーディオン
const AcBtns = document.querySelectorAll(".js-btn"); //ボタン
const AcDatas = document.querySelectorAll(".js-data"); //開かせる要素
const acToggle = new Accordion(AcBtns, AcDatas);

//ナビメニュー
const menuLinkElement = ".js-nav-menu a";
const addOpenClassName = "is-open";
const menuBtnId = "menu-btn";
const overlayId = "overlay";

// ぺージロード時に処理
document.addEventListener("DOMContentLoaded", () => {
	observeAnimation();
	observeNav();
	openGlobalNavigation(menuLinkElement, addOpenClassName, menuBtnId, overlayId);
	switchViewport();
}, false);

// リサイズ時に処理
document.addEventListener('resize', () => {
	switchViewport();
	removeClassOnHTML( addOpenClassName );
}, false);