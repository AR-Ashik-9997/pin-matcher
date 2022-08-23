function getPin() {
  const pin = generatePin();
  const pinString = pin + "";
  if (pinString.length === 4) {
    return pin;
  } else {
    return getPin();
  }
}
function generatePin() {
  const random = Math.round(Math.random() * 10000);
  return random;
}

function setDisplayElement(elementId, pin) {
  const display = document.getElementById(elementId);
  display.value = pin;
}

function NumberDisplay(elementId, number) {
  const displayNumber = document.getElementById("number-display");
  const previousNumber = displayNumber.value;
  const curentNumber = previousNumber + number;

  if (isNaN(number)) {
    if (number === "C") {
      const clearDisplay = "";
      setDisplayElement(elementId, clearDisplay);
    } else if (number === "<") {
      const digit = previousNumber.split("");
      digit.pop();
      const joinDigit = digit.join("");
      setDisplayElement(elementId, joinDigit);
    }
  } else {
    setDisplayElement(elementId, curentNumber);
  }
}

function varifyPin() {
  const generatePin = document.getElementById("display-input");
  const number = document.getElementById("number-display");
  const correct = document.getElementById("correct");
  const incorrect = document.getElementById("incorrect");
  if (generatePin.value === number.value) {
    correct.style.display = "block";
    incorrect.style.display = "none";
  } else {
    incorrect.style.display = "block";
    correct.style.display = "none";
  }
}
