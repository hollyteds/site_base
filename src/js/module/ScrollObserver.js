/**
 * ヘッダーを可変させるためのクラスオブジェクト
 */

export default class ScrollObserver {

  /**
   * @param {element} observedElement 
   * 監視する対象の要素、l-scrollObserverなど
   * @param {string} className  (option)
   * イベントを検知した時にルート要素に追加するクラス名
   * @param {object} observerOptions (option)
   * 交差オブザーバーの設定
   */
  constructor( observedElement, className = 'is-scrolled', observerOptions ) {
  
    this.className = className;
    this.targetClassList = document.documentElement.classList;
    this.observedElement = observedElement;
  
    this.observerOptions = {
      ...{
        root: null,
        rootMargin: '0px',
        threshold: 0
      },
      ...observerOptions
    };
    this.init();
  }
  
  init() {

    this.observer = new IntersectionObserver(entries => {

      entries.forEach(entry => {

        if (!entry.isIntersecting) {

          this.setClassName();

        } else {

          this.removeClassName();

        }

      });

    }, this.observerOptions);

    this.observer.observe(this.observedElement);
  }

  /**
   * ルート要素にクラス名をセット
   */
  setClassName() {
    this.targetClassList.add(this.className);
  }

  /**
   * ルート要素からクラス名を除去
   */
  removeClassName() {

    this.targetClassList.remove(this.className);

  }
}