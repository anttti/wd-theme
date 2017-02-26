const gulp = require('gulp');
const cssnano = require('gulp-cssnano');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

const supported = [
  'last 2 versions',
  'safari >= 8',
  'ie >= 10',
  'ff >= 20',
  'ios 6',
  'android 4',
];

gulp.task('css', () => {
  return gulp.src(['./webbidevaus/src/sass/**/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(cssnano({
      autoprefixer: { browsers: supported, add: true }
    }))
    .pipe(gulp.dest('./webbidevaus/'));
});

gulp.task('watch', () => {
  gulp.watch('./webbidevaus/src/sass/**/*.scss', ['css']);
});

gulp.task('default', ['css', 'watch']);
