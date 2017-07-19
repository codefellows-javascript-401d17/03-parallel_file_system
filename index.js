'use strict';

const fileReader = require('../lib/file-reader.js');

let testFunction = function(path, callback) {
  let arr = [];
  fileReader(`${__dirname}/assets/one.txt`, function(err, data) {
    if (err) throw err;
    console.log('content of my file:1', data.toString());
    arr.push(data.toString());

    fileReader(`${__dirname}/assets/two.txt`, function(err, data) {
      if (err) throw err;
      console.log('content of my file:2', data.toString());
      arr.push(data.toString());

      fileReader(`${__dirname}/assets/three.txt`, function(err, data) {
        if (err) throw err;
        console.log('content of my file:3', data.toString());
        arr.push(data.toString());
        callback();
      });
    });
  });
};
testFunction();
