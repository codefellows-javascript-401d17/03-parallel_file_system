'use strict';

const fs = require('fs');
const errorCheck = ('../my-mods/error-check.js');

const fileReader = module.exports = function(path, callback, fileIndex=0) {
  let allFiles;
  fs.readdir(`${__dirname}/../data`, (err, dir) => {
    if(err) throw err;
    allFiles = dir;
  });
  let fileName = allFiles[fileIndex];

  fs.readFile(fileName, function(err, asset) {
    if(err) throw err;
    callback(null, asset);

    fileIndex += 1;
    if(fileName !== allFiles[allFiles.length - 1]) fileReader(path, callback, fileIndex);
  });
};


fs.readdir(`${__dirname}/../data`, (err, dir) => {
  if(err) throw err;
  console.log(dir);
});
