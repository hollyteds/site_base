/**
 * 指定の幅以下のデバイスのviewportを固定
*/

export default ( minWidth = 375 ) => {
	
 	const viewport = document.querySelector('meta[name="viewport"]');
 	const value = window.outerWidth > minWidth ? `width=device-width,initial-scale=1` :	`width=${minWidth}`;
	
	if (viewport.getAttribute('content') !== value) viewport.setAttribute('content', value);
	
 }