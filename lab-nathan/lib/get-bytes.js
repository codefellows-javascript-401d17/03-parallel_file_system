'use strict';

const fs = require('fs');

let getBytes = function(filePaths, byteCount, callback, buffer = []) {
  if (filePaths.length === 0) return callback(null, buffer);
  
  let filePath = filePaths.shift();

  fs.readFile(filePath, function(err, data) {
    if (err) callback(err);

    buffer.push(data.toString('hex', 0, byteCount));

    getBytes(filePaths, byteCount, callback, buffer);
  });
};

module.exports = getBytes;