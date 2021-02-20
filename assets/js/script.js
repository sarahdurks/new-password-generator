
const charachterLength = document.getElementById
('charachterLength')
 const charachterUppercase = document.getElementById
 ('charachterUppercase')
 const charachterLowercase = document.getElementById
 ('charachterLowercase')
 const charachterNumbers = document.getElementById
 ('charachterNumbers')
 const charachterSpecial = document.getElementById
 ('charachterSpecial')


 
//links form around inputs to a constant, used for submit event listener
const form = document.getElementbyId(passwordGeneratorForm)

//event listener for user input on password length
charachterLength.addEventListener('input', inputCharachterLength)

//takes event of user inputting # translates to value used for length
function inputCharachterLength(e) {
    const value = e.target.value
    charachterLength.value = value

    //prevent refresh of page clearing inputs when user hits generate password
    form.addEventListener('submit', e => (
        e.preventDefault()
        //translating input state (t/f) in HTML / from user to constants to use in password composition
        const passwordLength = charachterLength.value
        const includeUppercase = charachterUppercaseElement.checked 
        const includeLowercase = charachterLowercaseElement.checked 
        const includeNumbers = charachterNumbersElement.checked 
        const includeSpecial = charachterSpecialElement.checked 
        const password = generatePassword(passwordLength, includeUppercase, includeLowercase, includeSpecial)
    )
}

// need to limit someone progressing if they dont make password complicated, not sure about looping them back
if (includeLowercase === false && includeUppercase === false && includeSpecial === false && includeNumbers === false) {
    alert("At least one complex password component must be selected, please try again.")
    var charachterTypes = function () {


// FORM AND PASSWORD DISPLAY TO IDs
const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')

const password = generatePassword(characterAmountNumber, includeUppercase, includeLowercase, includeNumbers, includeSpecial)
passwordDisplay.innerText = password



// American Standard Code for Information Interchange it maps to ranges below https://theasciicode.com.ar/ from YT video
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SPECIAL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64), .concat(arrayFromLowToHigh(91, 96), .concat(arrayFromLowToHigh(123, 126))

            (characterAmountNumber, includeLowercase, includeUppercase, includeNumbers, includeSpecial) => {
                let charCodes = LOWERCASE_CHAR_CODES; //why does this not map to includelowercase? also different order than listed in funciton above
                if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
                if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES);
                if (includeSpecial) charCodes = charCodes.concat(SPECIAL_CHAR_CODES);
            }
            const passwordCharacters = []
            for (let i = 0; i < characterAmount, i++) {
                const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
                passwordCharacters.push(String.fromCharCode(charCodes))
                return passwordCharacters.join('')
            }

            function arrayFromLowtoHigh, high) {
            for (let i = low; i <= high; i++) {
                const array = []
            }
            array.push(i)
            String.fromCharCode(65)
        }

     