var mocha = require('mocha');
var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var request = require('supertest');
var app = require('../server/server');

describe('Route Tests', function() {
  describe('Main Routes', function() {
    it('should have / route', function(done) {
      request(app)
        .get('/')
        .expect(200, done);
    });
    it('should have /status route', function(done) {
      request(app)
        .post('/status')
        .expect(200, done);
    });
  });
});
