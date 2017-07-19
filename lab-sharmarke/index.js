'use strict';

const fs = require('fs');

console.log('dirname:', __dirname);

fs.readFile(`${__dirname}/assets/one.txt`, function(err, data) {
  if (err) throw err;
  console.log('og file:', data.toString());

  fs.readFile(`${__dirname}/assets/two.txt`, function(err, data) {
    if (err) throw err;
    console.log('og file:', data.toString());

    fs.readFile(`${__dirname}/assets/three.txt`, function(err, data) {
      if (err) throw err;
      console.log('og file:', data.toString());
    });
  });
});
