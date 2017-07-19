'use strict';

const expect = require('chai').expect;
const fileReader = require('../lib/file-reader.js');

describe('file reader', () => {
  describe('with improper file path', () => {
    it('should return an error', (done) => {
      fileReader(`${__dirname}/not-a-real-file.txt`, (err) =>{
        expect(err).to.be.an('error');
        done();
      });
    });
  });

  describe('with a proper file path', () => {
    it('should return the content of the file', (done) =>{
      fileReader(`${__dirname}/../assets/one.txt`, (err, data) => {
        expect(err).to.equal(null);
        console.log(typeof data);
        expect(data).to.be.a('string');
        done();
      })
    })
  })
});
