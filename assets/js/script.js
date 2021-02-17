
// DETERMINE LENGTH AND INCLUSION OF CHARACTER TYPES FOR PASSWORD IN PROMPTS.

// 1st Step - Establish Password Length 

function promptMe(){
var characterAmountNumber = window.prompt("How many characters do you want to include in your password? Must between 8 and 128.", "");
if (characterAmountNumber === "" || characterAmountNumber === null || isNaN(characterAmountNumber) || characterAmountNumber < 8 || characterAmountNumber > 128 ||) // trying to list all the things we don't want
    {window.alert("Not a valid password length, please submit a number between 8 - 128.")}
   else {
    document.getElementById('characterAmountNumber'} // Do I need to parse this to make a usable number? 
}   
    var taskFormHandler = function (event) {
        event.preventDefault();
    // convert answer from prompt to an actual number
      shopOptionPrompt = parseInt(shopOptionPrompt);

  // 2nd Step - Include uppercase 
  var includeUppercase = window.confirm("Do you want to include Upper case letters in your password?");
    if (includeUppercase) {
        document.getElementById(“includeUppercase”);
    }
  
  // 3rd Step - Include lowercase
  var includeLowercase = window.confirm("Do you want to include Lower case letters in your password?");
    if (includeLowercase) {
        document.getElementById(“includeLowercase”);
    }
  
   // 4th Step - Include numbers
   var includeNumbers = window.confirm("Do you want to include Numbers in your password?");
    if (includeNumbers) {
        document.getElementById(“includeNumbers”);
    }
  
    // 5th Step - Include special characters
    var includeSpecial = cwindow.confirm("Do you want to include Special Characters (e.g., !@#$%) in your password?");
    if (includeSpecial) {
     document.getElementById(“includeSpecial”);
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
    // suggestion from vs code changed this from being labeled function?
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


//What happens if someone says no to every character type?

// 
//* https://stackoverflow.com/questions/15047140/javascript-prompt-number-and-continue-prompting-if-answer-is-wrong not sure this is right
// PROMPTS//www.youtube.com/watch?v=ncKbvZUIJn0
// 
// code from video I'm preserving to reference logic of - instead of "checked" should be true from prompts
// form.addEventListener('submit', e => {
// e.preventDefault()
// const characterAmount = characterAmountNumber.value
// const includeUppercase = includeUppercaseElement.checked
    // const includeLowercase = includeLowercaseElement.checked
    // const includeNumbers = includeuNumbersElement.checked
    // const includeSpecial = includeSpecialElement.checked
    // ? characterAmountNumber.addEventlistener('input', syncCharacterAmount) // not sure on this part (had after password display)