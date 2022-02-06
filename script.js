`use strict`;

window.addEventListener(`DOMContentLoaded`, settingUp);

const firstNumberInput = document.querySelector(`#firstnumber`);
const secondNumberInput = document.querySelector(`#secondnumber`);
const operatorInput = document.querySelector(`#operator`);
const clearBtn = document.querySelector(`#clear`);
const calculateBtn = document.querySelector(`#calculate`);
const ulResults = document.querySelector(`#results`);

let firstNumber;
let secondNumber;
let resultValue;
let result;

function settingUp() {
  console.log(`settingUp`);
  //Call clearResults on click
  clearBtn.addEventListener(`click`, clearResults);
  //Call calculate on click
  calculateBtn.addEventListener(`click`, calculate);
}

function clearResults() {
  console.log(`clearResults`);
  //clear the result list
  ulResults.textContent = ``;
}

function calculate() {
  console.log(`calculate`);

  //Taking the value and input into the variable
  firstNumber = parseInt(firstNumberInput.value);
  secondNumber = parseInt(secondNumberInput.value);

  operator = operatorInput.value;
  if (operator === `add`) {
    resultValue = parseInt(firstNumber) + parseInt(secondNumber);
  } else if (operator === `sub`) {
    resultValue = firstNumber - secondNumber;
  } else if (operator === `mul`) {
    resultValue = firstNumber * secondNumber;
  } else if (operator === `div`) {
    resultValue = firstNumber / secondNumber;
  }

  result = document.createElement(`li`);
  result.textContent = resultValue;
  ulResults.appendChild(result);
}
