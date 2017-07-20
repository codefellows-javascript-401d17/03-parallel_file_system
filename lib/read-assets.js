'use strict';

const fs = require('fs');

const assets = module.exports.assets = [];

const readAssets = module.exports.readAssets = (file, callback) => {
  fs.readFile(file, function(err, data) {
  if (err) return callback(err);
  data.dateAdded = new Date();
  assets.push({asset: data.toString(), date: new Date()})
// console.log(assets)
  return callback(null, data.slice(0, 8).toString());
});
}

const sortAssets = module.exports.sortAssets = (arr) => {
  Object.keys(assets).sort(function(a,b){return assets[a]-assets[b]})
  console.log(assets)
};