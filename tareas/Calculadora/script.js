
let displayValue = '0';
let firstOperand = null;
let operator = null;
let awaitingNextOperand = false;

function press(number) {
  if (awaitingNextOperand) {
    displayValue = String(number);
    awaitingNextOperand = false;
  } else {
    displayValue = displayValue === '0' ? String(number) : displayValue + number;
  }
  updateDisplay();
}

function setOP(op) {
  if (operator !== null) {
    calculate();
  }
  firstOperand = parseFloat(displayValue);
  operator = op;
  awaitingNextOperand = true;
}

function sumar() {
  calculate();
}

function calculate() {
  const secondOperand = parseFloat(displayValue);
  if (operator === '+') {
    displayValue = (firstOperand + secondOperand).toString();
  } else if (operator === '-') {
    displayValue = (firstOperand - secondOperand).toString();
  } else if (operator === '*') {
    displayValue = (firstOperand * secondOperand).toString();
  } else if (operator === '/') {
    if (secondOperand === 0) {
      displayValue = 'Error: Division by zero';
    } else {
      displayValue = (firstOperand / secondOperand).toString();
    }
  }
  operator = null;
  firstOperand = parseFloat(displayValue);
  updateDisplay();
}

function clr() {
  displayValue = '0';
  firstOperand = null;
  operator = null;
  awaitingNextOperand = false;
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById('display');
  display.textContent = displayValue;
}
