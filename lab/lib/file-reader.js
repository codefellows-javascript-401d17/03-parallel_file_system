'use strict';

const fs = require('fs');

const fileReader = module.exports = function(path, callback, fileIndex=0) {

  fs.readdir(path, (err, dir) => {
    if(err) throw err;
    asyncWrapper(dir);
  });

  function asyncWrapper(file) {
    let fileName = file[fileIndex];
    fs.readFile(`${path}/${fileName}`, function(err, asset) {
      if(err) throw err;
      callback(null, asset);

      fileIndex += 1;
      if(fileIndex < file.length) fileReader(path, callback, fileIndex);
    });
  }
};
