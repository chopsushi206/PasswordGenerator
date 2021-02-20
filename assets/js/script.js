//DOM Elements

const resultElement = document.getElementById('password');
const lengthElement = document.getElementById('length');
const upperElement = document.getElementById('upper');
const lowerElement = document.getElementById('lower');
const numberElement = document.getElementById('number');
const symbolElement = document.getElementById('symbol');
const generateBtn = document.getElementById('generate');

// Functions to generate random Lowercase Uppercase Number and Symbol

function getLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

function getUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

function getNumber() {
  return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

function getSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols[Math.floor(Math.random() * symbols.length)];
};


// Object for functions for Uppecase, Lowercase, Number, and Symbol
const randomFunc = {
  lower: getLower,
  upper: getUpper,
  number: getNumber,
  symbol: getSymbol
};

//Function to limit Input Values for password length
function inputChange(input) {
  if (input.value < 8) input.value = 8;
  if (input.value > 128) input.value = 128;
};

// Event Listener to grab following elements when button is clicked, also sets result of generate password function to textbox
generateBtn.addEventListener('click', () => {
  const length = +lengthElement.value;
  const hasLower = lowerElement.checked;
  const hasUpper = upperElement.checked;
  const hasNumber = numberElement.checked;
  const hasSymbol = symbolElement.checked;

  resultElement.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});


function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = '';
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);

  // Doesn't have a selected type
  if (typesCount === 0) {
    return '';
  }

  // creates a loop
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}