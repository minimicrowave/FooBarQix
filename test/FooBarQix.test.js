const { expect, should } = require('chai');
const { FooBarQix } = require('../src/FooBarQix');

describe('FooBarQix', () => {
	it('Should throw error if input is not a number or empty.', () => {
		expect(() => FooBarQix()).to.throw('Non numericals not allowed.');
		expect(() => FooBarQix('hi')).to.throw('Non numericals not allowed.');
	});

	it('Should return input number if not divisible and does not contain required number(s)', () => {
		expect(FooBarQix(1)).to.equal(1);
		expect(FooBarQix(2)).to.equal(2);
		expect(FooBarQix(4)).to.equal(4);
		expect(FooBarQix(8)).to.equal(8);
	});

	it('Should return "Foo" if only divisible by 3 or contains "3"', () => {
		expect(FooBarQix(6)).to.equal('Foo');
		expect(FooBarQix(9)).to.equal('Foo');
		expect(FooBarQix(13)).to.equal('Foo');
	});

	it('Should return "Bar" if only divisible by 5', () => {
		expect(FooBarQix(10)).to.equal('Bar');
	});

	it('Should return "Qix" if only divisible by 7 or contains "7"', () => {
		expect(FooBarQix(14)).to.equal('Qix');
		expect(FooBarQix(17)).to.equal('Qix');
	});

	it('Should return "FooFoo" if is divisible by 3 and contains "3"', () => {
		expect(FooBarQix(3)).to.equal('FooFoo');
	});

	it('Should return "BarBar" if is divisible by 5 and contains "5"', () => {
		expect(FooBarQix(5)).to.equal('BarBar');
	});

	it('Should return "QixQix" if is divisible by 7 and contains "7"', () => {
		expect(FooBarQix(7)).to.equal('QixQix');
	});

	it('Should return "FooBarBar" if is divisible by 3, is divisible by 5, and contains "5"', () => {
		expect(FooBarQix(15)).to.equal('FooBarBar');
	});

	it('Should return "FooFooFoo" if is divisible by 3, and contains "3" twice', () => {
		expect(FooBarQix(33)).to.equal('FooFooFoo');
	});

	it('Should return "FooBarQix" if it contains "3", "5", and "7"', () => {
		expect(FooBarQix(1357)).to.equal('FooBarQix');
	});
});
