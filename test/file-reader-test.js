'use strict';

const expect = require('chai').expect;
const fileReader = require('../lib/file-reader.js');

describe('File Reader Module', function() {
  describe('with an improper file path', function() {
    it('should return an error', function(done) {
      fileReader(`${__dirname}/not-a-file.txt`, function(err) {
        expect(err).to.be.an('error');
        done();
      });
    });
  });

  describe('with a proper file path', function() {
    it('should return the content in the file', function(done) {
      fileReader(`${__dirname}/../assets/one.txt`, function(err, assets) {
        expect(err).to.equal(null);
        expect(assets).to.be.a('string');

        fileReader(`${__dirname}/../assets/two.txt`, function(err, assets) {
          expect(err).to.equal(null);
          expect(assets).to.be.a('string');

          fileReader(`${__dirname}/../assets/three.txt`, function(err, assets) {
            expect(err).to.equal(null);
            expect(assets).to.be.a('string');
            done();
          });
        });
      });
    });
  });
});
//   describe('with the proper order', function() {
//     it('should return the content in the proper order', function(done) {
//
//     });
//   });
// });
