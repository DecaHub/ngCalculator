"use strict";

/* global math */

angular.module("main")
	.service("OperationLogicService", ["$rootScope", "UtilService", function ($rootScope, UtilService) {
		
		math.config({
			number: "BigNumber",
			precision: 20
		});
		
		let dotEntered = false;
		
		const stackState = function (bundle) {
			
			console.log("**********************************************");
			console.log("NUM STACK");
			console.log(bundle.numberStack);
			console.log("OP STACK");
			console.log(bundle.opStack);
			console.log("FULL STACK");
			console.log(bundle.stack);
			console.log("**********************************************");
			
		};
		
		
		const opValue = function (op) {
			
			if (op === "addition" || op === "subtraction" || op === "resultant") {
				
				return 0;
				
			} else if (op === "multiplication" || op === "division") {
				
				return 1;
				
			}
			
			return null;
			
		};
		
		const executeOperation = function (op, bundle) {
			
			let currentOperationResult = null;
			let digitA = null;
			let digitB = null;
			
			if (op !== "posneg" && op !== "percentage") {
				
				digitB = math.bignumber(bundle.numberStack.pop());
				digitA = math.bignumber(bundle.numberStack.pop());
				
			}
			
			switch (op) {
				
				case "addition":
					
					currentOperationResult = math.add(digitA, digitB);
					
					break;
				
				case "subtraction":
					
					currentOperationResult = math.subtract(digitA, digitB);
				
					break;
				case "multiplication":
					
					currentOperationResult = math.multiply(digitA, digitB);
					
					break;
				case "division":
					
					currentOperationResult = math.divide(digitA, digitB);
					
					break;
				
				case "percentage":
					
					if (UtilService.isNull(bundle.currentNumber) && UtilService.isEmpty(bundle.numberStack)) {
						
						return;
						
					}
					
					if (!UtilService.isNull(bundle.currentNumber) && UtilService.isEmpty(bundle.numberStack)) {
						
						currentOperationResult = math.divide(bundle.currentNumber, 100);
						
						bundle.currentNumber = currentOperationResult;
						
						$rootScope.$broadcast("number:change", bundle.currentNumber);
						
						return;
						
					} else if (!UtilService.isNull(bundle.currentNumber) && !UtilService.isEmpty(bundle.numberStack)) {
						
						const topOfNumStack = bundle.numberStack[bundle.numberStack.length - 1];
						
						currentOperationResult = math.multiply(topOfNumStack, math.divide(bundle.currentNumber, 100));
						
						bundle.currentNumber = null;
						dotEntered = false;
						
						$rootScope.$broadcast("number:change", currentOperationResult);
						
						
					}
					
					break;
				
				case "posneg":
					
					if (UtilService.isNull(bundle.currentNumber)) {
						
						let temp = bundle.numberStack.pop();
						
						temp *= -1;
						
						bundle.numberStack.push(temp);
						
						$rootScope.$broadcast("number:change", temp);
						
						return;
						
					}
					
					bundle.currentNumber *= -1;
					
					$rootScope.$broadcast("number:change", bundle.currentNumber);
					
					return;
					
					break;
				
				default:
					console.log(`Operation ${op} has not been created.`);
				
			}
			
			if (!Number.isInteger(currentOperationResult)) {
				
				if (currentOperationResult) {
					
					console.log(currentOperationResult);
					
					let decimalCounter = 0;
					const decimalString = currentOperationResult.toString();
					let dotPlace = null;
					let beforeDot = 0;
					const decimalBreakpoint = 14;
					
					for (let i = 0; i < decimalString.length; i++) {
						
						if (decimalString[i] === ".") {
							
							dotPlace = i;
							break;
							
						} else if (!isNaN(decimalString[i])) {
							
							beforeDot += 1;
							
						}
						
					}
					
					if (!UtilService.isNull(dotPlace)) {
						
						for (let i = dotPlace + 1; i < decimalString.length; i++) {
							
							decimalCounter += 1;
							
						}
						
					}
					
					if (decimalCounter > decimalBreakpoint && beforeDot === 1) {
						
						currentOperationResult = parseFloat(currentOperationResult).toFixed(decimalBreakpoint);
						
					}
					
				}
				
			}
			
			bundle.numberStack.push(currentOperationResult);
			
			$rootScope.$broadcast("number:change", currentOperationResult);
			
		};
		
		const parseCalculation = function (bundle) {
			
			if (!UtilService.isEmpty(bundle.opStack)) {
				
				if (bundle.numberStack.length > 1) {
					
					let lastOp = bundle.opStack[bundle.opStack.length - 1];
					
					if (opValue(bundle.currentOp) < opValue(lastOp)) {
						
						while (bundle.opStack.length > 0) {
							
							executeOperation(lastOp, bundle, null);
							
							bundle.opStack.pop();
							
							lastOp = bundle.opStack[bundle.opStack.length - 1];
							
						}
						
						if (!(bundle.currentOp === "resultant")) {
							
							bundle.opStack.push(bundle.currentOp);
							
						}
						
					} else if (opValue(bundle.currentOp) > opValue(lastOp)) {
						
						bundle.opStack.push(bundle.currentOp);
						
					} else if (opValue(bundle.currentOp) === opValue(lastOp)) {
						
						executeOperation(lastOp, bundle, null);
						
						bundle.opStack.pop();
						
						if (!(bundle.currentOp === "resultant")) {
							
							bundle.opStack.push(bundle.currentOp);
							
						}
						
					}
					
				} else {
					
					bundle.opStack.push(bundle.currentOp);
					
				}
				
			} else {
				
				bundle.opStack.push(bundle.currentOp);
				
			}
			
			stackState(bundle);
			
		};
		
		this.processOperation = function (opObject, bundle, flags) {
			
			if (opObject.label === "clear") {
				
				// Reset board
				dotEntered = false;
				bundle.numberStack.length = 0;
				bundle.opStack.length = 0;
				bundle.stack.length = 0;
				
				bundle.result = null;
				bundle.currentNumber = null;
				bundle.currentOp = null;
				
				$rootScope.$broadcast("number:change", 0);
				
			} else if (opObject.label === "dot") {
				
				if (!dotEntered) {
					
					if (UtilService.isNull(bundle.currentNumber)) {
						
						bundle.currentNumber = `${0}.`;
						dotEntered = true;
						
					} else {
						
						bundle.currentNumber = `${bundle.currentNumber}.`;
						dotEntered = true;
						
					}
					
					$rootScope.$broadcast("number:change", bundle.currentNumber);
					
				}
				
				
			} else if (opObject.label === "posneg") {
				
				if (UtilService.isNull(bundle.currentNumber) && UtilService.isEmpty(bundle.numberStack)) {
					
					return;
					
				}
				
				executeOperation(opObject.label, bundle);
				
			} else if (opObject.label === "percentage") {
				
				executeOperation(opObject.label, bundle);
				
			} else {
				
				if (Number(bundle.currentNumber)) {
					
					bundle.numberStack.push(Number(bundle.currentNumber));
					
				}
				
				bundle.currentOp = opObject.label;
				
				bundle.currentNumber = null;
				dotEntered = false;
				
				parseCalculation(bundle);
				
			}
			
			stackState(bundle);
			
		};
		
	}]);
