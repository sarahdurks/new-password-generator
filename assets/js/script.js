// declare variables (?)
var characterAmountNumber
var includeUppercase
var includeLowercase
var includeNumbers
var includeSpecial


// event listener, but VS Code converted and hasnt worked yet

const newLocal = "myBtn"
document.getElementById("myBtn").addEventListener("click", myFunction);

// trying to have the prompts run as a series, not sure thats done right
// need to "remember inputs" to translate them to the constants like in video
// originally got this first prompt to work validating in a number range now totally broken, not sure if it needs to flip back to a do/while
// want to kick off function of "what are the criteria for this password" and cycle through
// true option seemed efficient compared to earlier structure but nto sure its right

function definePassword() {
    var characterAmountNumber = prompt("Please enter a number between 8 and 128 for your password length."));
while (isNaN(characterAmountNumber) || characterAmountNumber > 128 || characterAmountNumber < 8); {
    if (characterAmountNumber > 7 && characterAmountNumber < 129) console.log(parseInt(characterAmountNumber))
    if {
        break,
    }

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

//a prompt blocker at end trying to make a user include one complex type, need to make sure they go back to earlier step if no

if (includeLowercase === false && includeUppercase === false && includeSpecial === false && includeNumbers === false) {
    alert("At least one complex password component must be selected, please try again.")
//clearly not the most user friendly way ^
}
c//an we convert somehow like this?https://www.w3schools.com/jsref/met_document_createelement.asp
  //part of an API? storing globacal public
  /*function getInput() {
    window.userInput = document.getElementById('userInput').value;
    console.log(userInput);
    alertUserInput();
}  

function alertUserInput() {
    alert(userInput);
}
*/

var subButton = document.getElementById('subButton');
subButton.addEventListener('click', userInput, false);
 


// how do i aggregate and convert the trues?

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