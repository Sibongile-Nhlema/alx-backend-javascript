const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let stub;
  let spy;

  beforeEach(() => {
    // Stub Utils.calculateNumber to always return 10
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);

    spy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the stub and the spy
    stub.restore();
    spy.restore();
  });

  it('should call Utils.calculateNumber with type SUM and correct arguments', () => {
    const totalAmount = 100;
    const totalShipping = 20;
    sendPaymentRequestToApi(totalAmount, totalShipping);

    expect(stub.calledOnceWithExactly('SUM', totalAmount, totalShipping)).to.be.true;
  });

  it('should log the correct message to the console', () => {
    const totalAmount = 100;
    const totalShipping = 20;
    sendPaymentRequestToApi(totalAmount, totalShipping);

    expect(spy.calledOnceWithExactly('The total is: 10')).to.be.true;
  });
});
