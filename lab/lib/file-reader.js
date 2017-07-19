'use strict';

const fs = require('fs');
const errorCheck = ('../my-mods/error-check.js');

const fileReader = module.exports = function(path, callback, fileIndex=0) {
  let fileName = '';
  
  fs.readFile(fileName, function(err, asset) {
    if(err) throw err;
    callback(null, asset);
    fileIndex += 1;

    if(fileName !== 'last file') fileReader(path, callback, fileIndex);
  });
};
