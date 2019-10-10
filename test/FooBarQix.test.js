const { expect, should } = require('chai');
const { FooBarQix } = require('../src/FooBarQix');

describe('FooBarQix', () => {
	it('Should throw error if input is not a number or empty.', () => {
		expect(() => FooBarQix()).to.throw('Non numericals not allowed.');
		expect(() => FooBarQix('hi')).to.throw('Non numericals not allowed.');
	});

	it('Should return "Foo" if only divisible by 3', () => {
		expect(FooBarQix(6)).to.equal('Foo');
		expect(FooBarQix(9)).to.equal('Foo');
    });
    
    it('Should return "Bar" if only divisible by 5', () => {
		expect(FooBarQix(10)).to.equal('Bar');
    });
    
     it('Should return "Qix" if only divisible by 7', () => {
		expect(FooBarQix(14)).to.equal('Qix');
	});
});
