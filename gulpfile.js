const gulp = require("gulp")

//開発モードと本番モード
const mode = require("gulp-mode")({
  modes: ["production", "development"],
  default: "development",
  verbose: false,
})

//sass用パッケージの読込み
const gulpDartSass = require("gulp-dart-sass")
const sassGlob = require("gulp-sass-glob-use-forward")
const autoprefixer = require("gulp-autoprefixer")
const sourcemaps = require("gulp-sourcemaps")
const cleanCSS = require("gulp-clean-css")
const mediaQueries = require("gulp-group-css-media-queries")

const paths = {
  srcDir: "./src/scss",
  dstDir: "./dist/css",
}

//sassの処理
const sass = () => {
  return gulp
    .src(paths.srcDir + "/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(gulpDartSass())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(mediaQueries())
    .pipe(mode.development(sourcemaps.write()))
    .pipe(mode.production(cleanCSS()))

    .pipe(gulp.dest(paths.dstDir))
}
exports.sass = sass

//EJS用パッケージの読込み
const rename = require("gulp-rename")
const ejs = require("gulp-ejs")
const replace = require("gulp-replace")

//EJSの処理
gulp.task("ejs", (done) => {
	gulp
		.src(["ejs/**/*.ejs", "!" + "ejs/**/_*.ejs"])
		.pipe(ejs({}, {}, {ext:'.html'}))
		.pipe(rename({ extname: ".html" }))
		.pipe(gulp.dest("./"))
	done()
})