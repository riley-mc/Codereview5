import { TestScheduler } from 'jest';
import { Calculator } from './../src/js/ageCalc.js';

describe('Calculator', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator(19);
  });

  test('should return the given age', () => {
    expect(calc.earthAge()).toEqual(20);
  });

  
});
