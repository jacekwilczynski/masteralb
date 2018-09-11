const gulp = require('gulp');
const beautifyHtml = require('gulp-html-beautify');
const path = require('path');
const modify = require('gulp-modify-file');

const removeComments = content => {
  let modified = content;
  while (modified.indexOf('<!--') >= 0) {
    modified =
      modified.slice(0, modified.indexOf('<!--')) +
      modified.slice(modified.indexOf('-->') + 3);
  }
  return modified;
};

const removeUnwantedLines = content => {
  const lines = content.split('\n');
  const wantedLines = lines.filter(
    line =>
      line.indexOf('meta name="theme-color"') < 0 &&
      line.indexOf('%PUBLIC_URL%') < 0 &&
      line.match(/[^\s\n]/)
  );
  return wantedLines.join('\n');
};

module.exports = function registerHtmlRelatedGulpTasks(baseDir) {
  gulp.task('copyHtml', function() {
    return gulp
      .src('public/index.html')
      .pipe(modify(removeComments))
      .pipe(modify(removeUnwantedLines))
      .pipe(gulp.dest('build'));
  });

  gulp.task('beautifyHtml', function() {
    return gulp
      .src('build/index.html')
      .pipe(beautifyHtml({ indent_size: 2 }))
      .pipe(gulp.dest(path.resolve(baseDir, 'build')));
  });

  gulp.task('processHtml', ['copyHtml']);
};
