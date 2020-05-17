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
  alert("Let's get you a new password! Answer these few questions and we'll have a secure password for you in no time!");
  var pwdLength = passwordLength();

// Lower Case Letters Function Call
  var pwdLower = passwordLower();
  if (pwdLower === true) {
    passwordMake += letters;
  }

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

// Make sure that something was selected, otherwise begin again.
  if (passwordMake === "") {
    alert ("You have no criteria for your password. Lets start over, please make sure to choose at least 1 item for your password.");
    genPassword();
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

// Lower case Letters Function
var passwordLower = function () {
  var pwLower = window.confirm('Would you like to have lower-case letters in your password? Ok for yes, cancel for no');
  if (pwLower === false) {
    var pwVerify = window.confirm("Are you sure you don't want lower-case letters in your password? Ok to confirm (No Lower-Case Letters), cancel to choose again.");
    if (pwVerify === false) {
      passwordLower();
    } 
  } else {
    return pwdLower = true;
    } 
}


// Upper case Letters Function
var passwordUpper = function () {
  var pwUpper = window.confirm('Would you like to have upper-case letters in your password? Ok for yes, cancel for no');
  if (pwUpper === false) {
    var pwVerify = window.confirm("Are you sure you don't want upper-case letters in your password? Ok to confirm (No Upper-Case Letters), cancel to choose again.");
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
  var pwdChar = window.confirm('Would you like to have special characters in your password? Ok for yes, cancel for no');
  if (pwdChar === false ) {
    var pwVerify = window.confirm("Are you sure you don't want special characters in your password? Ok to confirm (No Special Characters), cancel to choose again.");
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
