const gulp = require('gulp');
const beautifyHtml = require('gulp-html-beautify');
const flatten = require('gulp-flatten');
const path = require('path');
const fileNames = require('gulp-filenames');
const fs = require('fs');

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
    .pipe(fileNames('styles'))
    .pipe(gulp.dest('build/styles'));
});

gulp.task('createIndexCss', ['copyCss'], function() {
  const cssFiles = fileNames.get('styles');
  fs.writeFileSync(
    path.resolve(__dirname, 'build/styles/index.css'),
    cssFiles
      .filter(fileName => fileName.indexOf('--') < 0)
      .map(fileName => `@import '${fileName}';\n`)
      .join(''),
    'utf-8'
  );
});

gulp.task('default', ['beautifyHtml', 'createIndexCss']);
