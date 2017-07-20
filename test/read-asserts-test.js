'use strict';

const expect = require('chai').expect;
const readAssets = require('../lib/read-assets.js');
const assets = module.exports.assets = [];


describe('Read assets', function() {
  describe('is trying to find a file path to', function() {
    it('one.txt', function(done) {
      readAssets.readAssets(`${__dirname}/../assets/one.txt`, function(err) {
        expect(err).to.not.be.an('error');
        done();
      });
    });
    it('two.txt', function(done) {
      readAssets.readAssets(`${__dirname}/../assets/two.txt`, function(err) {
        expect(err).to.not.be.an('error');
        done();
      });
    });
    it('three.txt', function(done) {
      readAssets.readAssets(`${__dirname}/../assets/three.txt`, function(err) {
        expect(err).to.not.be.an('error');
        done();
        console.log(readAssets.assets)
      });
    });
  });
  describe('was loaded in the right order', () => {
    it('assets loaded', () =>{
      readAssets.readAssets(`${__dirname}/../assets/one.txt`);
      readAssets.readAssets(`${__dirname}/../assets/two.txt`);
      readAssets.readAssets(`${__dirname}/../assets/three.txt`);
      expect(assets).to.have.ordered.members(
        Object.keys(assets).sort(function(a,b){return assets[a]-assets[b]}))
    })
  })
});