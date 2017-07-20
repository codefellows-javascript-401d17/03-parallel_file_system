'use strict';

const getBytes = require('./lib/get-bytes.js');

let files = [`${__dirname}/assets/one.txt`, `${__dirname}/assets/two.txt`, `${__dirname}/assets/three.txt`];

getBytes(files, 8, function(err, data) {
  data.forEach(d => console.log(d));
});