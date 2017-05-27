"use strict";

angular.module("main")
	.service("CentralDataService", ["$rootScope", function (rootScope) {
		
		let currentDigit = undefined;
		let currentOp = undefined;
		
		let numberStack = [];
		let opStack = [];
		
		let currentNumber = null;
		
		let invalidNumber = false;
		
		this.storeCurrentOp = function (op) {
			
			currentOp = op;
			opStack.push(op.label);
			
			console.log(currentOp.symbol);
			console.log(opStack);
			
			numberStack.push(currentNumber);
			console.log(numberStack);
			currentNumber = null;
			
		};
		
		this.storeCurrentNumber = function (num) {
			
			if (invalidNumber) {
				
				return;
				
			}
			
			console.log(`storeCurrentNumber: ${num.data}`);
			
			currentDigit = num.data;
			
			if (currentNumber === null) {
				
				currentNumber = num.data;
				
			} else {
				
				currentNumber = currentNumber.toString() + num.data;
				
			}
			
			if (currentNumber > Math.pow(2, 53) || currentNumber < -Math.pow(2, 53)) {
				
				currentNumber = "Number too large";
				
				invalidNumber = true;
				
				rootScope.$broadcast("number:change", currentNumber);
				
				return;
				
			}
			
			console.log(currentNumber);
			
			rootScope.$broadcast("number:change", currentNumber);
			
		};
		
	}]);