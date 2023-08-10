// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function getPassword() {

// variables that are allowed for password use  
var uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseABC = "abcdefghijklmnopqrstuvwxyz";
var specialSymbols = "!@#$%^&*()?><,./;:'[]\|}{=+-_`~";
var numbers = "0123456789";
var multiSelect = "";
var randomResult = "";
  
// User selection of password length must be between 8 and 128 characters  
  var keyLength = parseInt(prompt(
    "Your password must be between 8 to 128 characters long, enter your desired number."
))
console.log(keyLength, typeof keyLength)
// user return to window if the number of characters chosen is out of range
if (keyLength < 8 || keyLength > 128 || isNaN(keyLength)) {
  alert("Your password does not meet the criteria. Password must be between 8 and 128 characters in length. Enter another number.");        
  return null;

// User prompts once valid number of characters are chosen
} else {
    var upperABC = confirm("Your password will contain a variety of uppercase letters, click ok to continue");
    var lowerABC = confirm("Your password will contain a variety of lowercase letters, click ok to continue");
    var numbersConfirm = confirm("Your password will contain numbers, click ok to continue");
    var specialSymbolsConfirm = confirm("Your password will contain a variety of symbols, click ok to continue");
    }


if (lowerABC) {multiSelect += lowercaseABC};
if (upperABC) {multiSelect += uppercaseABC};
if (numbersConfirm) {multiSelect += numbers};
if (specialSymbolsConfirm) {multiSelect += specialSymbols};

// 
for (let i = 0; i < keyLength; i++) {

  randomResult += multiSelect[Math.floor(Math.random() * multiSelect.length)]
  }
return(randomResult);

}



var passwordText = document.querySelector("#password");
function writePassword(randomResult) {
if (password.length === 0) {
    return;
}
passwordText.value = randomResult;
}


// Add event listener to generate button
generateBtn.addEventListener("click", function () { writePassword(getPassword()) });

