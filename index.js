'use strict';

const fileReader = require('./lib/readfile.js');
let files = [
  `${__dirname}/assets/one.txt`,
  `${__dirname}/assets/two.txt`,
  `${__dirname}/assets/three.txt`
];

fileReader(files, function(err, data) {
  console.log('my data:', data);
});
