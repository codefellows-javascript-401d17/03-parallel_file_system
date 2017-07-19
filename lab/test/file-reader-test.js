'use strict';

const fileReader = require('../lib/file-reader.js');
const expect = require('chai').expect;


describe('File Reader Module', () => {
  describe('With improper file path', () => {
    it('Should throw an error', (done) => {
      fileReader(`${__dirname}/../not-a-file.txt`, (err) => {
        expect(err).to.be.an('error');
      });
      done();
    });
  });

  describe('With proper file path', () => {
    it('Should throw console log the first 8 items in the buffer', () => {
      fileReader(`${__dirname}/../data`, (err, asset) => {
        expect(asset.toString()).to.equal(8);
      });
    });
  });
});
