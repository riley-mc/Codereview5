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
    expect(calc.mercuryAge()).toEqual(83.33);
  });

  test("will reurn the users age on Venus",  () => {
    expect(calc.venusAge()).toEqual(32.26);
  });

  test("will return the users age on Mars", () => {
    expect(calc.marsAge()).toEqual(10.64);
  });

  test("will return the users age on Jupiter", () => {
    expect(calc.jupiterAge()).toEqual(1.70);
  });

  
});



