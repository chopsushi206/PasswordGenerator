// Assignment Code
var generateBtn = document.querySelector("#generate");


//Password Attribute Variables: LCase, UCase, Num, Special, & Length

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


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
