import {NumbersValidator} from '../../app/numbers_validator.js';
import {expect} from 'chai';
describe('isAllNumbers test', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  // eslint-disable-next-line max-len
  it('should return true when provide an array of numbers', () => {
    const validationResults = validator.isAllNumbers(
        [1, 2, 3, 4, 22, 3.3],
    );
    expect(validationResults).to.be.true;
  });

  it('should return false when provide an array of numbers and string', () => {
    const validationResults = validator.isAllNumbers(
        [1, 2, 3, 4, '22', 3.3],
    );
    expect(validationResults).to.be.false;
  });

  it('should throw an error when provide a number', () => {
    expect(() => {
      validator.isAllNumbers(2);
    }).to.throw(`[2] is not an array`);
  });
});
