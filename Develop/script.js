// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


var upperChar = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowerChar = ["abcdefghijklmnopqrstuvwxyz"];
var numChar = ["1234567890"];
var specChar = ["~!@#$%^&*()-_=+<>?"];


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


function generatePassword() {
  var pwLength = prompt(
    "How long would you like your password to be? (Please enter a number between 8-128)");
  var upperQ = confirm("Would you like to add uppercase letters to your password?");
  var lowerQ = confirm("Would you like to add lowercase letters to your password?");
  var numQ = confirm("Would you like to add numeric characters to your password? (Ex: '1', '2', '7')");
  var specQ = confirm("Would you like to add special characters to your password? (Ex: '?', '@', '$')");

  
  return "temporary password";
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
