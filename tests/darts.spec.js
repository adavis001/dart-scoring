/*jshint esversion: 6*/
const chai = require('chai');
const expect = chai.expect;

const darts = require('../darts.js');

describe('scoreThrows', ()=> {
	it('should be a function', function() {
		expect(scoreThrows).to.be.a('function');
	});
	it('radius 11+ should return 0 points', function(){
		expect(scoreThrows([11,12])).to.be.equal(0);
	});
	it('radius 5-10 returns 5 points', function(){
		expect(scoreThrows([6,8])).to.be.equal(10);
	});
	it('radius 1-4 returns 10 points', function(){
		expect(scoreThrows([2,3])).to.be.equal(20);
	});
	it('radius 1, 6, 15 returns 15 points', function(){
		expect(scoreThrows([1,6,15])).to.be.equal(15);
	});
});