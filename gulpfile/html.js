const gulp = require('gulp');
const beautifyHtml = require('gulp-html-beautify');
const path = require('path');

module.exports = function registerHtmlRelatedGulpTasks(baseDir) {
  gulp.task('beautifyHtml', function() {
    return gulp
      .src('build/index.html')
      .pipe(beautifyHtml({ indent_size: 2 }))
      .pipe(gulp.dest(path.resolve(baseDir, 'build')));
  });

  gulp.task('processHtml', ['beautifyHtml']);
};
