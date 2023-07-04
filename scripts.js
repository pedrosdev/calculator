const display = document.querySelector("#display");
let displayValue = "";

let a;
let op;
let b;

const digits = document.querySelectorAll(".digit");
digits.forEach((digit) => digit.addEventListener("click", displayNumber));

const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => operator.addEventListener("click", (e) => {
  if (op) {
    displaySolution();
  }

  op = e.target.textContent;
  a = +displayValue;
  displayValue = "";
}));

const equals = document.querySelector("#equals");
equals.addEventListener("click", displaySolution);

function displaySolution() {
  b = +displayValue;

  displayValue = operate(op, a, b);
  display.textContent = displayValue;
}

function displayNumber(e) {
  displayValue += e.target.textContent;  
  display.textContent = displayValue;
}

function operate(op, a, b) {
  switch (op) {
    case "÷":
      return divide(a, b);
    case "×":
      return multiply(a, b);
    case "-":
      return subtract(a, b);
    case "+":
      return add(a, b);
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
