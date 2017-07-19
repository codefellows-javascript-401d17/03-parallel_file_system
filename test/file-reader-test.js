'use strict';

const expect = require('chai').expect;
const fileReader = require('../lib/file-reader.js');

describe('File Reader Module', () => {
  describe('with improper file path', () => {
    it('should return an error', done => {
      fileReader(`${__dirname}/not-a-file.txt`, err => {
        expect(err).to.be.an('error');
        done();
      });
    });
  });

  describe('with a proper file path', () => {
    it('should return content from txt files', done => {
      fileReader(`${__dirname}/../assets/one.txt`, (err, data) => {
        expect(err).to.equal(null);
        expect(data.length).to.equal(16);
        expect(data).to.be.a('string');

        fileReader(`${__dirname}/../assets/two.txt`, (err, data) => {
          expect(err).to.equal(null);
          expect(data.length).to.equal(16);
          expect(data).to.be.a('string');

          fileReader(`${__dirname}/../assets/two.txt`, (err, data) => {
            expect(err).to.equal(null);
            expect(data.length).to.equal(16);
            expect(data).to.be.a('string');
            done();
          });
        });
      });
    });
  });
});