// Assignment code here
var letters = "abcdefghijklmnopqrstuvwxyz";
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "123456789";
var characters = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";

// Main Function
var genPassword = function() {
  newPassword = "";
  passwordPool = "";
  passwordMake = "";
  passwordMake += letters;
  alert("Welcome! Answer a few quick questions and we'll have a secure password for you in no time!");
  var pwdLength = passwordLength();

// Upper Case Letters Function Call
  var pwdUpper = passwordUpper();
  if (pwdUpper === true) {
    passwordMake += upperLetters;
  }

// Numbers Function Call
  var pwdNumbers = passwordNumbers();
  if (pwdNumbers === true) {
    passwordMake += numbers;
  }

// CharactersFunction Call
  var pwdCharacters = passwordCharacters();
  if (pwdCharacters === true) {
    passwordMake += characters;
  }
  // Final function, takes in length and possible characters to create final password
  passwordPool = passwordMake.split('');
  for(var i = 0; i < parseInt(pwdLength); i++) {
    newPassword += passwordPool[Math.floor(Math.random() * passwordPool.length)];
  }
}

// Password Length Function
var passwordLength = function() {
  var pwLength = parseInt(prompt('How many characters would you like your password to be? \nPlease choose a number between 8 and 128'));
  if (pwLength >= 8 && pwLength <= 128 && pwLength != null) {
    var pwVerify = window.confirm("Are you sure you'd like to select " + pwLength + '? Ok for yes, cancel for no');
    if (pwVerify === false) { 
      passwordLength();
    } 
  return pwLength;
  }
  else {
    alert("You've chosen an incorrect option, please enter a valid selection between 8 and 128");
    passwordLength();
  }
}

// Uppercase Letters Function
var passwordUpper = function () {
  var pwUpper = window.confirm('Would you like to have uppercase letters in your password? Ok for yes, cancel for no');
  if (pwUpper === false) {
    var pwVerify = window.confirm("Are you sure you don't want uppercase letters in your password? Ok to confirm (No Uppercase Letters), cancel to choose again.");
    if (pwVerify === false) {
      passwordUpper();
    } 
  } else {
    return pwdUpper = true;
    } 
}

// Numbers var/Function 
var passwordNumbers = function () {
  var pwNumber = window.confirm('Would you like to have numbers in your password? Ok for yes, cancel for no');
  if (pwNumber === false ) {
    var pwVerify = window.confirm("Are you sure you don't want numbers in your password? Ok to confirm (No Numbers), cancel to choose again.");
    if (pwVerify === false) {
      passwordNumbers();
    }
  } else {
    return pwdNumbers = true;
    }
}

// Characters var/Function
var passwordCharacters = function () {
  var pwdChar = window.confirm('Would you like to have characters in your password? Ok for yes, cancel for no');
  if (pwdChar === false ) {
    var pwVerify = window.confirm("Are you sure you don't want characters in your password? Ok to confirm (No Characters), cancel to choose again.");
    if (pwVerify === false) {
      passwordCharacters();
    } 
  } else {
  return pwdCharacters = true;
  } 
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
 function writePassword() {
   // var password = generatePassword();
   var passwordText = document.querySelector("#password");

  passwordText.value = newPassword;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
