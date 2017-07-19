'use strict';

const fs = require('fs');

const fileReader = module.exports = function(paths, callback) {
  if(paths.length > 3 || paths.length < 3) throw new Error('must have three paths');
  let buffers = [];
  let [one, two, three] = paths;
  
  fs.readFile(one, function(err, data) {
    if(err) throw err;
    buffers.push(data.toString('hex', 0 , 7))

    fs.readFile(two, function(err, data) {
      if(err) throw err;
      buffers.push(data.toString('hex', 0 , 7))

      fs.readFile(three, function(err, data) {
        if(err) throw err;
        buffers.push(data.toString('hex', 0 , 7))
        console.log(buffers);
      });
    });
  });
};