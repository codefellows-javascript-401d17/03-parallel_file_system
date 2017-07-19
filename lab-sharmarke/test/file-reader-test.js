'use strict';

const expect = require('chai').expect;
const fileReader = require('../lib/file-reader.js');

describe('File Reader Module', function() {
  describe('improper file path', function() {
    it('should return an error', function(done) {
      fileReader(`${__dirname}/bruh.txt`, function(err) {
        expect(err).to.be.an('error');
        done();
      });
    });
  });

  describe('correct file path', function() {
    it('should return the one.txt file', function(done) {
      fileReader(`${__dirname}/../assets/one.txt`, function(err, assets) {
        expect(err).to.equal(null);
        expect(assets).to.be.a('string');
        it('should return the two.txt file', function(done) {
          fileReader(`${__dirname}/../assets/two.txt`, function(err, assets) {
            expect(err).to.equal(null);
            expect(assets).to.be.a('string');
            it('should return the three.txt file', function(done) {
              fileReader(`${__dirname}/../assets/three.txt`, function(err, assets) {
                expect(err).to.equal(null);
                expect(assets).to.be.a('string');
              });
            });
          });
        });
      });
      done();
    });
  });
});
