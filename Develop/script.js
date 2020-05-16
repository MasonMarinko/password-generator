// Assignment code here

// for (var i = 0; i < letters.length; i++)
var letters = "abcdefghijklmnopqrstuvwxyz";
var characters = "!@#$%^&*()";
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "123456789";
var passwordPool = '';
var passwordLength = 4;



//if (length < 8 || length > 128 || length === null) {
  //alert ("Must choose a number between 8 and 128!");
  //return generatePassword();
//}
// for (var i = 0; i < 4; i++){

  var genPassword = function() {
    passwordMake = '';
  alert("Welcome! Answer a few quick questions and we'll have a secure password for you in no time!");

  passwordMake += letters

  pwNumbers = prompt('Would you like to have numbers in your password? Please answer Yes or No');
  if (pwNumbers === "Yes" || pwNumbers === 'yes' || pwNumbers === 'YES') {
    passwordMake += numbers
  }

  pwUpper = prompt('Would you like to have uppercase letters in your password? Please answer Yes or No');
  if (pwUpper === "Yes" || pwUpper === 'yes' || pwUpper === 'YES') {
    passwordMake += upperLetters
  }

  pwCharacters = prompt('Would you like to have special characters in your password? Please answer Yes or No');
  if (pwCharacters === "Yes" || pwCharacters === 'yes' || pwCharacters === 'YES') {
    passwordMake += characters
  }

  pwReset = prompt('Would you like to start over? Please answer Yes or No');
  if (pwReset === "Yes" || pwReset === 'yes' || pwReset === 'YES') {
    genPassword();
  }

  passwordPool = passwordMake.split('').sort(function(){return 0.5-Math.random()}).join('');

  return passwordPool

}

// console.log (genPassword())


//var passwordLength = function() {
  //var pwLength = prompt('How many characters would you like your password to be? \nPlease choose a number between 8 and 128');

  //if (pwLength >= 8 && pwLength <= 128 && pwLength != null) {
    //alert("Great Work!");
    //return ;
  //}
  //else {
    //alert("Please try again");
    //return passwordLength = pwLength
  //}
//}


//var passwordLength = function() {

  //if (pwLength >= 8 && pwLength <= 50) {
    //alert("Got it!");
  //}
  //else {
    //alert("Please Try Again");
    //return passwordLength();
  //}
//}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
 function writePassword() {
   // var password = generatePassword();
   var passwordText = document.querySelector("#password");

  passwordText.value = passwordPool;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
