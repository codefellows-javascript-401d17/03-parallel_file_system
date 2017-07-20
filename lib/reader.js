'use strict';

const fs = require('fs');

module.exports = exports = {};

exports.fileReader = (file, callback) => {
  fs.readFile(`${__dirname}/../assets/${file}`, (err, data) => {
    if(err) return callback(err);
    // making sure correct byte length
    let byteLen = Buffer.alloc(8, data, 'hex');
    console.log(Buffer.byteLength(byteLen));
    // printing first 8 bytes in hex
    return callback(console.log(file, Buffer.alloc(8, data, 'hex')), () => null);
  });
};
