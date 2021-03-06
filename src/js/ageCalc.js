export class Calculator {
  constructor(age) {
    this.age = age;
    this.yearsLeft = 80 - this.age;
  }

  earthAge() {
    return this.age;
  }

  mercuryAge() {
    let num = this.age / 0.24;
    return parseFloat(num.toFixed(2));
  }

  venusAge() {
    let num = this.age / 0.62;
    return parseFloat(num.toFixed(2));
  }

  marsAge() {
    let num = this.age / 1.88;
    return parseFloat(num.toFixed(2));
  }

  jupiterAge() {
    let num = this.age / 11.86;
    return parseFloat(num.toFixed(2));
  }

  remainingYears() {
    return this.yearsLeft;
  }

  remainingMercury() {
    let num = this.yearsLeft / 0.24;
    return parseFloat(num.toFixed(2));
  }

  remainingVenus() {
    let num = this.yearsLeft / 0.62;
    return parseFloat(num.toFixed(2));
  }

  remainingMars() {
    let num = this.yearsLeft / 1.88;
    return parseFloat(num.toFixed(2));
  }

  remainingJupiter() {
    let num = this.yearsLeft / 11.86;
    return parseFloat(num.toFixed(2));
  }

  pastExpect()  {
    let num = Math.abs(this.yearsLeft);
    return num;
  }

}