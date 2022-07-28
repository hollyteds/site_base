const gulp = require("gulp")

//開発モードと本番モード
const mode = require("gulp-mode")({
  modes: ["production", "development"],
  default: "development",
  verbose: false,
})

//sass用パッケージの読込み
const gulpDartSass = require("gulp-dart-sass")
const gulpPostcss = require('gulp-postcss')
const sassGlob = require("gulp-sass-glob-use-forward")
const autoprefixer = require("gulp-autoprefixer")
const sourcemaps = require("gulp-sourcemaps")
const cleanCSS = require("gulp-clean-css")
const mediaQueries = require("gulp-group-css-media-queries")
const cssSorter = require('css-declaration-sorter')
 
//EJS用パッケージの読込み
const rename = require("gulp-rename")
const gulpEJS = require("gulp-ejs")

//画像圧縮
const imagemin = require('gulp-imagemin')


// 変換元パス
const srcBase = './src';
const srcPath = {
  'scss': srcBase + '/scss/**/*.scss',
  'ejs': [ srcBase + '/ejs/**/*.ejs', "!" + srcBase + "/ejs/**/_*.ejs" ],
  'img': [ srcBase + '/img/**/*.jpg', srcBase + '/img/**/*.gif', srcBase + '/img/**/*.png', srcBase + '/img/**/*.svg'],
  'font': srcBase + '/fonts/*'
};

// 出力用パス
const distBase = './dist';
const distPath = {
  'css': distBase + '/css',
  'html': distBase,
  'img': distBase + '/img',
  'font': distBase + '/fonts'
};
 
//sassの処理
const sass = () => {
  return gulp
    .src(srcPath.scss)
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(gulpDartSass())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulpPostcss([cssSorter({order: 'smacss'})]))
    .pipe(mediaQueries())
    .pipe(mode.development(sourcemaps.write()))
    .pipe(mode.production(cleanCSS()))
    .pipe(gulp.dest(distPath.css))
}
exports.sass = sass

//ejsの処理
const ejs = () => {
  return gulp
    .src(srcPath.ejs)
    .pipe(gulpEJS({}, {}, {
      ext: '.html'
    }))
    .pipe(rename({ extname: ".html" }))
    .pipe(gulp.dest(distPath.html))
}
exports.ejs = ejs

//imageの複製
const img = () => {
  return gulp
  .src(srcPath.img)
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 75, progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
		.pipe(gulp.dest(distPath.img))
    // .src(srcPath.img)
    // .pipe(gulp.dest(distPath.img))
}
exports.img = img

//fontの複製
const font = () => {
  return gulp
    .src(srcPath.font)
    .pipe(gulp.dest(distPath.font))
}
exports.font = font

//watch
const watch = () => {
  return [
    gulp.watch(srcPath.scss, sass),
    gulp.watch(srcPath.ejs, ejs),
    gulp.watch(srcPath.img, img),
    gulp.watch(srcPath.font, font)
  ]
}
exports.watch = watch