// password components mapped to DOM ids per user input (checkboxes) of criteria
const charachterLength = document.getElementById('charachterLength')
const charachterUppercase = document.getElementById('charachterUppercase')
const charachterLowercase = document.getElementById('charachterLowercase')
const charachterNumbers = document.getElementById('charachterNumbers')
const charachterSpecial = document.getElementById('charachterSpecial')
const form = document.getElementbyId('passwordForm') // form in total
const passwordDisplay = document.getElementById('passwordDisplay') //displayed password

// Arrays for "types" - rather than the a,b,c list - used in video https://theasciicode.com.ar/ 
// American Standard Code for Information Interchange it maps to ranges below 
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SPECIAL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64), .concat(arrayFromLowToHigh(91, 96), .concat(arrayFromLowToHigh(123, 126))



// event listener for user input on password length, translating to value
// has to be handled differently like parseInt in prompt approach, to get number
charachterLength.addEventListener('input', inputCharachterLength)

// prevent refresh of page clearing inputs when user hits generate password (default behavior for event)
form.addEventListener('submit', e => {
        e.preventDefault()
        // translating input state (t/f) in HTML / from user to constants to use in password composition
        const passwordLength = charachterLength.value
        const includeUppercase = charachterUppercaseElement.checked
        const includeLowercase = charachterLowercaseElement.checked
        const includeNumbers = charachterNumbersElement.checked
        const includeSpecial = charachterSpecialElement.checked
        const password = generatePassword(passwordLength, includeUppercase, includeLowercase, includeSpecial)
        passwordDisplay.innerText = password //maybe where things are breaking?
})

/*need to limit someone progressing if they dont make password complicated, not sure about looping them back
if (includeLowercase === false && includeUppercase === false && includeSpecial === false && includeNumbers === false) {
    alert("At least one complex password component must be selected, please try again.")*/

function generatePassword(passwordLength, includeUppercase, includeLowercase, includeSpecial){
let charCodes = LOWERCASE_CHAR_CODES 
if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
if (includeSpecial) charCodes = charCodes.concat(SPECIAL_CHAR_CODES)
}

const passwordCharacters = []
for (let i = 0; i < passwordLength; i++) {
const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
passwordCharacters.push(String.fromCharCode(charCodes))
}
return passwordCharacters.join('')
}

function arrayFromLowtoHigh(low, high) {
  const array = []
for (let i = low; i <= high; i++) {
  array.push(i)
}
return array
}

function inputCharachterLength(e) {
  const value = e.target.value
  charachterLength.value = value
}