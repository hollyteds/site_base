# site_base

## 環境構築

### npm install

パッケージのインストール

<aside>
node.jsの推奨版インストールが必要
https://nodejs.org/ja
</aside>

### docker compose up (-d)

docker-compose.ymlを参照する仮想サーバーを立てる

> dockerディレクトリのconfファイルはnginxにphpを連携させるために必要
> 
> 
> ないとphpはダウンロード扱いになってしまう
> 

<aside>
💡 dockerのインストールが必要
【Windows】
https://docs.docker.jp/docker-for-windows/install.html
【mac OS】
https://docs.docker.jp/docker-for-mac/install.html

</aside>

## ビルドコマンド

### npm run build

distディレクトリに以下すべてのデータをビルド

HTML/JS(minify)/CSS(minify)/画像（WEBP含む）/font

### npm run ejs-css

HTMLとCSS(minify)をビルド生成する

### npm run js

JSを圧縮なしでビルド

### npm run js:min

JS(minify)をビルド

### npm run ejs

HTMLデータをビルド

### npm run css

cssを圧縮なしでビルド

### npm run css:min

css(minify)をビルド）

### npm run img

画像の圧縮とWEBPを出力

## ディレクトリ構成

```jsx
src
├── ejs
│   ├── index.ejs 
│   ├── module
│   │   └── _picture.ejs // imgタグの出力用
│   └── template-parts **// 共通テンプレート**
│       ├── _footer.ejs // フッター
│       ├── _header.ejs // ヘッダー
│       └── _main.ejs // メインコンテンツ
├── fonts // icomoonを使う場合はここに格納する（今はSVGで対応する方が楽）
│   ├── icomoon.eot
│   ├── icomoon.svg
│   ├── icomoon.ttf
│   └── icomoon.woff
├── images //画像はここに格納
├── js
│   ├── main.js
│   └── module
│       ├── Accordion.js // アコーディオンのオブジェクトクラス
│       ├── defineInnerWidthUnit.js // スクロールバーを除いた1/100の単位を定義する
│       ├── fixViewport.js // ビューポート切替モジュール(スモールデバイス対策)
│       ├── loadWebFont.js // GoogleWebfont非同期読み込みモジュール
│       ├── MenuButton.js // メニューボタン実装用オブジェクトクラス
│       ├── observeNavigation.js //今は使わない
│       ├── ScrollObserver.js // 特定の要素を監視してヘッダーにクラスを追加するオブジェクトクラス
│       ├── setAnimation.js //CSSアニメーションの発火設定用モジュール
│       └── setGSAPAnimation.js // GSAPアニメーション設定モジュール
└── scss
    ├── component
    │   ├── _footer.scss
    │   ├── _header.scss
    │   └── _index.scss
    ├── foundation
    │   ├── _body.scss
    │   ├── _index.scss
    │   ├── _reset.scss
    │   └── _root.scss
    ├── global
    │   ├── _index.scss
    │   ├── mixin
    │   │   ├── _content.scss
    │   │   ├── _hover.scss
    │   │   ├── _index.scss
    │   │   ├── _media.scss
    │   │   └── _utility.scss
    │   └── settings
    │       ├── _icomoon.scss //無効化中
    │       ├── _index.scss
    │       ├── _keyframes.scss //無効化中
    │       └── _variable.scss
    ├── layout
    │   └── _index.scss
    ├── main.scss
    ├── project
    │   ├── _footer.scss
    │   ├── _header.scss
    │   └── _index.scss
    ├── swiper-bundle.min.scss
    └── utility
        ├── _color.scss
        ├── _flex.scss //無効化中
        ├── _font.scss
        ├── _index.scss
        ├── _interaction.scss //無効化中
        ├── _margin.scss
        ├── _media.scss
        ├── _position.scss //無効化中
        └── _size.scss //無効化中
```

### メディアクエリ

```jsx
default
sp →　screen and (max-width: 767px)
tab →　screen and (min-width: 768px)
pc →　screen and (min-width: 1200px)
```

## remの初期値

```jsx
defalut → 1rem = 10px
 ※font-sizeはbody要素で1.6rem → 16px
sp.     → 1rem = 7.5px
 ※font-sizeはbody要素で1.6rem → 12px
```

### 余白

```jsx
$spaceEndValueで繰り返し数を設定

default
$spaceEndValue = 20

クラス名の10 = 1rem
mt{number} 10～200 (10ずつ)　→　margin-top
mb{number} 10～200 (10ずつ)　→　margin-bottom //無効化
pt{number} 10～200 (10ずつ)　→　padding-top //無効化
pb{number} 10～200 (10ずつ)　→　padding-bottom //無効化
mAuto = margin auto

※末尾に-{mediasize}でスタイル上書き
mt10-{mediasize}

※mt以外ほぼ使ってないのでデフォルトでは無効化
```

### 色指定

```jsx
bg-{color} //背景色
txt-{color} //文字色
bdr-{color} //線の色
```

### 文字配置

```jsx
alignCenter
alignLeft
alignRight
alignJustify

※末尾に-{mediasize}でスタイル上書き
alignCenter-{mediasize}
```

### 文字関係

```jsx
サイズ
fs{number} 10~50
fs10 = 1rem
fs16 = 1.6rem = 16px

ウエイト
fw{number} 1~9

行間
lh{number} 0~20

※lhのみ末尾に-{mediasize}でスタイル上書き
lh10-{mediasize}

文字間
ls{number} -10~10
```

### 表示切替

```jsx
u-disp-{mediasize}  　→　display block
u-inline-{mediasize}　→　display inline
u-ib-{mediasize}      →　display inline-block
u-none-{mediasize}　  →　display none
u-flex-{mediasize}    →　display flex
u-grid-{mediasize}    →　display grid
```