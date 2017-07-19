'use strict';

const expect = require('chai').expect;
const fileReader = require('../lib/file-reader.js');

describe('File Reader Module', function() {
  describe('with improper file path', function() {
    it('should return an error', function(done) {
      fileReader(`${__dirname}/not-a-file.txt`, function(err) {
        expect(err).to.be.an('error');
        done();
      });
    });
  });

  describe('with a proper file path', function() {
    it('should return content from txt files', function(done) {
      fileReader(`${__dirname}/../assets/one.txt`, function(err, data) {
        expect(err).to.equal(null);
        expect(data).to.be.a('string');

        fileReader(`${__dirname}/../assets/two.txt`, function(err, data) {
          expect(err).to.equal(null);
          expect(data).to.be.a('string');

          fileReader(`${__dirname}/../assets/two.txt`, function(err, data) {
            expect(err).to.equal(null);
            expect(data).to.be.a('string');
            done();
          });
        });
      });
    });
  });
});