'use strict';

const expect = require('chai').expect;
const orderHexBytes = require('../index.js');


describe('index', () => {
  describe('orderHexBytes',() => {
    it('should return an array that follows a specific order and have 8 bytes each', (done) => {
      orderHexBytes((err, hexArray) => {
        console.log(hexArray);
        expect(hexArray).to.deep.equal(['4e6f206f6e652063','4e6f206f6e652063','536d696c65206f6e']);
        done();
      });
    });
  });
});
