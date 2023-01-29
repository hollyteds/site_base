/**
 * ヘッダーを可変させるためのクラスオブジェクト
 */

export default class FixHeader {

/**
 * @param {*} observedElement 
 * 監視する対象の要素、主にファーストビュー以外のコンテンツラッパーの指定を意図してます
 * @param {*} className  (Option)
 * イベントを検知した時にルート要素に追加するクラス名
 */
  constructor(observedElement, className = 'is-header-fix') {

    this.className = className;
    this.targetClassList = document.documentElement.classList;
    this.observedElement = observedElement;

    this.observerOptions = {
      root: null,
      rootMargin: "0% 0% -90%",
      threshold: 0
    };

    this.init();
  }

  init() {

    this.observer = new IntersectionObserver(entries => {

      entries.forEach(entry => {

        if (entry.intersectionRatio > 0) {

          this.setHeader();

        } else {

          this.removeHeader();

        }

      });

    }, this.observerOptions);

    this.observer.observe(this.observedElement);
  }

  setHeader() {
    this.targetClassList.add(this.className);
  }

  removeHeader() {

    this.targetClassList.remove(this.className);

  }
}