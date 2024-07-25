const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when type is "SUM", a = 1.4 and b = 4.5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when type is "SUBTRACT", a = 1.4 and b = 4.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when type is "DIVIDE", a = 1.4 and b = 4.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when type is "DIVIDE" and b is 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });

  describe('Invalid Type', () => {
    it('should throw an error for invalid type', () => {
      assert.throws(() => {
        calculateNumber('INVALID', 1.4, 4.5);
      }, /Invalid type/);
    });
  });
});
