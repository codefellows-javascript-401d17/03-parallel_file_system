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
    it('Should throw console log the first 8 items in the buffer', (done) => {
      fileReader(`${__dirname}/../data`, (err, asset) => {
        expect(asset[0]).to.equal('5468697320697320');
        expect(asset[1]).to.equal('49207265616c6c79');
        expect(asset[2]).to.equal('4261636f6e206772');
        done();
      });
    });
  });
});
