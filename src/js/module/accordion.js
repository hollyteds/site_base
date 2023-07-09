/**
 * Accordion
 * AcDatasの要素にはスタイルを設定しないこと
 * paddingとかのスタイルはその子要素に設定する
 */

export default class {
  /**
   * @param {*} AcBtns 
   * 発火対象のelement 
   * @param {*} AcDatas
   * 開閉させるエレメント、
   */
  constructor(AcBtns, AcDatas) {

    // アコーディオン対象が１つも取得できない場合は実行しない
    if (AcBtns.length === 0 || AcDatas.length === 0) return;
    
    this.isResize = true;
    this.w = window.innerWidth;
    this.HeightArray = [];
    this.AcBtns = AcBtns;
    this.AcDatas = AcDatas;

    this.onSwitch = this.onSwitch.bind(this);
    this.init();

  }

  /**
   * アコーディオン対象のElmentの初期スタイル
   */
  setStyle() {
    this.AcDatas.forEach(ele => {
      const h = ele.children[0].clientHeight;
      ele.style.height = 0;
      ele.style.overflow = "hidden";
      ele.style.transition = "height 0.2s";
      this.HeightArray.push(h);
    });
  }

  /**
   * 全てのボタンを閉じる
   */
  onAllSwitch() {
    this.AcBtns.forEach(ele => {
      const parent = ele.parentNode;
      const next = ele.nextElementSibling;
      if (parent.classList.contains("is-open")) {
        next.style.height = 0;
        parent.classList.remove("is-open");
      }
    });
  }

  /**
   * ボタンを押した時の処理
   * @param {*} ele 
   * @param {*} i 
   */
  onSwitch(ele, i) {
    const parent = ele.parentNode;
    const next = ele.nextElementSibling;

    if (parent.classList.contains("is-open")) {
      this.onAllSwitch();
      next.style.height = 0;
      parent.classList.remove("is-open");
    } else {
      this.onAllSwitch();
      parent.classList.add("is-open");
      next.style.height = this.HeightArray[i] + "px";
    }
  }

  /**
   * リサイズされた時の処理
   */
  onResize() {
    this.HeightArray.length = 0;

    this.AcDatas.forEach(ele => {
      const h = ele.children[0].clientHeight;
      if (ele.parentNode.classList.contains("is-open")) ele.style.height = h + "px";
      this.HeightArray.push(h);
    });
    this.w = window.innerWidth;
  }

  /**
   * 初期処理
   */
  init() {
    this.setStyle();

    window.addEventListener("resize", e => {
      if (this.isResize) {
        requestAnimationFrame(() => {
          this.isResize = true;
          if (this.w !== window.innerWidth) {
            this.onResize();
          }
        });
        this.isResize = false;
      }
    });

    this.AcBtns.forEach((ele, i) => {
      ele.addEventListener("click", e => {
        this.onSwitch(ele, i);
      });
    });

    // 一つ目のアコーディオンを開いておく
    this.onSwitch(this.AcBtns[0], 0);
  }

}