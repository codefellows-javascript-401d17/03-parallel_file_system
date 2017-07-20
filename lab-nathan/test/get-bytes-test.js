'use strict';

const getBytes = require('../lib/get-bytes.js');
const expect = require('chai').expect;

describe('get-bytes', function() {
  it('should have a valid input path', function(done) {
    getBytes([`${__dirname}/../assets/fake.txt`], 8, function(err) {
      expect(err).to.be.an('error').with.property('code', 'ENOENT');
      done();
    });
  });

  it('should return the first 8 bytes of each asset in order', function(done) {
    let files = [`${__dirname}/../assets/one.txt`, `${__dirname}/../assets/two.txt`, `${__dirname}/../assets/three.txt`];
    getBytes(files, 8, function(err, data) {
      expect(data).to.deep.equal(['4c6f72656d206970', '496e206d616c6573', '5175697371756520']);
      done();
    });
  });
});

