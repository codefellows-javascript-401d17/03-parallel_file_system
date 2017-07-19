'use strict';

const expect = require('chai').expect;
const fileReader = require('../lib/file-reader.js');

describe('File Reader', function() {
  describe('with proper file path', function() {
    it('should return an error', function(done) {
      fileReader(`${__dirname}/not-a-file.txt`, function(err) {
        expect(err).to.be.an('error');
        done();
      });
    });
  });
});