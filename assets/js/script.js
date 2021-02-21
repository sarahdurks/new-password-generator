//References items in DOM - creates constant for input of password criteria
const charLengthVal = document.getElementById('charLength')
const charUpperEl = document.getElementById('charUpper')
const charLowerEl = document.getElementById('charLower')
const charNumsEl = document.getElementById('charNums')
const charSpecialEl = document.getElementById('charSpecial')
const form = document.getElementbyId('passwordForm')
const passwordDisplay = document.getElementById('passwordDisplay')


//This isn't working yet, but in theory should listen and create a new constant based on state of input (e.g., if special checked, pSpecial created)
// Should also prevent default of losing input/refreshing, and convert length input to a value from string
charLength.addEventListener('input', charachterLengthfx)
form.addEventListener('submit', e => {
	e.preventDefault()
	const pLength = charLengthVal.value
	const pUpper = charUpperEl.checked
	const pLower = charLowerEl.checked
	const pNumbers = charNumsEl.checked
	const pSpecial = charSpecialEl.checked
	const password = generatePassword(pLength, pUpper, pLower, pNumbers, pSpecial)
	passwordDisplay.innerText = password //maybe where things are breaking?
})

//Don't yet have validation of missing criteria if no boxes selected + warning

// Arrays for "types" - rather than the a,b,c list - used in video https://theasciicode.com.ar/ 
// American Standard Code for Information Interchange it maps to ranges below 
const UPPER_CHAR = arrayRange(65, 90)
const LOWER_CHAR = arrayRange(97, 122)
const NUM_CHAR = arrayRange(48, 57)
const SPECIAL_CHAR = arrayRange(33, 47).concat(
	arrayRange(58, 64)
).concat(
	arrayRange(91, 96)
).concat(
	arrayRange(123, 126)
)
// function goes through and grabs from refrenced ranges
function arrayRange(low, high) {
	const array = []
	for (let i = low; i <= high; i++) {
		array.push(i)
	}
	return array
}

//Puts together what is returned for each type
function generatePassword(pLength, pLower, pUpper, pNumbers, pSpecial) {
	let (pLower) charCodes = LOWER_CHAR // how do I make this not weird / understand first charcodes is pLower
	if (pUpper) charCodes = charCodes.concat(UPPER_CHAR)
	if (pNumbers) charCodes = charCodes.concat(NUM_CHAR)
	if (pSpecial) charCodes = charCodes.concat(SPECIAL_CHAR)



	//output of additive/concat categories for password, should display for user
	const pwChar = []
	for (let i = 0; i < pLength; i++) {
		const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
		pwChar.push(String.fromCharCode(characterCode))
	}
	return pwChar.join('')
}

//there may be an easier way to do this since not keeping twp inputoptions for #s, like parseInt in prompts
function charLengthfx(e) {
	const value = e.target.value
	charLength.value = value
}