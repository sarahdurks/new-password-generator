
var characterAmountNumber
var includeUppercase     
var includeLowercase
var includeNumbers
var includeSpecial

const newLocal = "myBtn"
document.getElementById(newLocal).addEventListener("click", myFunction);

function myFunction() {
    var charachterAmountNumber = 0
    do {var characterAmountNumber = parseInt(prompt("Please enter a number between 8 and 128 for your password length.", ""));
} while(isNaN(characterAmountNumber) || characterAmountNumber > 128 || characterAmountNumber < 8); {
           if (characterAmountNumber =>8 && characterAmountNumber <=128) {
           break; 
        }
    if (charachterAmountNumber) {
        if (confirm("Would you like to use lowercase characters?") == true) {
            includeLowercase = true
        } 

        if (confirm("Do you want to include Upper case letters in your password?") == true) {
            includeUppercase = true
        }

        if (confirm("Do you want to include Special Characters (e.g., !@#$%) in your password?") == true) {
            includeSpecial = true
        }

        if (confirm("Do you want to include Numbers in your password?") == true) {
            includeNumbers = true
        }
        if (includeLowercase === false && includeUppercase === false && includeSpecial === false && includeNumbers === false) {
            alert("At least one complex password component must be selected.")
        }


    // DOCUMENTED USER INPUTS >> CONSTANTS
    const characterAmountNumber = document.getElementById('characterAmountNumber')
    const IncludeUppercaseElement = document.getElementById('includeUppercase')
    const IncludeLowercaseElement = document.getElementById('includeLowercase')
    const IncludeNumbersElement = document.getElementById('includeNumbers')
    const IncludeSpecialElement = document.getElementById('includeSpecial')


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

    // if we include a type in a password, this  references the array defined above
    // suggestion from VS code changed this from being labeled function?
    (characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSpecial) => {
    let charCodes = LOWERCASE_CHAR_CODES; //why does this not map to includelowercase? also different order than listed in funciton above
            if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
            if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES);
            if (includeSpecial) charCodes = charCodes.concat(SPECIAL_CHAR_CODES);
        }
// rewatch video for below
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
function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}

