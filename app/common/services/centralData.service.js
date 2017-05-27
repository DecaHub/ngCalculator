"use strict";

angular.module("main")
	.service("CentralDataService", ["$rootScope", "OperationLogicService", function (rootScope, OperationLogicService) {
		
		let currentDigit = undefined;
		let currentOp = undefined;
		let currentNumber = null;
		
		const bundle = {
			
			numberStack: [],
			opStack: [],
			result: null
		
		};
		
		const flags = {
			
			invalidNumber: false
			
		};
		
		
		this.storeCurrentOp = function (op) {
			
			currentOp = op;
			bundle.opStack.push(op.label);
			
			console.log(currentOp.symbol);
			console.log(bundle.opStack);
			
			bundle.numberStack.push(currentNumber);
			console.log(bundle.numberStack);
			currentNumber = null;
			
		};
		
		this.storeCurrentNumber = function (num) {
			
			if (flags.invalidNumber) {
				
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
				
				flags.invalidNumber = true;
				
				rootScope.$broadcast("number:change", currentNumber);
				
				return;
				
			}
			
			console.log(currentNumber);
			
			rootScope.$broadcast("number:change", currentNumber);
			
		};
		
	}]);