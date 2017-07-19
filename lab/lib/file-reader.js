'use strict';

const fs = require('fs');

const fileReader = module.exports = function(path, callback) {

  function asyncWrapper(folder, callback, fileIndex=0) {
    let fileName = folder[fileIndex];
    fs.readFile(`${path}/${fileName}`, function(err, asset) {

      if(err) return callback(err);
      asset = Array.prototype.slice.call(asset, 0, 8);
      console.log(asset);
      callback(null, asset);

      fileIndex += 1;
      if(fileIndex < folder.length) return asyncWrapper(folder, callback, fileIndex);
      return;
    });
  }

  return fs.readdir(path, (err, dir) => {
    if(err) return callback(err);
    //This is a hack to get them to read in order....
    //May the coding gods have mercy on my soul...
    dir.sort((a, b) => a.length - b.length);
    asyncWrapper(dir, callback);
  });
};
