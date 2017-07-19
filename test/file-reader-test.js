'use strict';

const expect = require('chai').expect;
const fileReader = require('../lib/file-reader.js');

describe('File Reader', function() {
  describe('with improper file path', function() {
    it('should return an error', function(done) {
      fileReader(`${__dirname}/not-a-file.txt`, function(err) {
        expect(err).to.be.an('error');
        done();
      });
    });
  });

  describe('with proper file paths and data', function() {
    it('should return: 7468697320746578, 68656c6c6f2c2066, 73686f7274657374', function(done) {
      let paths = [
        `${__dirname}/../assets/one.txt`,
        `${__dirname}/../assets/two.txt`,
        `${__dirname}/../assets/three.txt`
        ];
      fileReader(paths, function(err, data) {
        expect(err).to.equal(null);
        expect(data).to.be.an('array');
        expect(data).to.deep.equal([ '7468697320746578', '68656c6c6f2c2066', '73686f7274657374' ]);
        done();
      });
    });
  });
});