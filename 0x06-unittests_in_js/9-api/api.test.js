const { expect } = require('chai');
const request = require('request');
const app = require('./api');

let server;
const PORT = 7866; // Use a different port for testing

describe('Index page', function() {
  before(function(done) {
    server = app.listen(PORT, () => {
      done();
    });
  });

  after(function(done) {
    server.close(() => {
      done();
    });
  });

  it('should return status 200 for root', function(done) {
    request.get(`http://localhost:${PORT}`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message for root', function(done) {
    request.get(`http://localhost:${PORT}`, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', function() {
  it('should return status 200 for valid cart id', function(done) {
    request.get(`http://localhost:${PORT}/cart/12`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct message for valid cart id', function(done) {
    request.get(`http://localhost:${PORT}/cart/12`, (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return status 404 for invalid cart id', function(done) {
    request.get(`http://localhost:${PORT}/cart/hello`, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('should return status 404 for missing cart id', function(done) {
    request.get(`http://localhost:${PORT}/cart/`, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
