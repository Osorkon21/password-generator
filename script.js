
// 2. lowercase? Y/N
// 3. uppercase? Y/N
// 4. numbers? Y/N
// 5. special chars? Y/N
// 6. must have at least one Y or restart
// 7. generate pw
// 8. display pw

var length;
var lowercase;
var uppercase;
var nums;
var specialChars;


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {

  resetVars();

  var pw = "";

  getLength();

  if (length === null)
    return "Password generation canceled.";

  getPwordParams();



  return pw;
}

function resetVars() {
  length = 0;
  lowercase = false;
  uppercase = false;
  nums = false;
  specialChars = false;
}

function getLength() {
  while (true) {
    length = prompt("Enter password length from 8 to 128.");

    if ((length >= 8 && length <= 128) || length === null)
      return;
    else
      alert("Please enter a length from 8 to 128.");
  }
}

function getPwordParams() {
  lowercase = paramConfirm("lowercase letters");
  uppercase = paramConfirm("uppercase letters");
  nums = paramConfirm("numbers");
  specialChars = paramConfirm("special characters");
}

function paramConfirm(str) {
  return confirm(`Add ${str} to your password?`);
}

// Gary supplied this random number generator code
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// TODO: use this to store letters to pick out a set number of times to generate password? Or do one big string
var allLetters = ["a", "b", "c"];
var letters = "abcdefghijklmnopqrstuvwxyz";

// TODO: randomly generate the x value from 0-25 then pick them out of array however many times u need to
var x = 0;
console.log(letters.charAt(x));

// TODO: Change a string to an array with no delimiter or character limit
var lettersArr = letters.split("");

// TODO: Change an array to a string with no character in between string characters
var newStr = lettersArr.join();

// DO NOT TOUCH Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
