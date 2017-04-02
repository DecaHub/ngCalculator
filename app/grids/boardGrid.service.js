"use strict";

angular.module("grids")
	.service("BoardGridService", function () {
		
		let emptyBoard = true;
		
		let currentNumber = null;
		
		if (emptyBoard) {
			
			currentNumber = "0";
			
		}
		
		
		this.appendDigit = function (digit) {
			
			if (emptyBoard) {
				
				currentNumber = "";
				emptyBoard = false;
				
			}
			
			currentNumber += digit;
			
		};
		
		this.getCurrentNumber = function () {

			return currentNumber;

		}
		
	});