"use strict";

angular.module("grids")
	.service("BoardGridService", function () {
		
		let emptyBoard = true;
		
		const numberStack = [];
		
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
					
				}
				
				currentNumber = "";
				
			}
			
			currentNumber += digit;
			inputDirty = true;
			
		};
		
		this.getCurrentNumber = function () {

			return currentNumber;

		};
		
		const executeOperation = function () {
			
			console.log(`Executing ${currentOperation}`);
			
			const digitA = numberStack.shift();
			const digitB = numberStack.shift();
			
			switch (currentOperation) {
				
				case "addition":
					currentOperationResult = digitA + digitB;
					break;
				case "subtraction":
					currentOperationResult = digitA - digitB;
					break;
				case "multiplication":
					currentOperationResult = digitA * digitB;
					break;
				case "division":
					currentOperationResult = digitA / digitB;
					break;
				default:
					console.log("Operation has not been created.");
					
			}
			
			currentNumber = currentOperationResult;
			
		};
		
		
		this.setCurrentOperation = function (op) {
			
			if (op === "resultant") {
				
				if (numberStack === 2) {
					
					executeOperation();
					
					numberStack.push(parseInt(currentNumber, 10));
					
					console.log(numberStack);
					
					inputDirty = false;
					
				}
				
			}
			
			/**
			 * If there is nothing in numberStack & there is no input, do nothing
			 * If there is nothing in numberStack & there is input, define an operation
			 */
			
			if (numberStack.length === 0 && !inputDirty) {
				
				console.log("There is nothing to operate on");
				
			} else if (numberStack.length === 0 && inputDirty) {
				
				console.log("There is something to put in the stack!");
				
				currentOperation = op;
				
				numberStack.push(parseInt(currentNumber, 10));
				console.log(numberStack);
				inputDirty = false;
				
			}
			
			/** If there is one element in numberStack & there is no input,
			 * define an operation or allow to switch operations
			 * If there is one element in numberStack & there is input,
			 * push the input into numberStack
			 */
			
			if (numberStack.length === 1 && !inputDirty) {
				
				console.log("There is an element in the stack");
				currentOperation = op;
				console.log(currentOperation);
				
			} else if (numberStack.length === 1 && inputDirty) {
				
				numberStack.push(parseInt(currentNumber, 10));
				console.log(numberStack);
				inputDirty = false;
				
				/**
				 * This will make the execution block to run.
				 * The operation that was assigned to trigger the execution
				 * will be stored after the execution is done as it will
				 * leave one element in the stack ready to an operation
				 */
				
			}
			
			/**
			 * If there are two elements in numberStack,
			 * execute the current operation
			 */
			
			if (numberStack.length === 2) {
				
				console.log("Execute Operation");
				
				executeOperation();
				
				// Operation is complete. Add result to numberStack
				
				numberStack.push(parseInt(currentNumber, 10));
				
				console.log(numberStack);
				
				currentOperation = op;
				console.log(currentOperation);
				
			}
			
		};
		
		this.clearBoard = function () {
			
			console.log("CLEAR");
			
			emptyBoard = true;
			
			numberStack.length = 0;
			
			currentNumber = 0;
			currentOperation = null;
			currentOperationResult = null;
			
			inputDirty = false;
			
		}
		
	});
