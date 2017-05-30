"use strict";

/* eslint no-magic-numbers: ["error", { "ignore": [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] }] */

/**
 * The purpose of NumbersService is to provide data to the number components.
 */

angular.module("numbers")
	.service("NumbersService", function () {
		
		const createNumberData = function (_data, _label) {
			
			return {
				
				data: _data,
				label: _label
				
			};
			
		};
		
		const _numbers = [];
		
		_numbers.push(createNumberData(7, "seven"));
		_numbers.push(createNumberData(8, "eight"));
		_numbers.push(createNumberData(9, "nine"));
		_numbers.push(createNumberData(4, "four"));
		_numbers.push(createNumberData(5, "five"));
		_numbers.push(createNumberData(6, "six"));
		_numbers.push(createNumberData(1, "one"));
		_numbers.push(createNumberData(2, "two"));
		_numbers.push(createNumberData(3, "three"));
		_numbers.push(createNumberData(0, "zero"));
		
		
		this.getNumbers = function () {
			
			return _numbers;
			
		};
		
	});
