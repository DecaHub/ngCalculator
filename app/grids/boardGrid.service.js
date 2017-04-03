"use strict";

angular.module("grids")
	.service("BoardGridService", function () {
		
		let emptyBoard = true;
		
		let numberStack = [];
		
		let currentNumber = null;
		let currentOperation = null;
		let currentOperationResult = null;
		
		let inputDirty = false;
		
		
		if (emptyBoard) {
			
			currentNumber = "0";
			
		}
		
		
		this.appendDigit = function (digit) {
			
			if (emptyBoard) {
				
				currentNumber = "";
				emptyBoard = false;
				
			}
			
			if (!inputDirty) {
				
				if (digit === 0) {
					
					currentNumber = 0;
					return;
					
				} else {
					
					currentNumber = "";
					
				}
				
			}
			
			currentNumber += digit;
			inputDirty = true;
			
		};
		
		this.getCurrentNumber = function () {

			return currentNumber;

		};
		
		let executeOperation = function () {
			
			console.log(`Executing ${currentOperation}`);
			
			let a = numberStack.shift();
			let b = numberStack.shift();
			
			switch (currentOperation) {
				
				case "addition":
					currentOperationResult = a + b;
					break;
				case "subtraction":
					currentOperationResult = a - b;
					break;
				case "multiplication":
					currentOperationResult = a * b;
					break;
				case "division":
					currentOperationResult = a / b;
					break;
				default:
					console.log(`Operation has not been created.`);
					
			}
			
			currentNumber = currentOperationResult;
			
		};
		
		
		this.setCurrentOperation = function (op) {
			
			if (op === "resultant") {
				
				if (numberStack === 2) {
					
					executeOperation();
					
					numberStack.push(parseInt(currentNumber));
					
					console.log(numberStack);
					
					inputDirty = false;
					
				}
				
			}
			
			// If there is nothing in numberStack & there is no input, do nothing
			// If there is nothing in numberStack & there is input, define an operation
			
			if (numberStack.length === 0 && !inputDirty) {
				
				console.log("There is nothing to operate on");
				
			} else if (numberStack.length === 0 && inputDirty) {
				
				console.log("There is something to put in the stack!");
				
				currentOperation = op;
				
				numberStack.push(parseInt(currentNumber));
				console.log(numberStack);
				inputDirty = false;
				
			}
			
			// If there is one element in numberStack & there is no input,
			// define an operation or allow to switch operations
			// If there is one element in numberStack & there is input,
			// push the input into numberStack
			
			if (numberStack.length === 1 && !inputDirty) {
				
				console.log("There is an element in the stack");
				currentOperation = op;
				console.log(currentOperation);
				
			} else if (numberStack.length === 1 && inputDirty) {
				
				numberStack.push(parseInt(currentNumber));
				console.log(numberStack);
				inputDirty = false;
				
				// This will make the execution block to run.
				// The operation that was assigned to trigger the execution
				// will be stored after the execution is done as it will
				// leave one element in the stack ready to an operation
				
			}
			
			// If there are two elements in numberStack,
			// execute the current operation
			
			if (numberStack.length == 2) {
				
				console.log("Execute Operation");
				
				executeOperation();
				
				// Operation is complete. Add result to numberStack
				
				numberStack.push(parseInt(currentNumber));
				
				console.log(numberStack);
				
				currentOperation = op;
				console.log(currentOperation);
				
			}
			
		};
		
	});