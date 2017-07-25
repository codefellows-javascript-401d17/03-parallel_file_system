const fs = require('fs');
let strings = [];

let file_reader = module.exports = (path1, path2, path3, callback) => {
  fs.readFile(path1, (err, data) => {
    if (err) return callback(new Error('bad file path'));
    let buff1 = Buffer.alloc(8, data, 'hex');
    strings.push(buff1.toString());
    fs.readFile(path2, (err, data) => {
      if (err) return callback(new Error('bad file path'));
      let buff2 = Buffer.alloc(8, data, 'hex');
      strings.push(buff2.toString());
      fs.readFile(path3, (err, data) => {
        if (err) return callback(new Error('bad file path'));
        let buff3 = Buffer.alloc(8, data, 'hex');
        strings.push(buff3.toString());
        callback(null, strings);
        strings.forEach((string) => {
          console.log(string);
        })
      });
    });
  });
};
