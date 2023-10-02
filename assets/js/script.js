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
var specCharStr = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

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

    // I need a number, not a string
    length = Number(prompt("Enter password length from 8 to 128."));

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
  var lowerSelected = false;
  var upperSelected = false;
  var numSelected = false;
  var specCharSelected = false;

  // populate array with user selected character types
  var charTypesToUse = populateCharTypesToUse();

  var randPW = "";

  for (var i = length; i > 0; i--) {

    // pull random character type from array
    var selectedCharType = charTypesToUse[genRandNum(0, charTypesToUse.length - 1)];

    // only run this if i within bounds - don't run all four checks every loop
    if (i <= 4) {

      // forces desired character types at end of password if they aren't already present - I'm sure
      // this is not good cryptographic practice, but for this assignment I am only interested in
      // making sure there are at least one of each desired character type present
      if (i === 4)
        selectedCharType = ensureAllCharTypesPresent(selectedCharType, LOWER, lowerSelected);
      else if (i === 3)
        selectedCharType = ensureAllCharTypesPresent(selectedCharType, UPPER, upperSelected);
      else if (i === 2)
        selectedCharType = ensureAllCharTypesPresent(selectedCharType, NUM, numSelected);
      else
        selectedCharType = ensureAllCharTypesPresent(selectedCharType, SPECIAL, specCharSelected);
    }

    // Keeps track of what character types have been picked
    if (!lowerSelected && selectedCharType === LOWER)
      lowerSelected = true;
    else if (!upperSelected && selectedCharType === UPPER)
      upperSelected = true;
    else if (!numSelected && selectedCharType === NUM)
      numSelected = true;
    else if (!specCharSelected && selectedCharType === SPECIAL)
      specCharSelected = true;

    // append selected character to password
    randPW += getCorrectChar(selectedCharType);
  }

  return randPW;
}

// populates array with desired password character types
function populateCharTypesToUse() {
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
function genRandNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// if password needs a certain missing character type this supplies it
function ensureAllCharTypesPresent(selectedCharType, cTypeToCheckFor, isTypePresent) {

  // what types did user request
  var neededTypes = populateCharTypesToUse();
  var checkForType = false;

  // check array for presence of the type that was passed in
  neededTypes.forEach(function (arrEl) {
    if (arrEl === cTypeToCheckFor);
    checkForType = true;
  });

  // change character type to force desired character type into end of password if necessary
  if (checkForType)
    if ((selectedCharType !== cTypeToCheckFor) && !isTypePresent)
      selectedCharType = cTypeToCheckFor;

  return selectedCharType;
}

// randomly selects characters from appropriate character type array
function getCorrectChar(num) {

  if (num === LOWER)
    return letterStr[genRandNum(0, letterStr.length - 1)];
  else if (num === UPPER)
    return letterStr[genRandNum(0, letterStr.length - 1)].toUpperCase();
  else if (num === NUM)
    return numberStr[genRandNum(0, numberStr.length - 1)];
  else
    return specCharStr[genRandNum(0, specCharStr.length - 1)];
}

// Starter code - Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
