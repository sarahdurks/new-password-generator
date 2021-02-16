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
const passwordDisplay = document.getElementById('passwordDisplay') 


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
  passwordDisplay.innerText = password
})
//see https://theasciicode.com.ar/
const UPPERCASEE_CHAR_CODES = arrayFromLowToHigh(65,90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97,122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48,57
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58,64), .concat(arrayFromLowToHigh(91,96), .concat(arrayFromLowToHigh(123,126)
)


function generatePassword (characterAmount,includeUppercase, includeLowercase, includeNumbers, includeSpecial){
  let charCodes =LOWERCASE_CHAR_CODES
  if (includeUppercase) charCodes = charCodes.concat (UPPERCASE_CHAR_CODES)
  if (includeUppercase) charCodes = charCodes.concat (NUMBER_CHAR_CODES)
  if (includeUSymbol) charCodes = charCodes.concat (SYMBOL_CHAR_CODES)

  const passwordCharacters = []
for (let i = 0; i < characterAmount, i++) {
  const characterCode = charCodes [Math.floor(Math.random()* charCodes.length)]
passwordCharacters.push(String.fromCharCode(charCodes))
return passwordCharacters.join('')


}

//array was wrong approach last time- super inefficient see above overall list better looped thru

function arrayFromLowtoHigh, high) {
  for )let i = low; i <= high; i++) {
    const array = [ ] 
  }
  array.push(i)


String.fromCharCode(65)

}


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
