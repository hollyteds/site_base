const gulp = require("gulp")
const gulpDartSass = require("gulp-dart-sass")
const sassGlob = require("gulp-sass-glob-use-forward")
const autoprefixer = require("gulp-autoprefixer")
const sourcemaps = require("gulp-sourcemaps")
const cleanCSS = require("gulp-clean-css");
const mediaQueries = require("gulp-group-css-media-queries")
const mode = require("gulp-mode")({
  modes: ["production", "development"],
  default: "development",
  verbose: false,
});

const paths = {
  srcDir: "./src/scss",
  dstDir: "./dist/css",
};

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