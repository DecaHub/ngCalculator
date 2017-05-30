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
			currentOp: null
		
		};
		
		const flags = {invalidNumber: false};
		
		
		this.storeCurrentOp = function (opObject) {
			
			OperationLogicService.processOperation(opObject, bundle, flags);
			
		};
		
		this.storeCurrentNumber = function (num) {
			
			if (flags.invalidNumber) {
				
				return;
				
			}
			
			currentDigit = num.data;
			
			if (bundle.currentNumber === null) {
				
				bundle.currentNumber = num.data;
				
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
