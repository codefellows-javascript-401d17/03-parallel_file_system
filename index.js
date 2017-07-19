'use strict';

const fileReader = require('./lib/file-reader.js');

fileReader(`${__dirname}/assets/one.txt`, (err, data) => {
  if (err) throw err;
  console.log('content of one.txt:', data);

  fileReader(`${__dirname}/assets/two.txt`, (err, data) => {
    if (err) throw err;
    console.log('content of two.txt:', data);

    fileReader(`${__dirname}/assets/three.txt`, (err, data) => {
      if (err) throw err;
      console.log('content of three.txt:', data);
    });
  });
});
