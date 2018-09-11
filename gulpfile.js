const gulp = require('gulp');
const beautifyHtml = require('gulp-html-beautify');
const flatten = require('gulp-flatten');
const path = require('path');

gulp.task('beautifyHtml', function() {
  return gulp
    .src(path.resolve(__dirname, 'build/index.html'))
    .pipe(beautifyHtml({ indent_size: 2 }))
    .pipe(gulp.dest(path.resolve(__dirname, 'build/')));
});

gulp.task('copyCss', function() {
  return gulp
    .src('src/**/*.css')
    .pipe(flatten())
    .pipe(gulp.dest('build/styles'));
});

gulp.task('default', ['beautifyHtml', 'copyCss']);
