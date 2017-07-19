'use strict';

const readFiles = require('lib/file-reader.js');
const paths = [
  `${__dirname}/assets/one.txt`,
  `${__dirname}/assets/two.txt`,
  `${__dirname}/assets/three.txt`
]

readFiles(paths);
