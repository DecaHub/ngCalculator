"use strict";

angular.module("main")
	.service("CentralDataService", ["$rootScope", "OperationLogicService", function (rootScope, OperationLogicService) {
		
		let currentDigit = null;
		const maxJSExp = 53;
		
		const bundle = {
			
			numberStack: [],
			opStack: [],
			stack: [],
			result: null,
			currentNumber: null,
			currentOp: null,
			dotEntered: false,
			percentageEntered: false
		
		};
		
		const flags = {invalidNumber: false};
		
		this.storeCurrentOp = function (opObject) {
			
			if (bundle.percentageEntered) {
				
				bundle.percentageEntered = !bundle.percentageEntered;
				
			}
			
			OperationLogicService.processOperation(opObject, bundle, flags);
			
		};
		
		this.storeCurrentNumber = function (num) {
			
			if (flags.invalidNumber) {
				
				return;
				
			}
			
			currentDigit = num.data;
			
			if (bundle.currentNumber === null) {
				
				bundle.currentNumber = num.data;
				
			} else if (bundle.percentageEntered) {
				
				bundle.currentNumber = num.data;
				
				bundle.percentageEntered = false;
				
			} else {
				
				bundle.currentNumber = bundle.currentNumber.toString() + num.data;
				
			}
			
			if (bundle.currentNumber > Math.pow(2, maxJSExp) || bundle.currentNumber < -Math.pow(2, maxJSExp)) {
				
				bundle.currentNumber = "Number too large";
				
				flags.invalidNumber = true;
				
				rootScope.$broadcast("number:change", bundle.currentNumber);
				
				return;
				
			}
			
			rootScope.$broadcast("number:change", bundle.currentNumber);
			
		};
		
	}]);
