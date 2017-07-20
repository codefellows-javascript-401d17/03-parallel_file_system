'use strict';

const fileReader = require('../03-parallel_file_system/lib/file-reader.js');


let orderHexBytes = module.exports = (callback) => {
  let hexArray = [];
  fileReader(`${__dirname}/assets/one.txt`, function(err, data){
    console.log(data);
    hexArray.push(data);
    fileReader(`${__dirname}/assets/two.txt`, function(err, data){
      console.log(data);
      hexArray.push(data);
      fileReader(`${__dirname}/assets/three.txt`, function(err, data){
        console.log(data);
        hexArray.push(data);
        callback(hexArray);
      });
    });
  });
};
