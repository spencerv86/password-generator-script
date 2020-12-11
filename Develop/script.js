// Assignment Code
var generateBtn = document.querySelector("#generate");

// Defines the different arrays that the user can draw from to populate their potential character pool.

var upperChar = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowerChar = ["abcdefghijklmnopqrstuvwxyz"];
var numChar = ["1234567890"];
var specChar = ["~!@#$%^&*()-_=+<>?"];

// This function runs the generatePassword function and replaces the placeholder text with the generated password.

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// This function generates the password

function generatePassword() {
  var charPool = "";

// This prompt asks the user to determine how long their password will be.
  var pwLength = prompt(
    "How long would you like your password to be? \n(Please enter a number between 8-128)"
  );
 // This prevents the user from inputting numbers outside the defined criteria or inputting non-numbers.
  while (pwLength < 8 || pwLength > 128 || isNaN(parseInt(pwLength))) {
    pwLength = prompt(
      "Sorry! That's an invalid character limit. \nPlease try again. \nIt must be between 8-128."
    );
  }
// This asks the user if they would like to include uppercase letters (upperChar) in their password
  var upperQ = confirm(
    "Would you like to add uppercase letters to your password?"
  );
  if (upperQ === true) {
    charPool = charPool.concat(upperChar);
  }
// This asks the user if they would like to include lowercase letters (lowerChar) in their password
  var lowerQ = confirm(
    "Would you like to add lowercase letters to your password?"
  );
  if (lowerQ === true) {
    charPool = charPool.concat(lowerChar);
  }
// This asks the user if they would like to include numbers (numChar) in their password
  var numQ = confirm(
    "Would you like to add numeric characters to your password? (Ex: '1', '2', '7')"
  );
  if (numQ === true) {
    charPool = charPool.concat(numChar);
  }
// This asks the user if they would like to include special characters (specChar) in their password
  var specQ = confirm(
    "Would you like to add special characters to your password? (Ex: '?', '@', '$')"
  );
  if (specQ === true) {
    charPool = charPool.concat(specChar);
  }

  console.log(pwLength);
  console.log(charPool);
  var pwGen = "";

  // This loop runs picks a random character from the user-defined pool repeatedly until the password length has been met.
  for (var i = 0; i < pwLength; i++) {
    var randNum = Math.floor(Math.random() * charPool.length);
    pwGen = pwGen.concat(charPool.charAt(randNum));
  }

  console.log(pwGen);

  
  return "Your password is " + pwGen;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

