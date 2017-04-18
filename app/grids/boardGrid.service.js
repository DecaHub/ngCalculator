"use strict";

angular.module("grids")
	.service("BoardGridService", function () {
		
		let emptyBoard = true;
		
		const numberStack = [];
		
		let currentNumber = null;
		let currentOperation = null;
		let currentOperationResult = null;
		
		let standByOp = null;
		let standBy = false;
		let standByNum = null;
		
		let decimalCreated = false;
		
		let inputDirty = false;
		
		math.config({
			number: 'BigNumber',
			precision: 20
		});
		
		
		if (emptyBoard) {
			
			currentNumber = "0";
			
		}
		
		let isInt = function (num) {
			
			return num % 1 === 1;
			
		};
		
		
		this.appendDigit = function (digit) {
			
			/**
			 * currentNumber = "" -> prepares board to remove placeholder numbers
			 * when a new number sequence is detected
			 */
			
			
			if (emptyBoard) {
				
				currentNumber = "";
				emptyBoard = false;
				
			}
			
			if (!inputDirty) {
				
				if (digit === 0) {
					
					currentNumber = 0;
					
					return;
					
				} else if (digit === "." && !decimalCreated) {
					
					currentNumber =  "0.";
					inputDirty = true;
					decimalCreated = true;
					return;
					
				}
				
				currentNumber = "";
				
			}
			
			if (digit === "." && !decimalCreated) {
				
				decimalCreated = true;
				
			} else if (digit === ".") {
				
				return;
				
			}
			
			/**
			 * The current number has to be created as a string, or else,
			 * if you add the (-) sign in the middle of keying a number
			 * the number after the (-) will trigger an operation.
			 */
			
			currentNumber += digit.toString();
			
			inputDirty = true;
			
		};
		
		this.getCurrentNumber = function () {

			return currentNumber;

		};
		
		const executeOperation = function () {
			
			console.log(`Executing ${currentOperation}`);
			
			const digitA = math.bignumber(numberStack.shift());
			const digitB = math.bignumber(numberStack.shift());
			
			switch (currentOperation) {
				
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
					
					if (digitB === undefined) {
						
						currentOperationResult = parseFloat(digitA / 100);
						
					} else {
						
						numberStack.push((digitA));
						numberStack.push(parseFloat(digitA * parseFloat(digitB / 100)));
						
						return;
						
					}
					
					break;
					
				default:
					console.log(`Operation ${currentOperation} has not been created.`);
					
			}
			
			
			if (isInt(currentOperationResult)) {

				console.log(`Result is an integer!`);

			} else {

				console.log(`Result is a float!`);

				if (currentOperationResult) {

					console.log(currentOperationResult);

					let decimalCounter = 0;
					let decimalString = currentOperationResult.toString();
					let dotPlace = null;
					let beforeDot = 0;

					for (let i = 0; i < decimalString.length; i++) {

						if (decimalString[i] === ".") {

							dotPlace = i;
							break;

						} else if (!isNaN(decimalString[i])) {
							
							beforeDot++;
							
						}
					
					}

					if (dotPlace !== null) {

						for (let i = dotPlace + 1; i < decimalString.length; i++) {

							decimalCounter++;

						}
					
					}

					if (decimalCounter > 14 && beforeDot === 1) {

						currentOperationResult = parseFloat(currentOperationResult).toFixed(14);

					}

				}

			}
			
			console.log(`Result: ${currentOperationResult}`);
			
			currentNumber = currentOperationResult;
			
		};
		
		
		this.setCurrentOperation = function (op) {
			
			if (op === "resultant") {
				
				if (standBy) {
					
					numberStack.push(currentNumber);
					
					executeOperation();
					
					numberStack.push(currentNumber);
					
					numberStack.unshift(standByNum);
					
					currentOperation = standByOp;
					
					standBy = false;
					
				}
				
				if (numberStack === 2) {
					
					executeOperation();
					
					numberStack.push(currentNumber);
					
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
				
				numberStack.push(currentNumber);
				console.log(numberStack);
				inputDirty = false;
				decimalCreated = false;
				
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
				
				if (op === "percentage") {
					
					executeOperation();
					numberStack.push(currentNumber);
					
				}
				
			} else if (numberStack.length === 1 && inputDirty) {
				
				console.log(`There is an element in the stack & a new number has been entered`);
				
				numberStack.push(currentNumber);
				console.log(numberStack);
				inputDirty = false;
				decimalCreated = false;
				
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
				
				/**
				 * The current operation could change prior to computation
				 * when using the percentage operator (%) as a binary operator
				 */
				
				if (op === "percentage") {
					
					let ongoingOp = currentOperation;
					
					currentOperation = op;
					executeOperation();
					
					currentOperation = ongoingOp;
					executeOperation();
					
					numberStack.push(currentNumber);
					
					return;
					
				}
				
				if (currentOperation === "addition" || currentOperation === "subtraction") {
					
					if (op === "multiplication" || op === "division") {
						
						standBy = true;
						standByOp = currentOperation;
						standByNum = numberStack.shift();
						
						currentOperation = op;
						
						decimalCreated = false;
						inputDirty = false;
						
						return;
						
					}
					
				}
				
				if (currentOperation === "multiplication" || currentOperation === "division") {
					
					if ((op === "addition" || op === "subtraction") && standBy) {
						
						executeOperation();
						
						numberStack.push(currentNumber);
						
						numberStack.unshift(standByNum);
						
						currentOperation = standByOp;
						
						executeOperation();

						numberStack.push(currentNumber);
						
						currentOperation = op;
						
						
						standBy = false;
						standByOp = null;
						standByNum = null;

						decimalCreated = false;
						inputDirty = false;

						return;
						
					}
					
				}
				
				
				executeOperation();
				
				// Operation is complete. Add result to numberStack
				
				numberStack.push(currentNumber);
				
				console.log(numberStack);
				
				currentOperation = op;
				console.log(currentOperation);
				
				decimalCreated = false;
				inputDirty = false;
				
			}
			
		};
		
		this.clearBoard = function () {
			
			console.log("CLEAR");
			
			emptyBoard = true;
			
			numberStack.length = 0;
			
			currentNumber = 0;
			currentOperation = null;
			currentOperationResult = null;
			
			decimalCreated = false;
			
			inputDirty = false;
			
		};
		
		this.flipSign = function () {
			
			console.log("flipSign");
			
			if (currentNumber == 0 || emptyBoard) {
				
				/**
				 * Avoid NaN
				 */
				
				return;
				
			}
			
			
			if (numberStack.length === 1 && !inputDirty) {
				
				let tempNum = numberStack.pop();
				
				currentNumber = tempNum * -1;
				
				numberStack.push(currentNumber);
				
			} else {
				
				console.log(numberStack);
				
				currentNumber = currentNumber * -1;
				
			}
			
		}
		
	});
