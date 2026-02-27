const fs = require('fs');
const path = require('path');
const out = path.join(__dirname, '..', 'out');
const indexHtml = path.join(out, 'index.html');
const notFoundHtml = path.join(out, '404.html');
if (fs.existsSync(indexHtml)) {
  fs.copyFileSync(indexHtml, notFoundHtml);
  console.log('Copied out/index.html to out/404.html for client-side fallback.');
} else {
  console.warn('out/index.html not found; skipping 404 copy.');
}
