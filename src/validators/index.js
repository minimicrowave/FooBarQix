const { isNumber } = require('../utils');

function validate(input) {
	if (!isNumber(input)) throw new Error('Non numericals not allowed.');
}

module.exports = { validate };
