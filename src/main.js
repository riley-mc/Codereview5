import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Calculator } from './js/ageCalc';

function printToPage(calc) {
  let age = calc.earthAge();
  $("#results").append(`<li>Your age on Earth is ${age} years old.</li>`);
  age = calc.mercuryAge();
  $("#results").append(`<li>Your age on Mercury is ${age} years old.</li>`);
  age = calc.venusAge();
  $("#results").append(`<li>Your age on Venus is ${age} years old.</li>`);
  age = calc.marsAge();
  $("#results").append(`<li>Your age on Mars is ${age} years old.</li>`);
  age = calc.jupiterAge();
  $("#results").append(`<li>Your age on Jupiter is ${age} years old.</li>`);
  age = calc.remainingYears();

  if (age > 0) {
    $("#results").append(`<li>The average life expectancy is 80 years old, meaning you have about ${age} years left.</li>`);
    age = calc.remainingMercury();
    $("#results").append(`<li>You have ${age} years left to live on Mercury.</li>`);
    age = calc.remainingVenus();
    $("#results").append(`<li>You have ${age} years left to live on Venus.</li>`);
    age = calc.remainingMars();
    $("#results").append(`<li>You have ${age} years left to live on Mars.</li>`);
    age = calc.remainingJupiter();
    $("#results").append(`<li>You have ${age} years left to live on Jupiter.</li>`);
  } else {
    age = calc.pastExpect();
    $("results").append(`<li>You have lived past your life expectancy. YOu have lived ${age} years!`);
  }
}

$;