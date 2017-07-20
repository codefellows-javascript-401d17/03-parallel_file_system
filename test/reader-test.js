'use strict';

const expect = require('chai').expect;
const fr = require('../index.js');

describe('File Reader Module', () => {
  describe('following proper file paths', () => {
    it('should have working path \"__dirname\"/assets/file', (done) => {
      fr.fileRunner((err) => {
        expect(err).to.not.throw();
        done();
      });
    });
  });
  describe('logging in correct order', () => {
    it('Should log one.txt then two.txt then three.txt', (done) => {
      fr.fileRunner((err) => {
        expect(err).to.equal('null');
        done();
      });
    });
  });
});
