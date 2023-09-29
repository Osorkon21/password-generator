// DO NOT TOUCH Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Gary supplied this random number generator code
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// AS AN employee with access to sensitive data
// I WANT to randomly generate a password that meets certain criteria
// SO THAT I can create a strong password that provides greater security
//   ```

// ## Acceptance Criteria

// ```
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and / or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// THIS CODE IS FROM SLACK, PROVIDED BY GARY

// // These variables are in the global scope
// var nouns = ["car", "dog", "tree", "house"];
// var verbs = ["drove", "swam", "entered", "mangled"];
// var adjs = ["quickly", "easily", "happily", "eagerly"];
// var sentence = "";


// // My ONLY job is to generate a random number between min and max
// function generateRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// // My ONLY job is to get a random noun
// function addANoun() {
//   var random = generateRandomNumber(0, nouns.length - 1);
//   sentence += `${nouns[random]} `;
// }

// // My ONLY job is to get a random verb
// function addAVerb() {
//   var random = generateRandomNumber(0, verbs.length - 1);
//   sentence += `${verbs[random]} `;
// }

// // My ONLY job is to get a random adjective
// function addAnAdjective() {
//   var random = generateRandomNumber(0, adjs.length - 1);
//   sentence += `${adjs[random]} `;
// }

// function start() {
//   sentence += "The ";
//   addANoun();
//   addAnAdjective();
//   addAVerb();
//   sentence += "the ";
//   addANoun();

//   console.log(`Here is your sentence: ${sentence}`);
// }

// // This is ONLY function that actually executes when Javascript loads the file
// start();

// END CODE FROM SLACK, PROVIDED BY GARY



// TODO: Write this thing to match these README expectations

// TODO: DELETE THESE README COMMENTS WHEN DONE
// TODO: DELETE ALL "DO NOT TOUCH" COMMENTS WHEN DONE

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and / or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// TODO: write this function, return a string
function generatePassword() {

  var numOfChar = prompt("How long should the password be? Length must be within 8 to 128 characters.");
  numOfChar = Number(numOfChar);
  var validNum = true;

  if ((numOfChar < 8 && numOfChar > 128) || numOfChar === NaN)
    validNum = false;

  while (!validNum) {
    numOfChar = prompt("Please enter a valid number between 8 and 128.");
    numOfChar = Number(numOfChar);
  }


  numOfChar = prompt("Please enter a valid number between 8 and 128.");
  numOfChar = Number(numOfChar);

  console.log(numOfChar);
  console.log(typeof numOfChar);

  // pops up prompt box with text entry on browser, val entried saved to var
  // val entered will by default be treated as a string
  var name = prompt("What is your name?");

  // pops up yes/no box on browser, yes == true, no == false, val saved to var
  // val entered will by default be treated as a boolean
  var doYouWantToDoSomething = confirm("Do you want to do something?");

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
