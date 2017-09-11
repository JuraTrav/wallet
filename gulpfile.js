'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');
let rename = require('gulp-rename');
let cleanCSS = require('gulp-clean-css')

gulp.task('build-sass', () => {
  return gulp.src('./src/styles/sass/main.scss')
                .pipe(sass().on('error', sass.logError))
                .pipe(cleanCSS())
                .pipe(rename({suffix: '.min'}))
                .pipe(gulp.dest('./src/styles/dest'))
});

gulp.task('sass:watch', () => {
  gulp.watch('./src/styles/sass/**/*.scss', ['build-sass']);
});

gulp.task('watch-sass', ['build-sass', 'sass:watch']);
