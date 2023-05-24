// import

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';


export default () => {

	gsap.registerPlugin(ScrollTrigger);

	// アニメーション **********************************************************

	const baseValue = {
		duration: 0.8,
		delay: 0.3
	};

	const animations = [
		{
			classeName: ".animated.fadeIn", setting: { scale: 0.9 }
		},
		{
			classeName: ".animated.fadeInUp", setting: { y: 100, scale: 0.9 }
		},
		{
			classeName: ".animated.fadeInLeft", setting: { x: -100, skewX: 5 }
		},
		{
			classeName: ".animated.fadeInRight", setting: { x: 100, skewX: -5 }
		},
	];

	window.addEventListener("DOMContentLoaded", () => {
  
		animations.forEach((animation) => {

			gsap.utils.toArray(animation.classeName).forEach((el) => {
      
				gsap.from(el,
					{
						...{
							duration: baseValue.duration,
							delay: baseValue.delay,
							autoAlpha: 0,
							ease: "power4.out",
							// スクロールトリガーの設定
							scrollTrigger: {
								trigger: el, // 対象物
								end: 'bottom+=50 top' // 要素のbottomを下方向に200px
							},
						},
						...animation.setting
        
					});
			});

		});

	});

};