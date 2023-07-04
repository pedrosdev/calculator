let a;
let operator;
let b;

const digits = document.querySelectorAll(".digit");
digits.forEach((digit) => digit.addEventListener("click", displayNumber));

let displayValue = "";

function displayNumber(e) {
  displayValue += e.target.textContent;
  
  const display = document.querySelector("#display");
  display.textContent = displayValue;
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
