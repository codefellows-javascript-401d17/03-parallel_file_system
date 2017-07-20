'use strict';

const fs = require('fs');

const fileReader = module.exports = (file, cb) => { //eslint-disable-line
  fs.readFile(file, (err, data) => {
    if(err) return cb(err);
    return cb(null, data.toString('hex',0,8));
  });
};
