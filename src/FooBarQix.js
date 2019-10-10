const { NUMBERS, TEXTS, VARIABLES } = require('./constants');

function FooBarQix(input) {
	let output = '';

	// Validates if input is a number
	validate(input);
	output += dividedByNumber(input);
	return output;
}

function validate(input) {
	if (!isNumber(input)) throw new Error('Non numericals not allowed.');
}

function dividedByNumber(input) {
	let outputArray = [];
	VARIABLES.forEach((variable) => {
		let number = NUMBERS[variable];
		if (isDivisible(input, number) && input !== number) {
			outputArray.push(TEXTS[variable]);
			input = getRemainder(input, number);
		}
	});

	return outputArray.join('');
}

// function containsNumber(input) {
// 	input = convertToString(input);
// }

function isDivisible(input, divisor) {
	return input % divisor === 0;
}

function getRemainder(input, divisor) {
	return input / divisor;
}

// function convertToString(input) {
// 	return input.toString();
// }

function isNumber(input) {
	return typeof input === 'number' && input !== NaN;
}
module.exports = {
	FooBarQix
};

FooBarQix(6);
