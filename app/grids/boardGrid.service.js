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
			
			console.log(`currentNumber: ${currentNumber}`);
			
			inputDirty = true;
			
		};
		
		this.getCurrentNumber = function () {

			return currentNumber;

		};
		
		/**
		 * In Javascript, the maximum number of decimals is 17,
		 * but floating point arithmetic is not always 100% accurate.
		 *
		 * For example:
		 * let x = 0.2 + 0.1;         // x will be 0.30000000000000004
		 *
		 * To solve the problem above, it helps to multiply and divide:
		 * let x = (0.2 * 10 + 0.1 * 10) / 10;       // x will be 0.3
		 *
		 * This function calculates the operand with the most digits and
		 * generates a multiplier and divider that has a leading 1 with
		 * as many zeroes as there are digits in the longer operand.
		 * Note: decimal point and negative sign are not included in the
		 * length.
		 *
		 * @param digitA
		 * @param digitB
		 * @returns {{numA: number, numB: number, buffer: string}} Modified operands.
		 * The buffer is the divider.
		 */
		
		let operationAccuracyHelper = function (digitA, digitB) {
			
			let tempA = digitA.toString().replace(".", "").replace("-", "");
			let tempB = digitB.toString().replace(".", "").replace("-", "");
			
			let zeroBooster = null;
			
			tempA > tempB ? zeroBooster = tempA.length : zeroBooster = tempB.length;
			
			let booster = "1";
			
			for (let i = 0; i < zeroBooster; i++) {
				
				booster += "0";
				
			}
			
			return {
				
				numA: digitA * booster,
				numB: digitB * booster,
				buffer: booster
				
			}
			
		};
		
		const executeOperation = function () {
			
			console.log(`Executing ${currentOperation}`);
			
			const digitA = numberStack.shift();
			const digitB = numberStack.shift();
			
			let accuracyBooster = null;
			let decimalOp = false;
			
			if (!isInt(digitA) || !isInt(digitB)) {
				
				accuracyBooster = operationAccuracyHelper(digitA, digitB);
				decimalOp = true;
				
			}
			
			switch (currentOperation) {
				
				case "addition":
					
					if (decimalOp) {
						
						currentOperationResult = (accuracyBooster.numA + accuracyBooster.numB) / accuracyBooster.buffer;
						
					} else {
						
						currentOperationResult = digitA + digitB;
						
					}
					
					break;
				case "subtraction":
					
					if (decimalOp) {
						
						currentOperationResult = (accuracyBooster.numA - accuracyBooster.numB) / accuracyBooster.buffer;
						
					} else {
						
						currentOperationResult = digitA - digitB;
						
					}
					
					break;
				case "multiplication":
					
					if (decimalOp) {
						
						currentOperationResult = digitA * digitB;
						
					} else {
						
						currentOperationResult = digitA * digitB;
						
					}
					
					break;
				case "division":
					
					if (decimalOp) {
						
						currentOperationResult = digitA / digitB;
						
					} else {
						
						currentOperationResult = digitA / digitB;
						
					}
					
					break;
					
				case "percentage":
					
					if (digitB === undefined) {
						
						currentOperationResult = parseFloat(digitA / 100);
						
					} else {
						
						numberStack.push(Number(digitA));
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
					
					if (currentOperationResult.toString().length > 16) {
						
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
					
					numberStack.push(Number(currentNumber));
					
					executeOperation();
					
					numberStack.push(Number(currentNumber));
					
					numberStack.unshift(standByNum);
					
					currentOperation = standByOp;
					
					standBy = false;
					
				}
				
				if (numberStack === 2) {
					
					executeOperation();
					
					numberStack.push(Number(currentNumber));
					
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
				
				numberStack.push(Number(currentNumber));
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
					numberStack.push(Number(currentNumber));
					
				}
				
			} else if (numberStack.length === 1 && inputDirty) {
				
				console.log(`There is an element in the stack & a new number has been entered`);
				
				numberStack.push(Number(currentNumber));
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
					
					numberStack.push(Number(currentNumber));
					
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
						
						numberStack.push(Number(currentNumber));
						
						numberStack.unshift(standByNum);
						
						currentOperation = standByOp;
						
						executeOperation();

						numberStack.push(Number(currentNumber));
						
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
				
				numberStack.push(Number(currentNumber));
				
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
				
				numberStack.push(Number(currentNumber));
				
			} else {
				
				console.log(numberStack);
				
				currentNumber = currentNumber * -1;
				
			}
			
		}
		
	});
