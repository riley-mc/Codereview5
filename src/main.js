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
  $("#results").append(`<li>Your age on Mercury is ${age} years old.</li>`);
  age = calc.marsAge();
  $("#results").append(`<li>Your age on Mercury is ${age} years old.</li>`);
  age = calc.jupiterAge();
  $("#results").append(`<li>Your age on Mercury is ${age} years old.</li>`);
  age = calc.remainingYears();
}
$;