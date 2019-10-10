const { NUMBERS, TEXTS, VARIABLES } = require('./constants');
const { isDivisible, getRemainder, isNumber } = require('./utils');

function FooBarQix(input) {
	let output = '';

	// Validates if input is a number
	validate(input);
	output += dividedByNumber(input);
	output += containsNumber(input);
	return output || input;
}

function validate(input) {
	if (!isNumber(input)) throw new Error('Non numericals not allowed.');
}

function dividedByNumber(input) {
	let outputArray = [];
	VARIABLES.forEach((variable) => {
		let number = NUMBERS[variable];
		if (isDivisible(input, number)) {
			outputArray.push(TEXTS[variable]);
			input = getRemainder(input, number);
		}
	});

	return outputArray.join('');
}

function containsNumber(input) {
	let outputArray = [];
	// Split each letter into each element of an array
	let inputArray = input.toString().split('');

	inputArray.forEach((inputLetter) => {
		let index = VARIABLES.find((key) => NUMBERS[key] === Number(inputLetter));
		if (index) outputArray.push(TEXTS[index]);
	});

	return outputArray.join('');
}

module.exports = {
	FooBarQix
};
