const { expect } = require('chai');
const request = require('request');
const app = require('./api');

let server;

describe('Index page', function() {
  before(function(done) {
    server = app.listen(7865, () => {
      done();
    });
  });

  after(function(done) {
    server.close(() => {
      done();
    });
  });

  it('should return status 200 for root', function(done) {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message for root', function(done) {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', function() {
  it('should return status 200 for valid cart id', function(done) {
    request.get('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct message for valid cart id', function(done) {
    request.get('http://localhost:7865/cart/12', (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return status 404 for invalid cart id', function(done) {
    request.get('http://localhost:7865/cart/hello', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('should return status 404 for missing cart id', function(done) {
    request.get('http://localhost:7865/cart/', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Available payments endpoint', function() {
  it('should return correct JSON structure and status 200', function(done) {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.deep.equal(JSON.stringify({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      }));
      done();
    });
  });
});

describe('Login endpoint', function() {
  it('should return status 200 for POST request with JSON body', function(done) {
    request.post('http://localhost:7865/login', {
      json: { userName: 'Betty' }
    }, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });

  it('should return status 404 for GET request to /login', function(done) {
    request.get('http://localhost:7865/login', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
