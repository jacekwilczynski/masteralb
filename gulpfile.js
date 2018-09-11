const gulp = require('gulp');
const path = require('path');
const flatten = require('gulp-flatten');
require('./gulpfile/html')(__dirname);
require('./gulpfile/css')(__dirname);

gulp.task('copyImages', function() {
  return gulp
    .src('src/**/*.{png,jpg,jpeg,gif,webp,svg}')
    .pipe(flatten())
    .pipe(gulp.dest(path.resolve(__dirname, 'build', 'images')));
});

gulp.task('copyMeta', function() {
  return gulp
    .src(['public/favicon.ico', 'public/manifest.json'])
    .pipe(gulp.dest(path.resolve(__dirname, 'build')));
});

gulp.task('default', ['processHtml', 'processCss', 'copyImages', 'copyMeta']);
