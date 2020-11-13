import { TestScheduler } from 'jest';
import { Calculator } from './../src/js/ageCalc.js';

describe('Calculator', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator(20);
  });

  test('should return the given age', () => {
    expect(calc.earthAge()).toEqual(20);
  });

  test('Will return the users age on Mercury', () => {
    expect(calc.mercuryAge()).toEqual(83.3);
  });

  
});



