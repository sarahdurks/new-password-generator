// Assignment code here


// starting with versions as explained in webdev video, will need to transition to meet assingnment format
// 1st user step is define length
// 4 Password components: Uppercase, lowercase, numbers, special characters
//
// upperLetters = “ABCDEFGHIJKLMNOPSQRSTUVWXYZ”;
// lowerLetters = “abcdefghijklmnopqrstuvwxyz”;
// numbers = “0123456789”;
// specialCharacters = “!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// constants
const characterAmountNumber = document.getElementById ('characterAmountNumber')
const IncludeUppercaseElement = document.getElementById ('includeUppercase')
const IncludeLowercaseElement = document.getElementById ('includeLowercase')
const IncludeNumbersElement = document.getElementById ('includeNumbers')
const IncludeSpecialElement = document.getElementById ('includeSpecial')

const form = document.getElementById('passwordGeneratorForm')

characterAmountNumber.addEventlistener('input', syncCharacterAmount)

//listen for form submission
form.addEventListener('submit', e => {
  e.preventDefault()
  const characterAmount = characterAmountNumber.value
  const includeUppercase = includeUppercaseElement.checked
  const includeLowercase = includeLowercaseElement.checked
  const includeNumbers = includeuNumbersElement.checked
  const includeSpecial = includeSpecialElement.checked
  const password = generatePassword(characterAmount,includeUppercase, includeLowercase, includeNumbers, includeSpecial)
})


function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}

// came with assignment ---------------


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
