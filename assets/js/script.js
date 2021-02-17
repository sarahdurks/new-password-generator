



 // 1st Step - Determining password length // parse ---> making it a number,otherwise comes back as a string which wouldnt work inc checking range
function LengthPrompt()("How many characters do you want to include in your password? Must between 8 and 128.", "8"); 
}
var number = parseInt(window.prompt(text, "")); 
checkNumber(number);
}
function checkNumber() {
    if (number >= 8 && number <= 128) {
      document.getElementById("characterAmountNumber")
    } else if (isNaN(number)) {
        checkNumber("Your submission (" + number + ") doesn't meet criteria. It is not between 8 and 128", "");
    }


    // 2nd Step - Include uppercase //should these be "confirm" as Y/N // if cancel is null do i need to represent it?
    var includeUppercase = prompt("Do you want to include Upper case letters in your password?");
    if (includeUppercase) {
        document.getElementById("includeUppercase");
    } else {
        console.log(“”);
    } 

    // 3rd Step - Include lowercase
    var includeLowercase = prompt("Do you want to include Lower case letters in your password?");
    if (includeLowercase) {
        document.getElementById(“includeLowercase”);
        }
        else {
            console.log(“”);
        }

        // 4th Step - Include Numbers
        var includeNumbers = prompt("Do you want to include Numbers in your password?");
        if (includeNumbers) {
            document.getElementById("includeNumbers");
        } else {
            console.log(“”);
        }

        // 5th Step - Include Special Characters
        var includeSpecial = prompt("Do you want to include Special Characters (e.g., !@#$%) in your password?");
        if (includeSpecial) {
            document.getElementById(“includeSpecial”);
        } else {
            console.log(“”);
        }



        //Not clear here rewatch video
        // Video watched for technique was a different outcome (HTML form with checkboxes), so may not be the most direct approach?
        // May not have even setup question series to document as needed for thisyet
        //think the characterAmountNumber needs to be logged after verified (?)
        const characterAmountNumber = document.getElementById('characterAmountNumber')
        const IncludeUppercaseElement = document.getElementById('includeUppercase') 
        const IncludeLowercaseElement = document.getElementById('includeLowercase') 
        const IncludeNumbersElement = document.getElementById('includeNumbers')
        const IncludeSpecialElement = document.getElementById('includeSpecial')

        const form = document.getElementById('passwordGeneratorForm')
        const passwordDisplay = document.getElementById('passwordDisplay') 


        characterAmountNumber.addEventlistener('input', syncCharacterAmount) 
        //code from video I'm preserving to reference logic - instead of "checked" should be true from prompts
        //form.addEventListener('submit', e => {
        // e.preventDefault()
        // const characterAmount = characterAmountNumber.value
        // const includeUppercase = includeUppercaseElement.checked
        // const includeLowercase = includeLowercaseElement.checked
        // const includeNumbers = includeuNumbersElement.checked
        // const includeSpecial = includeSpecialElement.checked

        const password = generatePassword(characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSpecial)
        passwordDisplay.innerText = password
    })
// see https://theasciicode.com.ar/ American Standard Code for Information Interchange it maps to ranges below
const UPPERCASEE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64), .concat(arrayFromLowToHigh(91, 96), .concat(arrayFromLowToHigh(123, 126)) // symbols all over the chart here so list is pieced together
             

// here forward need to rewarch video, didn't retain enough
                function generatePassword(characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSpecial) {
                    let charCodes = LOWERCASE_CHAR_CODES
                    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
                    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
                    if (includeSpecial) charCodes = charCodes.concat(SPECIAL_CHAR_CODES)

                    const passwordCharacters = []
                    for (let i = 0; i < characterAmount, i++) {
                        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
                        passwordCharacters.push(String.fromCharCode(charCodes))
                        return passwordCharacters.join('')
                    }

                    function arrayFromLowtoHigh, high) {
                    for) let i = low; i <= high; i++) {
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


        /* https://stackoverflow.com/questions/15047140/javascript-prompt-number-and-continue-prompting-if-answer-is-wrong not sure this is right
PROMPTS//www.youtube.com/watch?v=ncKbvZUIJn0
 */
