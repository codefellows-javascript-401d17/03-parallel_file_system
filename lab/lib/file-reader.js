'use strict';

const fs = require('fs');

const fileReader = module.exports = function(path, callback) {

  function asyncWrapper(folder, callback, buffArray) {
    let fileName = folder.pop();
    return fs.readFile(`${path}/${fileName}`, function(err, asset) {

      if(err) return callback(err);
      buffArray.push(asset.toString('hex', 0, 8));
      console.log(buffArray[buffArray.length -1]);
      if(folder.length !== 0) return asyncWrapper(folder, callback, buffArray);
      return callback(err, buffArray);
    });
  }

  return fs.readdir(path, (err, dir) => {
    if(err) return callback(err);
    let buffArray = [];
    //This is a hack to get them to read in order....
    //May the coding gods have mercy on my soul...
    dir.sort((a, b) => a.length - b.length).reverse();
    asyncWrapper(dir, callback, buffArray);
  });
};
