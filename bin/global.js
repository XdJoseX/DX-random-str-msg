#!/usr/bin/env node

let random = require('../src/index.js');

if (typeof random === 'object' && typeof random.funnyCommit === 'function') {
  random.funnyCommit();
} else {
  console.error('Error: Invalid object or missing function');
}