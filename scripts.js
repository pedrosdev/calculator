const display = document.querySelector("#display");

let displayValue = "";
let a = 0;
let op = "";
let b = 0;

const digits = document.querySelectorAll(".digit");
digits.forEach((digit) => digit.addEventListener("click", displayNumber));

const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => operator.addEventListener("click", (e) => {
  if (op) {
    displaySolution();
  }

  op = e.target.textContent;
  a = +display.textContent;
  displayValue = "";
}));

const equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", () => {
  displaySolution();
  displayValue = "";
});

const clear = document.querySelector("#clear");
clear.addEventListener("click", reset);

function displaySolution() {
  if (a && op && displayValue !== "") {
    b = +displayValue;
  
    displayValue = operate(op, a, b);
    
    if (typeof displayValue == "string") {
      display.textContent = displayValue;
    } else {
      display.textContent = round(+displayValue, 8);
    }
  }
}

function displayNumber(e) {
  displayValue += e.target.textContent;
  updateDisplay();
}

function updateDisplay() {
  display.textContent = round(+displayValue, 8);
}

function operate(op, a, b) {
  switch (op) {
    case "÷":
      return (b != 0) ? divide(a, b) : "YOU IDIOT!";
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

function round(number, dec) {
  return parseFloat(number.toFixed(dec));
}

function reset() {
  a = 0;
  op = "";
  b = 0;
  displayValue = "";
  display.textContent = "0";
}