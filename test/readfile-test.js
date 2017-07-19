'use strict';

const expect = require('chai').expect;
const fileReader = require('../lib/readfile.js');

describe('File Reader', function(){
  describe('with improper file path', function() {
    it('should return an error', function(done) {
      fileReader(`${__dirname}/not-real.txt`, function(err) {
        expect(err).to.be.an('error');
        done();
      });
    });
  });
  describe('with proper file paths and data', function() {
    it('should return: 66696c65206f6e65, 7365636f6e642066, 6e6f626f64792063', function(done){
      let files = [
        `${__dirname}/../assets/one.txt`,
        `${__dirname}/../assets/two.txt`,
        `${__dirname}/../assets/three.txt`
      ];
      fileReader(files, function(err, data){
        expect(err).to.equal(null);
        expect(data).to.be.an('array');
        expect(data).to.deep.equal([ '66696c65206f6e65', '7365636f6e642066', '6e6f626f64792063' ]);
        done();
      });
    });
  });
});
