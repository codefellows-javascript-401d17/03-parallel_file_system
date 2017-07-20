'use strict';

const fr = require('./lib/reader.js');

module.exports = exports = {};

exports.fileRunner = (err, data) => {
  const filesNames = ['one.txt', 'two.txt', 'three.txt'];
  filesNames.forEach((ele) => {
    fr.fileReader(ele, err);
  });
};
// NOTE: uncomment to run with node
// exports.fileRunner();
