import {NumbersValidator} from '../../app/numbers_validator.js';
import {expect} from 'chai';
describe('isNumberEven positive test', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return true when provide an even number', () => {
    const validationResults = validator.isNumberEven(10);
    expect(validationResults).to.be.equal(true);
  });

  it('should return false when provide an odd number', () => {
    const validationResults = validator.isNumberEven(3);
    expect(validationResults).to.be.equal(false);
  });

  it('should throw an error when provide a string', () => {
    expect(() => {
      validator.isNumberEven('10');
    }).to.throw(`[10] is not of type "Number" it is of type "string"`);
  });
});
