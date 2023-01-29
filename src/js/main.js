import loadWebFont from "./module/loadWebFont"; //GoogleWebfontの遅延読み込み
import FixHeader from "./module/FixHeader"; //スクロール時の固定フッター設定用インスタンス
import setGsapAnimation from "./module/setGsapAnimation"; //GSAPアニメーションを設定するモジュール

// css用アニメーションを設定する場合はsetAnimationモジュールを使う
// import observeAnimation from "./module/setAnimation";

//これはいらないかも
//import observeNav from "./module/observeNavigation";

import MenuButton from "./module/MenuButton"; //メニューボタンの発火モジュール
import Accordion from "./module/Accordion"; //アコーディオンの設定用インスタンス
import switchViewport from "./module/fixViewport"; //スモールデバイス用対策モジュール
import SmoothScroll from "smooth-scroll";
// import Swiper, { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper';

 //Googleフォントの指定 (Array)
const WebFont = ['Source+Sans+Pro','Noto+Serif+JP'];

const minWindowWidth = 375; //最小ウインドウ幅

//スライダー（swiper）
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

// メニューボタン
// const menuButton = document.getElementById('menu-button');
// const overlay = document.getElementById('overlay');
// const menuElement = document.getElementById('global-nav');
// const menuLinkElements = menuElement.querySelectorAll('a');
// const navMenu = new MenuButton('is-nav-open', 'menu-button' );

// navMenu.toggle(menuButton);
// navMenu.addCloseEvent(overlay);
// menuLinkElements.forEach(elem => { navMenu.addCloseEvent(elem); });

//スムーススクロール
new SmoothScroll('a[href*="#"]',{
  header: '[data-scroll-header]',
	speed: 150,
	updateURL: false, 
	//speedAsDuration: true,
});

//固定ヘッダー
const observedElement = document.getElementById('content');
new FixHeader(observedElement);

//アコーディオン
const AcBtns = document.querySelectorAll(".js-btn"); //ボタン
const AcDatas = document.querySelectorAll(".js-data"); //開かせる要素
new Accordion(AcBtns, AcDatas);


//イベント **********************************************************

//ぺージロード時に処理
document.addEventListener("DOMContentLoaded", () => {
	loadWebFont( WebFont );
	setGsapAnimation();
	switchViewport(minWindowWidth);
}, false);

// リサイズ時に処理
window.addEventListener('resize', () => {
	switchViewport( minWindowWidth );
}, false);