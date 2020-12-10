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
  var charPool = "";

  var pwLength = prompt(
    "How long would you like your password to be? \n(Please enter a number between 8-128)"
  );
  // console.log(parseInt(pwLength));
  while (pwLength < 8 || pwLength > 128 || isNaN(parseInt(pwLength))) {
    pwLength = prompt(
      "Sorry! That's an invalid character limit. \nPlease try again. \nIt must be between 8-128."
    );
  }

  var upperQ = confirm(
    "Would you like to add uppercase letters to your password?"
  );
  if (upperQ === true) {
    charPool = charPool.concat(upperChar);
  }

  var lowerQ = confirm(
    "Would you like to add lowercase letters to your password?"
  );
  if (lowerQ === true) {
    charPool = charPool.concat(lowerChar);
  }

  var numQ = confirm(
    "Would you like to add numeric characters to your password? (Ex: '1', '2', '7')"
  );
  if (numQ === true) {
    charPool = charPool.concat(numChar);
  }

  var specQ = confirm(
    "Would you like to add special characters to your password? (Ex: '?', '@', '$')"
  );
  if (specQ === true) {
    charPool = charPool.concat(specChar);
  }

  console.log(pwLength);
  console.log(charPool);
  var pwGen = "";

  for (var i = 0; i < pwLength; i++) {
    var randNum = Math.floor(Math.random() * charPool.length);
    pwGen = pwGen.concat(charPool.charAt(randNum));
  }

  console.log(pwGen);

  return "Your password is " + pwGen;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// for (var i = 0; i < pwLength; i++){
//   var result = charPool.charAt(Math.floor(Math.random() * charPool.length));
// }
