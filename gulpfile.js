const gulp = require('gulp');
const beautifyHtml = require('gulp-html-beautify');
const path = require('path');
require('./gulpfile/css')(__dirname);

gulp.task('beautifyHtml', function() {
  return gulp
    .src(path.resolve(__dirname, 'build/index.html'))
    .pipe(beautifyHtml({ indent_size: 2 }))
    .pipe(gulp.dest(path.resolve(__dirname, 'build/')));
});

gulp.task('default', ['beautifyHtml', 'processCss']);
