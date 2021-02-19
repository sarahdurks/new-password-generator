
// State variablees, make them equivalent to password components created by prompts (if done right)
var CharachterAmountNumber = document.getElementById("CharacterAmountNumber");
var lncludeLowecase = document.getElementById("lncludeLowecase");
var lncludeUppercase = document.getElementById("lncludeLowecase");
var includeNumbers = document.getElementById("includeNumbers");
var includeSpecial = document.getElementById("includeSpecial");


// Series of prompts to define criteria
function definePassword() {
    var characterAmountNumber = prompt("Please enter a number between 8 and 128 for your password length."));
do (isNaN(characterAmountNumber) || characterAmountNumber > 128 || characterAmountNumber < 8);
    while (characterAmountNumber > 7 && characterAmountNumber < 129) 
    
    consolelog(parseInt(characterAmountNumber))
//?? how to save value differently as number
    var charachterTypes = function () {
        includeLowercase = confirm("Would you like lowercase characters?")
        if true == document.createElement('includeLowecase', {id:"includeLowecase"});

        includeUppercase = confirm("Would you like uppercase characters?")
        if true == document.createElement('includeUppercase', {id:"includeUppercase"});

        includeNumbers = confirm("Would you like numeric characters?")
        if true == document.createElement('includeNumbers', {id:"includeNumbers"});

        includeSpecial = confirm("Would you like special characters?")
        if true == document.createElement('includeSpecial', {id:"iincludeSpecial"});

// need to limit someone progressing if they dont make password complicated, not sure about looping them back
if (includeLowercase === false && includeUppercase === false && includeSpecial === false && includeNumbers === false) {
    alert("At least one complex password component must be selected, please try again.")


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

            (characterAmountNumber, includeUppercase, includeLowercase, includeNumbers, includeSpecial) => {
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