// 7. generate pw (32 special chars)
// 8. display pw

// Easier to read than standalone numbers
const LOWER = 0;
const UPPER = 1;
const NUM = 2;
const SPECIAL = 3;

var length;
var lowercase;
var uppercase;
var nums;
var specialChars;

var letterStr = "abcdefghijklmnopqrstuvwxyz";
var numberStr = "0123456789";
var specCharStr = "\`~!@#$%^&*()_-+={}[]|\\;:\'\",<.>/?";

// Starter code
var generateBtn = document.querySelector("#generate");

// Starter code - Write password to the #password input
function writePassword() {

  // My code
  var password = generatePassword();

  // Starter code
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Handles generation and validation
function generatePassword() {

  // In case user generates more than one password
  resetVars();

  var pw = "";

  getLength();

  // Cancels generation if user selects "Cancel" on length prompt
  if (length === null)
    return "Password generation aborted.";

  // Gets user's password content preferences
  getPwordParams();

  // Validates password preferences, cancels password generation if necessary
  if (!pwordParamsValid())
    return "Password generation aborted.";

  pw = randomizePassword();

  return pw;
}

// Reset variables in case user generates more than one password
function resetVars() {
  length = 0;
  lowercase = false;
  uppercase = false;
  nums = false;
  specialChars = false;
}

// Get password length from user, repeat if invalid input
function getLength() {
  while (true) {
    length = prompt("Enter password length from 8 to 128.");

    if ((length >= 8 && length <= 128) || length === null)
      return;
    else
      alert("Please enter a number from 8 to 128.");
  }
}

// Get password preferences from user
function getPwordParams() {

  lowercase = paramConfirm("lowercase letters");
  uppercase = paramConfirm("uppercase letters");
  nums = paramConfirm("numbers");
  specialChars = paramConfirm("special characters");
}

// Streamline function to reduce typing
function paramConfirm(str) {
  return confirm(`Add ${str} to your password? Cancel means NO.`);
}

// Can password be generated with supplied user preferences? Is it secure?
function pwordParamsValid() {

  // Which preferences are selected doesn't matter - what matters is how many were selected
  var pwordParams = lowercase + uppercase + nums + specialChars;

  // no preferences were selected
  if (pwordParams === 0) {

    alert("You must have at least one character type in your password.");

    // Get parameters again
    getPwordParams();

    // re-validate parameters, abort password generation if necessary
    if (!pwordParamsValid())
      return false;
  }

  // not all preferences were selected
  else if (pwordParams < 4) {

    if (confirm(`You only have ${pwordParams} character type(s) in your password. For security purposes, it is strongly recommended to have all 4. Continue generating an unsecure password?`)) {
      return true;
    }
    else if (confirm("Generate a secure password with all 4 character types? Cancel will abort password generation.")) {
      includeAllCharTypes();
      return true;
    }
    else
      return false; // abort password generation
  }

  return true;
}

// turn all preferences on at user request
function includeAllCharTypes() {
  lowercase = true;
  uppercase = true;
  nums = true;
  specialChars = true;
}

// build password using user character type preferences
function randomizePassword() {

  // Keeping track of these for strength of password purposes
  // var lowerSelected = false;
  // var upperSelected = false;
  // var numSelected = false;
  // var specCharSelected = false;
  // var validPW = false;

  var charsToUse = popCharToUseArray();

  var randPW = "";

  for (var i = length; i > 0; i--) {

    var cTypeToUse = charsToUse[generateRandomNumber(0, charsToUse.length)];

  }

  return randPW;
}

// populates array with desired password character types
function popCharToUseArray() {
  var charsToUse = [];

  if (lowercase)
    charsToUse.push(LOWER);

  if (uppercase)
    charsToUse.push(UPPER);

  if (nums)
    charsToUse.push(NUM);

  if (specialChars)
    charsToUse.push(SPECIAL);

  return charsToUse;
}

// Gary supplied this random number generator code
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Starter code - Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
