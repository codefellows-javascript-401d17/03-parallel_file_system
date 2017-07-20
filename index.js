'use strict';

const fileReader = require('../03-parallel_file_system/lib/file-reader.js');


let orderHexBytes = module.exports = (cb) => { //eslint-disable-line
  let hexArray = [];
  fileReader(`${__dirname}/assets/one.txt`, function(err, data){
    if(err) return cb(err);
    hexArray.push(data);
    fileReader(`${__dirname}/assets/two.txt`, function(err, data){
      if(err) return cb(err);
      hexArray.push(data);
      fileReader(`${__dirname}/assets/three.txt`, function(err, data){
        if(err) return cb(err);
        hexArray.push(data);
        cb(null, hexArray);
      });
    });
  });
};
