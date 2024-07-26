const { expect } = require('chai');
const request = require('request');
const app = require('./api');

let server;
const port = 7866; // Use a different port for testing

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

  it('should return status 200', (done) => {
    request.get(`http://localhost:${port}`, (error, response, body) => {
      if (error) {
        console.error('Request error:', error);
        return done(error);
      }
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message', (done) => {
    request.get(`http://localhost:${port}`, (error, response, body) => {
      if (error) {
        console.error('Request error:', error);
        return done(error);
      }
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
