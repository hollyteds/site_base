/**
 * メニューボタンの設定用クラス
 * 一応標準でWAI-ARIA に対応しているのでmicromodalを利用する
 */
import MicroModal from "micromodal";

export default class {

	/**
	 * @param {*} className 
	 * 展開時にルート要素に付与するクラス名
	 * @param {*} id 
	 * メニューボタンに付与するID
	 */
	constructor( className, id) {
		this.className = className;
		this.buttonId = id;
		this.init();
	}

	init() {

		MicroModal.init({
			disableScroll: true,
		});
		
	}

	toggle( elem ) {

		elem.addEventListener('click', () => {
			if (this.hasClassName()) {
				this.close();
			} else {
				this.open();
			}
		});

	}
	
	open() {

		this.addClassName( this.className );
	
		MicroModal.show( this.buttonId, {
			disableScroll: true, // ページスクロールを無効に
			awaitOpenAnimation: true, // 開閉時のアニメーションを可能に
		});
	
	}

	close() {

		// ルート要素で展開時のクラスを持たないなら処理しない
		if (!this.hasClassName()) return;
		
		this.removeClassName( this.className );
	
		MicroModal.close( this.buttonId, {
			awaitCloseAnimation: true
		});
		
	}
	
	hasClassName() {

		return document.documentElement.classList.contains( this.className );
	
	} 

	addClassName(className) {

		document.documentElement.classList.add(className);

	}

	removeClassName(className) {

		document.documentElement.classList.remove(className);
	}

	addCloseEvent(elem) {

		elem.addEventListener('click', () => {
	
			this.close();
	
		});
	
	}
}