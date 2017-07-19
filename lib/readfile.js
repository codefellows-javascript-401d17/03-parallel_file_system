'use strict';

const fs = require('fs');

const fileReader = module.exports = function(files, callback) {
  let buffers = [];
  
  fs.readFile(files[0], function(err, data) {
    if(err) return callback(err);
    buffers.push(data.toString('hex', 0, 8));

    fs.readFile(files[1], function(err, data){
      if(err) return callback(err);
      buffers.push(data.toString('hex', 0, 8));

      fs.readFile(files[2], function(err, data){
        if(err) return callback(err);
        buffers.push(data.toString('hex', 0, 8));
        return callback(null, buffers);
      });
    });
  });
};
