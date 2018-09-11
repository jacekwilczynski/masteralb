const gulp = require('gulp');
const flatten = require('gulp-flatten');
const path = require('path');
const fileNames = require('gulp-filenames');
const fs = require('fs');
const modify = require('gulp-modify-file');

module.exports = function registerCssRelatedGulpTasks(baseDir) {
  gulp.task('copyCss', function() {
    return gulp
      .src('src/**/*.css')
      .pipe(flatten())
      .pipe(fileNames('styles'))
      .pipe(gulp.dest('build/styles'));
  });

  gulp.task('groupByModule', ['copyCss'], function() {
    const cssFiles = fileNames.get('styles');
    cssFiles
      .filter(fileName => fileName.indexOf('--') >= 0)
      .forEach(fileName => {
        const moduleName = fileName.slice(0, fileName.indexOf('--'));
        const moduleFolder = path.resolve(
          baseDir,
          'build',
          'styles',
          moduleName
        );
        const filePath = path.resolve(moduleFolder, fileName);
        const moduleFile = path.resolve(
          baseDir,
          'build',
          'styles',
          moduleName + '.css'
        );
        if (!fs.existsSync(moduleFolder)) fs.mkdirSync(moduleFolder);
        fs.renameSync(
          path.resolve(baseDir, 'build', 'styles', fileName),
          filePath
        );
        const moduleCss = fs.readFileSync(moduleFile, 'utf-8');
        const withUpdatedImports = moduleCss.replace(
          new RegExp(fileName),
          `${moduleName}/${fileName}`
        );
        fs.writeFileSync(moduleFile, withUpdatedImports);
      });
  });

  gulp.task('createIndexCss', ['copyCss'], function() {
    const cssFiles = fileNames.get('styles');
    const isTopLevel = fileName => fileName.indexOf('--') < 0;
    fs.writeFileSync(
      path.resolve(baseDir, 'build/styles/index.css'),
      cssFiles
        .filter(isTopLevel)
        .map(fileName => `@import '${fileName}';\n`)
        .join(''),
      'utf-8'
    );
  });

  gulp.task('fixAssetUrls', ['copyCss'], function() {
    return gulp
      .src('build/styles/**/*.css')
      .pipe(
        modify(content =>
          content.replace(/(url\('?)([^)]*)/g, '$1../images/$2')
        )
      )
      .pipe(gulp.dest(path.resolve(baseDir, 'build', 'styles')));
  });

  gulp.task('processCss', [
    'copyCss',
    'createIndexCss',
    'groupByModule',
    'fixAssetUrls'
  ]);
};
