const fs = require('fs');
const http = require('http');
const gulp = require('gulp');
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
  return new Promise(function(resolve) {
    fs.writeFile(
      path.resolve(__dirname, 'build', 'index.html', html, 'utf-8'),
      resolve
    );
  });
}

function runGulp() {
  gulp.parallel(['default']);
}

http
  .createServer(async function(req, res) {
    if (req.method === 'POST') {
      const html = await getRequestBody(req);
      sendResponse(res);
      await saveHtml(html);
      runGulp();
    }
  })
  .listen(5000);
