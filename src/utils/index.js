function isDivisible(input, divisor) {
	return input % divisor === 0;
}

function getRemainder(input, divisor) {
	return input / divisor;
}

function isNumber(input) {
	return typeof input === 'number' && !isNaN(input);
}

module.exports = {
	isDivisible,
	getRemainder,
	isNumber
};
