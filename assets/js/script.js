// Assignment code here

// https://stackoverflow.com/questions/15047140/javascript-prompt-number-and-continue-prompting-if-answer-is-wrong not sure this is right



PROMPTS

// Length Prompt - More Complex - Need to validate number meets range and actually is a number - not sure this is close yet
characterAmountNumber = prompt("How many characters do you want toinclude in your password? Must between 8-128.","8");

function promptcharacterAmountNumber( text)
{
    if(text == '' ){
     text = "Please enter a number from 8 - 128";   
    }
    var number = parseInt(window.prompt(text, ""));
    checkNumber(number);

}
function checkNumber(){
if (number <= 128 && number >= 8) {
    document.write("Your number (" + number + ")  matches requirements", "");
} else if (isNaN(number)) {
    promptForNumber("Your submission (" + number + ") doesn't meet criteria. It is not between 8 and 128", "");
}

// 1st Prompt - Include uppercase
var includeUppercase = prompt("Do you want to include Upper case letters in your password?");
if(includeUppercase)
{document.getElementById("includeUppercase");} else {console.log(“”);}  // Trying to "keep" value user inputs if true to later include that character tyop in  password. not sure that is correct approach

// 2nd Prompt - Include lowercase
var includeLowercase = prompt("Do you want to include Lower case letters in your password?");
if(includeLowercase)
  {document.getElementById((“includeLowercase”);} else { console.log(“”);}

// 3rd Prompt - Include Numbers
var includeNumbers = prompt ("Do you want to include Numbers in your password?");
if(includeNumbers)
{document.getElementById("includeNumbers"); } else { console.log(“”);}

// 4th Prompt - Include Numbers
var includeSpecial = prompt ("Do you want to include Special Characters (e.g., !@#$%) in your password?");
if(includeSpecial)
{document.getElementById(“includeSpecial”); } else { console.log(“”); }



//Not clear here rewatch video
/* This part takes dynamic T/F value from  user input in prompts and translates it into a constant - user action means we log element id, and then if included it becomes a part of password */ 
const characterAmountNumber = document.getElementById ('characterAmountNumber') // Length set by user
const IncludeUppercaseElement = document.getElementById ('includeUppercase') //  If user includes uppercase
const IncludeLowercaseElement = document.getElementById ('includeLowercase') // If user includes lowercase
const IncludeNumbersElement = document.getElementById ('includeNumbers') // if user inlcudes numbers
const IncludeSpecialElement = document.getElementById ('includeSpecial') // if user inlcudes  special characters

const form = document.getElementById('passwordGeneratorForm') // maps to form on index.html
const passwordDisplay = document.getElementById('passwordDisplay') // maps to where password will update and show


characterAmountNumber.addEventlistener('input', syncCharacterAmount) //takes number we finally accept from first prompt in the right range
// May need thisbut if receiving prompts above maybe not. This is the "form version from video" 
//listen for form submission - needsto change to go to prompts
//form.addEventListener('submit', e => {
 // e.preventDefault()
 // const characterAmount = characterAmountNumber.value
 // const includeUppercase = includeUppercaseElement.checked
 // const includeLowercase = includeLowercaseElement.checked
  // const includeNumbers = includeuNumbersElement.checked
 // const includeSpecial = includeSpecialElement.checked
  
  //adds up to the password
  const password = generatePassword(characterAmount,includeUppercase, includeLowercase, includeNumbers, includeSpecial)
  passwordDisplay.innerText = password
})



// do not actually need to list these out, can tie them to a constant representing long list
// see https://theasciicode.com.ar/ American Standard Code for Information Interchange it maps to ranges below
const UPPERCASEE_CHAR_CODES = arrayFromLowToHigh(65,90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97,122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48,57
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58,64), .concat(arrayFromLowToHigh(91,96), .concat(arrayFromLowToHigh(123,126)
)
//will need to make true to question = include

function generatePassword (characterAmount,includeUppercase, includeLowercase, includeNumbers, includeSpecial){
  let charCodes =LOWERCASE_CHAR_CODES
  if (includeUppercase) charCodes = charCodes.concat (UPPERCASE_CHAR_CODES) // are these less random if concatenated?
  if (includeNumbers) charCodes = charCodes.concat (NUMBER_CHAR_CODES)
  if (includeSpecial) charCodes = charCodes.concat (SYMBOL_CHAR_CODES)

const passwordCharacters = []
for (let i = 0; i < characterAmount, i++) {
  const characterCode = charCodes [Math.floor(Math.random()* charCodes.length)]
passwordCharacters.push(String.fromCharCode(charCodes))
return passwordCharacters.join('')
}

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

