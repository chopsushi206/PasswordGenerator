// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLength;

//Password Attribute Variables: LCase, UCase, Num, Special Chars

function randomLower () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97); 
};

function randomUpper () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65); 
};

function randomNumber () {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48); 
};

function specialChars () {
  var special = "!@#$%^&*()-_:;./?~`'";
  return special[Math.floor(Math.random() * special.length)]; 
};

// Function to retrieve Password length

function chooseLength () {
  passLength = prompt ("How long would you like your password? Choose between 8-128")

  if (passLength<8) {
    alert("Please choose a number between 8-128");
    chooseLength();
  } else if (passLength>128) {
    alert("Please choose a number between 8-128");
    chooseLength();
  } else if (isNaN(passLength)) {
    alert("Please choose a number between 8-128");
    chooseLength();
  } else {
    return passLength;
  }
};

// Function to include or exclude Lower Case Letters in Password

function chooseLowerCase() {
  lowercasePrompt = prompt("Do you want to include LowerCase letters in your password? \n(Yes or No)");
  lowercasePrompt = lowercasePrompt.toLowerCase();

  if (lowercasePrompt === null || lowercasePrompt === "") {
    alert("Please answer Yes or No");
    chooseLowerCase();

  } else if (lowercasePrompt === "yes" || lowercasePrompt === "y") {
    lowercasePrompt = true;
    return lowercasePrompt;

  } else if (lowercasePrompt === "no" || lowercasePrompt === "n") {
    lowercasePrompt = false;
    return lowercasePrompt;

  } else {
    alert("Please answer Yes or No");
    chooseLowerCase();
  }
  return lowercasePrompt;
};

var lower = chooseLowerCase();

// Function to include or exclude Upper Case Letters in Password

function chooseUpperCase() {
  uppercasePrompt = prompt("Do you want to include uppercase letters in your password? \n(Yes or No)");
  uppercasePrompt = uppercasePrompt.toLowerCase();

  if (uppercasePrompt === null || uppercasePrompt === "") {
    alert("Please answer Yes or No");
    chooseUpperCase();

  } else if (uppercasePrompt === "yes" || uppercasePrompt === "y") {
    uppercasePrompt = true;
    return uppercasePrompt;

  } else if (uppercasePrompt === "no" || uppercasePrompt === "n") {
    uppercasePrompt = false;
    return uppercasePrompt;

  } else {
    alert("Please answer Yes or No");
    chooseUpperCase();
  }
  return uppercasePrompt;
};

var upper = chooseUpperCase();

// Function to include Numbers in the password

function chooseNumber() {
  numberPrompt = prompt("Do you want to include numbers in your password? \n(Yes or No)");
  numberPrompt = numberPrompt.toLowerCase();

  if (numberPrompt === null || numberPrompt === "") {
    alert("Please answer Yes or No");
    chooseNumber();

  } else if (numberPrompt === "yes" || numberPrompt === "y") {
    numberPrompt = true;
    return numberPrompt;

  } else if (numberPrompt === "no" || numberPrompt === "n") {
    numberPrompt = false;
    return numberPrompt;

  } else {
    alert("Please answer Yes or No");
    chooseNumber();
  }
  return numberPrompt;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);