/* GoogleWebfontの遅延読み込み */
import loadWebFont from "./module/loadWebFont";

/* GSAPアニメーションを設定するモジュール */
import setGsapAnimation from "./module/setGsapAnimation";

/*  スクロールオブザーバー */
import ScrollObserver from "./module/ScrollObserver";

/* スクロールバーを除いた幅を1/100の単位にするモジュール */
// import defineInnerWidthUnit from "./module/defineInnerWidthUnit";

/* css用アニメーションを設定用モジュール */
// import observeAnimation from "./module/setAnimation";

/* ナビゲーションに現在地置を反映させる */
// import observeNav from "./module/observeNavigation";

/* メニューボタンの発火モジュール */
// import MenuButton from "./module/MenuButton"; 

/* アコーディオンの設定用インスタンス */
import Accordion from "./module/Accordion";

/* スモールデバイス用対策モジュール */
import switchViewport from "./module/fixViewport";

/* スムーススクロール */
import SmoothScroll from "smooth-scroll";

// スライダー
// import Swiper, { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper';

 // Googleフォントの指定 (Array)
const WebFont = ['Source+Sans+Pro','Noto+Serif+JP'];

const minWindowWidth = 375; // 最小ウインドウ幅

// スライダー（swiper）
// const swiper = new Swiper(".mySwiper", {
// 	modules: [Navigation, Pagination, Autoplay,Scrollbar],
// 	slidesPerView: 3,
// 	spaceBetween: 15,
// 	autoplay: {
// 		delay: 1500,
//   },
// 	navigation: {
// 		nextEl: ".swiper-button-next",
// 		prevEl: ".swiper-button-prev",
// 	},
// 	pagination: {
// 		el: ".swiper-pagination",
// 		clickable: true,
// 	},
// 	breakpoints: {
// 		700: {
//       slidesPerView: 5,
//       spaceBetween: 30
//     }
//   }
// });

/* メニュー周りのエレメント定義 */
// const menuButton = document.getElementById('menu-button');
// const overlay = document.getElementById('overlay');
// const menuElement = document.getElementById('global-nav');
// const menuLinkElements = menuElement.querySelectorAll('a');
// const navMenu = new MenuButton('is-nav-open', 'menu-button' );

// navMenu.toggle(menuButton);
// navMenu.addCloseEvent(overlay);
// menuLinkElements.forEach(elem => { navMenu.addCloseEvent(elem); });

/* スムーススクロール */
new SmoothScroll('a[href*="#"]',{ // eslint-disable-line
  header: '[data-scroll-header]',
	speed: 150,
	updateURL: false, 
	// speedAsDuration: true,
});

/* 固定ヘッダー */
const observedElement = document.getElementById('content');
new ScrollObserver(observedElement, 'is-fixed-header', { rootMargin: "0% 0% -90%" }); // eslint-disable-line

/* アコーディオン */
const AcBtns = document.querySelectorAll(".js-btn"); // ボタン
const AcDatas = document.querySelectorAll(".js-data"); // 開かせる要素
new Accordion(AcBtns, AcDatas); // eslint-disable-line

// イベント **********************************************************

// ぺージロード時に処理
document.addEventListener("DOMContentLoaded", () => {
	loadWebFont( WebFont );
	setGsapAnimation();
	switchViewport(minWindowWidth);
	// defineInnerWidthUnit('ix');
}, false);

// リサイズ時に処理
window.addEventListener('resize', () => {
	switchViewport(minWindowWidth);
	// defineInnerWidthUnit('ix');
}, false);