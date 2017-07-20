'use strict';

const fileReader = require('../lib/file-reader.js');
const expect = require('chai').expect;

//Conatains the first 8 bytes from files one, two, and three in order
let fileBytes = ['5468697320697320', '49207265616c6c79', '4261636f6e206772'];

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
    it('Should console log files in order', (done) => {
      fileReader(`${__dirname}/../data`, (err, asset) => {
        asset.forEach((buff, ind) => expect(buff).to.equal(fileBytes[ind]));
        done();
      });
    });
  });
});
