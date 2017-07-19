'use strict';

const filereader = require('../03-parallel_file_system/lib/file-reader.js');

var filePaths = [`${__dirname}/assets/one.txt`,`${__dirname}/assets/two.txt`, `${__dirname}/assets/three.txt`];

var printHexInOrder = (err) => {
  if(err) throw err;
  filePaths.map((path) => {
    console.log(path);
    console.log(fileReader(path));
  });
};

printHexInOrder();
