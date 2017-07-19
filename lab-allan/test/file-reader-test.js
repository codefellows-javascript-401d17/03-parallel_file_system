'use strict';

const expect = require('chai').expect;
const fileReader = require('../lib/file-reader.js');

describe('File Reader Module', function(){
  describe('with an improper file path', () => {
    it('should return an error', (done) => {
      fileReader(`${__dirname}/not-a-file.txt`, (err) => {
        expect(err).to.be.an('error');
        done();
      });
    });
  });
  describe('with a proper file path', function() {
    it('should return the first 8 bytes from assets in order', (done) => {
      fileReader(`${__dirname}/../assets/one.txt`, (err, asset) => {
        expect(err).to.equal(null);
        expect(asset).to.be.a('string');
        expect(asset.length).to.equal(16);
        fileReader(`${__dirname}/../assets/two.txt`, (err, asset) => {
          expect(err).to.equal(null);
          expect(asset).to.be.a('string');
          expect(asset.length).to.equal(16);
          fileReader(`${__dirname}/../assets/three.txt`, (err, asset) => {
            expect(err).to.equal(null);
            expect(asset).to.be.a('string');
            expect(asset.length).to.equal(16);
            done();
          });
        });
      });
    });
  });
});
