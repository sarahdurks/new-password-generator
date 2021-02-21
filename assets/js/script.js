//References items in DOM - creates constant for input of password criteria
const charRangeVal = document.getElementById('charRangeVal')
const charLengthVal = document.getElementById('charLengthVal')
const charUpperEl = document.getElementById('charUpperEl')
const charLowerEl = document.getElementById('charLowerEl')
const charNumsEl = document.getElementById('charNumsEl')
const charSpecialEl = document.getElementById('charSpecialEl')
const passwordForm = document.getElementbyId('passwordForm')
const passwordDisplay = document.getElementById('passwordDisplay')


//This isn't working yet, but in theory should listen and create a new constant based on state of input (e.g., if special checked, pSpecial created)
// Should also prevent default of losing input/refreshing, and convert length input to a value from string

charRangeVal.addEventListener('input', charLengthfx)
charLengthVal.addEventListener('input', charLengthfx)

passwordForm.addEventListener('submit', e => {
	e.preventDefault()
	const pLength = charLengthVal.value
	const pUpper = charUpperEl.checked
	const pLower = charLowerEl.checked
	const pNumbers = charNumsEl.checked
	const pSpecial = charSpecialEl.checked
	const password = generatePassword(pLength, pUpper, pLower, pNumbers, pSpecial)
	passwordDisplay.innerText = password 
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
	let charCodes = LOWER_CHAR // how do I make this not weird / understand first charcodes is pLower
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
//can't get it to work without slider, so sync function needed
function charLengthfx(e) {
	const value = e.target.value
	charLengthVal.value = value
  charRangeVal.value = value
}