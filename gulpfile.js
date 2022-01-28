const gulp = require('gulp')
const gulpDartSass = require('gulp-dart-sass')
const sassGlob = require('gulp-sass-glob-use-forward')

const sass = () => {
  return gulp
    .src('src/scss/**/*.scss')
    .pipe(sassGlob())
    .pipe(gulpDartSass())
    .pipe(gulp.dest('dist/css'))
}
exports.sass = sass