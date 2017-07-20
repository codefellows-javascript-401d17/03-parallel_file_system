'use strict';

const expect = require('chai').expect;
const fileReader = require('../lib/file-reader.js');

describe('file reading module', function(){
  describe('bad file path', function(){
    it('should give an error', function(done){
      fileReader(`${__dirname}/bad-file.txt`, function(err){
        expect(err).to.be.a('error');
        done();
      });
    });
  });

  describe('Good path and data', function(){
    it('should return wierd numbers, ending in 78, 65, 78', function(done){
      let paths = [
        `${__dirname}/../assets/one.txt`,
        `${__dirname}/../assets/two.txt`,
        `${__dirname}/../assets/three.txt`
      ];
      fileReader(paths, function(err, data){
        expect(err).to.equal(null);
        expect(data).to.be.an('array');
        expect(data).to.deep.equal([ '5468697320746578', '54686973206f6e65', '5468697320746578' ]);
        done();
      });
    });
  });
});
