const gulp = require('gulp');
const beautifyHtml = require('gulp-html-beautify');
const path = require('path');
const flatten = require('gulp-flatten');
require('./gulpfile/css')(__dirname);

gulp.task('beautifyHtml', function() {
  return gulp
    .src(path.resolve(__dirname, 'build', 'index.html'))
    .pipe(beautifyHtml({ indent_size: 2 }))
    .pipe(gulp.dest(path.resolve(__dirname, 'build')));
});

gulp.task('copyImages', function() {
  return gulp
    .src(path.resolve(__dirname, 'src/**/*.{png,jpg,jpeg,gif,webp,svg}'))
    .pipe(flatten())
    .pipe(gulp.dest(path.resolve(__dirname, 'build', 'images')));
});

gulp.task('copyFavIcon', function() {
  return gulp
    .src('public/favicon.ico')
    .pipe(gulp.dest(path.resolve(__dirname, 'build')));
});

gulp.task('default', [
  'beautifyHtml',
  'processCss',
  'copyImages',
  'copyFavIcon'
]);
