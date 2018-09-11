const gulp = require('gulp');
const beautifyHtml = require('gulp-html-beautify');
const path = require('path');

gulp.task('default', function() {
  return gulp
    .src(path.resolve(__dirname, 'build/index.html'))
    .pipe(beautifyHtml({ indent_size: 2 }))
    .pipe(gulp.dest(path.resolve(__dirname, 'build/')));
});
