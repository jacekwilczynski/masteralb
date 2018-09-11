const fs = require('fs-extra');
const http = require('http');
const gulp = require('gulp');
const path = require('path');
require('./gulpfile');

function getRequestBody(req) {
  return new Promise(function(resolve) {
    let body = '';
    req.on('data', function(chunk) {
      body += chunk.toString();
    });
    req.on('end', () => resolve(body));
  });
}

function sendResponse(res) {
  res.statusCode = 200;
  res.end();
}

function saveHtml(html) {
  const buildDir = path.resolve(__dirname, 'build');
  if (fs.existsSync(buildDir)) fs.removeSync(buildDir);
  fs.mkdirSync(buildDir);
  const targetFile = path.resolve(buildDir, 'root.html');
  console.log('Saving html to ' + targetFile);
  return fs.writeFile(targetFile, html, 'utf-8');
}

function runGulp() {
  gulp.start('default');
}

http
  .createServer(async function(req, res) {
    if (req.method === 'POST') {
      const html = await getRequestBody(req);
      console.log('Got html.');
      sendResponse(res);
      await saveHtml(html);
      console.log('Saved html. Running gulp...');
      runGulp();
    }
  })
  .listen(5000, function() {
    console.log('Build server listening on port 5000.');
  });
