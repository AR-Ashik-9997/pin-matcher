document.getElementById("generate").addEventListener("click", function () {
  const pin = getPin();
  setDisplayElement("display-input", pin);
});

document.getElementById("number").addEventListener("click", function (event) {
  const inputNumber = event.target.innerText;
  NumberDisplay("number-display", inputNumber);
});
document.getElementById("varify").addEventListener("click", function () {
  varifyPin();
});
