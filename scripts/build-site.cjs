'use strict';
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const out = path.join(root, '.site');
fs.mkdirSync(out, { recursive: true });
fs.cpSync(path.join(root, 'beijing-trip'), out, { recursive: true });
fs.cpSync(path.join(root, 'self-discipline'), path.join(out, 'self-discipline'), { recursive: true });
for (const file of ['index.html', 'self-discipline/index.html', 'self-discipline/app.js', 'self-discipline/style.css']) {
  if (!fs.statSync(path.join(out, file)).isFile()) throw new Error(`Missing output: ${file}`);
}
console.log('Static site built: travel at /, discipline at /self-discipline/');
