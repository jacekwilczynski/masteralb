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

gulp.task('groupByModule', ['copyCss'], function() {
  const cssFiles = fileNames.get('styles');
  cssFiles.filter(fileName => fileName.indexOf('--') >= 0).forEach(fileName => {
    const moduleFolder = path.resolve(
      __dirname,
      'build',
      'styles',
      fileName.slice(0, fileName.indexOf('--'))
    );
    if (!fs.existsSync(moduleFolder)) fs.mkdirSync(moduleFolder);
    fs.renameSync(
      path.resolve(__dirname, 'build', 'styles', fileName),
      path.resolve(moduleFolder, fileName)
    );
  });
});

gulp.task('createIndexCss', ['copyCss'], function() {
  const cssFiles = fileNames.get('styles');
  const isTopLevel = fileName => fileName.indexOf('--') < 0;
  fs.writeFileSync(
    path.resolve(__dirname, 'build/styles/index.css'),
    cssFiles
      .filter(isTopLevel)
      .map(fileName => `@import '${fileName}';\n`)
      .join(''),
    'utf-8'
  );
});

gulp.task('processCss', ['copyCss', 'createIndexCss', 'groupByModule']);

gulp.task('default', ['beautifyHtml', 'processCss']);
