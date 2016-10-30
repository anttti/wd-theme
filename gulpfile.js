'use strict';

var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var supported = [
  'last 2 versions',
  'safari >= 8',
  'ie >= 10',
  'ff >= 20',
  'ios 6',
  'android 4'
];

gulp.task('css', function(){
  return gulp.src(['./wp-content/themes/webbidevaus/src/sass/**/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(cssnano({
      autoprefixer: { browsers: supported, add: true }
    }))
    .pipe(gulp.dest('./wp-content/themes/webbidevaus/'));
});

gulp.task('watch', function(){
  gulp.watch('./wp-content/themes/webbidevaus/src/sass/**/*.scss', ['css']);
});

gulp.task('default', ['css', 'watch']);