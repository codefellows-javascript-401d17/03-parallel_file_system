'use strict';

const fs = require('fs');

const fileReader = module.exports = function(paths, callback) {
  let buffers = [];
  
  fs.readFile(paths[0], function(err, data) {
    if(err) return callback(err);
    buffers.push(data.toString('hex', 0 , 8));

    fs.readFile(paths[1], function(err, data) {
      if(err) return callback(err);
      buffers.push(data.toString('hex', 0 , 8));

      fs.readFile(paths[2], function(err, data) {
        if(err) return callback(err);
        buffers.push(data.toString('hex', 0 , 8));
        return callback(null, buffers);
      });
    });
  });
};