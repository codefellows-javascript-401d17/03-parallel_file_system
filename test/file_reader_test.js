const expect = require('chai').expect;
const file_reader = require('../lib/file_reader.js');

console.log(`${__dirname}/../assets`);

describe('file_reader', () => {
  describe('when callback', () => {
    it('they are received in the order they are called', (done) => {
      file_reader(`${__dirname}/../assets/file1.txt`, `${__dirname}/../assets/file2.txt`, `${__dirname}/../assets/file3.txt`, (err, data) => {
        expect(data[0]).to.equal('H1OD1OR1');
        expect(data[1]).to.equal('2ho2d2or')
        expect(data[2]).to.equal('3ho3d3or')
        done();
      });
    });
  });
  describe('when checking for file paths', () => {
    it('passes if called with valid paths', (done) => {
      file_reader(`${__dirname}/../assets/file1.txt`, `${__dirname}/../assets/file2.txt`, `${__dirname}/../assets/file3.txt`, (err, data) => {
        expect(err).to.equal(null);
        expect(data).to.be.an('array');
        done();
      })
    })
    it('throws an error with last invalid file path', (done) => {
      file_reader(`${__dirname}/file1.txt`, `${__dirname}/file2.txt`, 'bad/path', (err) => {
        expect(err).to.be.an('error');
        done();
      });
    });
    it('throws an error with middle invalid file path', (done) => {
      file_reader(`${__dirname}/file1.txt`, 'oops/file2.txt', '${__dirname}/file3.txt', (err) => {
        expect(err).to.be.an('error');
        done();
      });
    });
    it('throws an error with first invalid file path', (done) => {
      file_reader(`${__dirname}/fileasdf1.txt`, `${__dirname}/file2.txt`, '${__dirname}/file3.txt', (err) => {
        expect(err).to.be.an('error');
        done();
      });
    });
  });
});

