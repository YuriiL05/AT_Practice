import {NumbersValidator} from '../../app/numbers_validator.js';
import {expect} from 'chai';
describe('isInteger positive and negative test', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return true when provide an integer number', () => {
    const validationResults = validator.isInteger(10);
    expect(validationResults).to.be.true;
  });

  it('should return false when provide a fractional number', () => {
    const validationResults = validator.isInteger(10.01);
    expect(validationResults).to.be.false;
  });

  it('should throw an error when provide a string', () => {
    expect(() => {
      validator.isInteger('10');
    }).to.throw(`[10] is not a number`);
  });
});
