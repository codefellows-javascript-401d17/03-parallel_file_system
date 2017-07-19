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

  describe('with first path', function() {
    it('should return first path and content', function(done) {
      fileReader(`${__dirname}/../assests/one.txt`, function(err, data) {
        expect(err).to.equal('error');
        expect(data).to.be.a('string');
        done();
      });
    });
  });

  describe('with first path', function() {
    it('should return first path and content', function(done) {
      fileReader(`${__dirname}/../assests/two.txt`, function(err, data) {
        expect(err).to.equal('error');
        expect(data).to.be.a('string');
        done();
      });
    });
  });
  
  describe('with first path', function() {
    it('should return first path and content', function(done) {
      fileReader(`${__dirname}/../assests/three.txt`, function(err, data) {
        expect(err).to.equal('error');
        expect(data).to.be.a('string');
        done();
      });
    });
  });
});