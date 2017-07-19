'use strict';

const fs = require('fs');
const fileReader = require('../03-parallel_file_system/lib/file-reader.js');
//
// var filePaths = [`${__dirname}/assets/one.txt`,`${__dirname}/assets/two.txt`, `${__dirname}/assets/three.txt`];
//
// var printHexInOrder = (err) => {
//   if(err) throw err;
//   filePaths.map((path) => {
//     fs.fileReader();
//   });
// };
//
// printHexInOrder();

fileReader(`${__dirname}/assets/one.txt`, function(err, data){
  console.log(data);
  fileReader(`${__dirname}/assets/two.txt`, function(err, data){
    console.log(data);
    fileReader(`${__dirname}/assets/three.txt`, function(err, data){
      console.log(data);

    });
  });
});
