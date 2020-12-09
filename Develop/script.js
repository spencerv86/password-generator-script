// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

var upperCaseChar = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowerCaseChar = ["abcdefghijklmnopqrstuvwxyz"];
var numericChar = ["1234567890"];
var specialChar = ["~!@#$%^&*()-_=+<>?"];


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


function generatePassword() {



  return "temporary password";
}

console.log()

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
