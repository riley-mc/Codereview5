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

  test('will reurn the users age on Venus',  () => {
    expect(calc.venusAge()).toEqual(32.26);
  });

  test('will return the users age on Mars', () => {
    expect(calc.marsAge()).toEqual(10.64);
  });

  test('will return the users age on Jupiter', () => {
    expect(calc.jupiterAge()).toEqual(1.69);
  });

  test('will return the remaining years the average user life which is 80 years', () => {
    expect(calc.remainingYears()).toEqual(60);
  });

  test('Will return the users remaining years to live on Mercury', () => {
    expect(calc.remainingMercury()).toEqual(250);
  });

  test('Will return the users remaining yeras to live on Venus', () => {
    expect(calc.remainingVenus()).toEqual(96.77);
  });

  test('Will return the users remaining years to live on Mars', () => {
    expect(calc.remainingMars()).toEqual(31.9);
  });
  
});



