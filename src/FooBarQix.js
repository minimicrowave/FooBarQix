const { NUMBER_TEXT_MAP, NUMBER_LIST, EMPTY_STRING } = require('./constants');
const { isDivisible } = require('./utils');
const { validate } = require('./validators');

function FooBarQix(input) {
	// Validates if input is a number
	validate(input);
	let output = dividedByNumber(input) + containsNumber(input);

	return output || input;
}

function dividedByNumber(input) {
	let outputArray = [];
	// Pushes FooBarQix text into output array if divisible by FooBarQix number list
	NUMBER_LIST.forEach((number) => {
		if (isDivisible(input, number)) {
			outputArray.push(NUMBER_TEXT_MAP[number]);
		}
	});

	return outputArray.join(EMPTY_STRING);
}

function containsNumber(input) {
	let outputArray = [];
	// Split each letter into each element of an array
	let inputArray = String(input).split(EMPTY_STRING);

	inputArray.forEach((digit) => {
		// Pushes FooBarQix text into output array if digit is in FooBarQix number list
		let index = NUMBER_LIST.find((number) => number === Number(digit));
		if (index) outputArray.push(NUMBER_TEXT_MAP[index]);
	});

	return outputArray.join(EMPTY_STRING);
}

module.exports = {
	FooBarQix
};
