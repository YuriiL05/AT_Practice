import {NumbersValidator} from '../../app/numbers_validator.js';
import {expect} from 'chai';
describe('getEvenNumbersFromArray test', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  // eslint-disable-next-line max-len
  it('should return array of even numbers when provide an array of numbers', () => {
    const validationResults = validator.getEvenNumbersFromArray(
        [1, 2, 3, 4, 22],
    );
    expect(validationResults).to.have.ordered.members([2, 4, 22]);
  });

  // eslint-disable-next-line max-len
  it('should return an empty array when provide an array of odd numbers', () => {
    const validationResults = validator.getEvenNumbersFromArray(
        [1, 3, 7],
    );
    expect(validationResults).to.be.an('array').that.is.empty;
  });

  it('should throw an error when provide a string in array', () => {
    expect(() => {
      validator.getEvenNumbersFromArray([2, 4, '22']);
    }).to.throw(`[2,4,22] is not an array of "Numbers"`);
  });

  it('should throw an error when provide a number', () => {
    expect(() => {
      validator.getEvenNumbersFromArray(8);
    }).to.throw(`[8] is not an array of "Numbers"`);
  });
});
