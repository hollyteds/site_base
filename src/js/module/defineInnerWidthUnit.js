/**
 * スクロールバーを除いた幅を1/100の単位にするモジュール
 * スクロールバーを除いた幅を取得、CSS変数で出力する
 */

export default (variableName) => {
	const headerWidth = document.querySelector('.l-header').clientWidth;
	const innerWidth = headerWidth / 100;
	const rootDocument = document.documentElement;
	rootDocument.style.setProperty(`--${variableName}`, `${innerWidth}px`);
};