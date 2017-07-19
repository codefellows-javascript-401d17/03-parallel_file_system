'use strict';

const readFiles = require('../lib/file-reader.js');
const paths = [
  `${__dirname}/assests/one.txt`,
  `${__dirname}/assests/two.txt`,
  `${__dirname}/assests/three.txt`
];

readFiles(paths);