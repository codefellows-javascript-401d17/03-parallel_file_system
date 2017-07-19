'use strict';

const fileReader = require(`${__dirname}/lib/file-reader.js`);

fileReader(`${__dirname}/assets/one.txt`, function(err, asset) {
  if(err) throw err;
  console.log('one.txt:', asset);
  fileReader(`${__dirname}/assets/two.txt`, function(err, asset) {
    if(err) throw err;
    console.log('two.txt:', asset);
    fileReader(`${__dirname}/assets/three.txt`, function(err, asset) {
      if(err) throw err;
      console.log('three.txt:', asset);
    });
  });
});
