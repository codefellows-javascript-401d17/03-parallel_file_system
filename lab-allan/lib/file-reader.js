'use strict';

const fs = require('fs');

const fileReader = module.exports = function(file, callback) {
  fs.readFile(file, function(err, asset) {
    if(err) return callback(err);
    return callback(null, asset.toString('hex', 0, 8));
  });
};
