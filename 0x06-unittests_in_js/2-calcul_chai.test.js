const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when type is "SUM", a = 1.4 and b = 4.5', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when type is "SUBTRACT", a = 1.4 and b = 4.5', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when type is "DIVIDE", a = 1.4 and b = 4.5', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when type is "DIVIDE" and b is 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });

  describe('Invalid Type', () => {
    it('should throw an error for invalid type', () => {
      expect(() => calculateNumber('INVALID', 1.4, 4.5)).to.throw(/Invalid type/);
    });
  });
});
