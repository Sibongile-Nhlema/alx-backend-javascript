const { expect } = require('chai');
const request = require('request');
const app = require('./api');

let server;
const port = 7865; // Use the same port as the server

describe('Index page', () => {
  before((done) => {
    server = app.listen(port, (err) => {
      if (err) {
        console.error('Error starting server:', err);
        return done(err);
      }
      done();
    });
  });

  after((done) => {
    server.close((err) => {
      if (err) {
        console.error('Error stopping server:', err);
        return done(err);
      }
      done();
    });
  });

  it('should return status 200 for /', (done) => {
    request.get(`http://localhost:${port}`, (error, response, body) => {
      if (error) {
        console.error('Request error:', error);
        return done(error);
      }
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message for /', (done) => {
    request.get(`http://localhost:${port}`, (error, response, body) => {
      if (error) {
        console.error('Request error:', error);
        return done(error);
      }
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  describe('Cart page', () => {
    it('should return status 200 when :id is a number', (done) => {
      request.get(`http://localhost:${port}/cart/12`, (error, response, body) => {
        if (error) {
          console.error('Request error:', error);
          return done(error);
        }
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('should return the correct message when :id is a number', (done) => {
      request.get(`http://localhost:${port}/cart/12`, (error, response, body) => {
        if (error) {
          console.error('Request error:', error);
          return done(error);
        }
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });

    it('should return status 404 when :id is not a number', (done) => {
      request.get(`http://localhost:${port}/cart/hello`, (error, response, body) => {
        if (error) {
          console.error('Request error:', error);
          return done(error);
        }
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });
});
