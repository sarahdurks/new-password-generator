//References items in DOM - creates constant for input of password criteria
const charRangeVal = document.getElementById('charRangeVal')
const charLengthVal = document.getElementById('charLengthVal')
const charUpperEl = document.getElementById('charUpperEl')
const charLowerEl = document.getElementById('charLowerEl')
const charNumsEl = document.getElementById('charNumsEl')
const charSpecialEl = document.getElementById('charSpecialEl')
const passwordForm = document.getElementbyId('passwordForm')
const passwordDisplay = document.getElementById('passwordDisplay')

//on submit event, prevents "refresh" default - but doesnt seem to be working
//should create constants for true states  - pUpper = user checked uppercase values
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
//pUpper should mean user selected they do want Uppercase charachters
function generatePassword(pLength, pLower, pUpper, pNumbers, pSpecial) { //is it a problem that pLower not the same color? says its never read`
	let charCodes = LOWER_CHAR 
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

//Need to tie these two things together
charRangeVal.addEventListener('input', charLengthfx)
charLengthVal.addEventListener('input', charLengthfx)


//can't get it to work without slider, so sync function needed
//sync function doesn't seem to be working
// based on search this happens but solutions often brought up jquery so i must have something wrong
function charLengthfx(e) {
	const value = e.target.value
	charLengthVal.value = value
  	charRangeVal.value = value
}