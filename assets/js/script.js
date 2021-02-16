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


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
