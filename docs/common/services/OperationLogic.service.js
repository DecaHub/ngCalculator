"use strict";

/* global math */

angular.module("main").service("OperationLogicService", ["$rootScope", "UtilService", function ($rootScope, UtilService) {

	math.config({
		number: "BigNumber",
		precision: 20
	});

	var dotEntered = false;

	var stackState = function stackState(bundle) {

		console.log("**********************************************");
		console.log("NUM STACK");
		console.log(bundle.numberStack);
		console.log("OP STACK");
		console.log(bundle.opStack);
		console.log("FULL STACK");
		console.log(bundle.stack);
		console.log("**********************************************");
	};

	var opValue = function opValue(op) {

		if (op === "addition" || op === "subtraction" || op === "resultant") {

			return 0;
		} else if (op === "multiplication" || op === "division") {

			return 1;
		}

		return null;
	};

	var executeOperation = function executeOperation(op, bundle) {

		var currentOperationResult = null;
		var digitA = null;
		var digitB = null;

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

					var topOfNumStack = bundle.numberStack[bundle.numberStack.length - 1];

					currentOperationResult = math.multiply(topOfNumStack, math.divide(bundle.currentNumber, 100));

					bundle.currentNumber = null;
					dotEntered = false;

					$rootScope.$broadcast("number:change", currentOperationResult);
				}

				break;

			case "posneg":

				if (UtilService.isNull(bundle.currentNumber)) {

					var temp = bundle.numberStack.pop();

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
				console.log("Operation " + op + " has not been created.");

		}

		if (!Number.isInteger(currentOperationResult)) {

			if (currentOperationResult) {

				console.log(currentOperationResult);

				var decimalCounter = 0;
				var decimalString = currentOperationResult.toString();
				var dotPlace = null;
				var beforeDot = 0;
				var decimalBreakpoint = 14;

				for (var i = 0; i < decimalString.length; i++) {

					if (decimalString[i] === ".") {

						dotPlace = i;
						break;
					} else if (!isNaN(decimalString[i])) {

						beforeDot += 1;
					}
				}

				if (!UtilService.isNull(dotPlace)) {

					for (var _i = dotPlace + 1; _i < decimalString.length; _i++) {

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

	var parseCalculation = function parseCalculation(bundle) {

		if (!UtilService.isEmpty(bundle.opStack)) {

			if (bundle.numberStack.length > 1) {

				var lastOp = bundle.opStack[bundle.opStack.length - 1];

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

					bundle.currentNumber = 0 + ".";
					dotEntered = true;
				} else {

					bundle.currentNumber = bundle.currentNumber + ".";
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9zZXJ2aWNlcy9PcGVyYXRpb25Mb2dpYy5zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJzZXJ2aWNlIiwiJHJvb3RTY29wZSIsIlV0aWxTZXJ2aWNlIiwibWF0aCIsImNvbmZpZyIsIm51bWJlciIsInByZWNpc2lvbiIsImRvdEVudGVyZWQiLCJzdGFja1N0YXRlIiwiYnVuZGxlIiwiY29uc29sZSIsImxvZyIsIm51bWJlclN0YWNrIiwib3BTdGFjayIsInN0YWNrIiwib3BWYWx1ZSIsIm9wIiwiZXhlY3V0ZU9wZXJhdGlvbiIsImN1cnJlbnRPcGVyYXRpb25SZXN1bHQiLCJkaWdpdEEiLCJkaWdpdEIiLCJiaWdudW1iZXIiLCJwb3AiLCJhZGQiLCJzdWJ0cmFjdCIsIm11bHRpcGx5IiwiZGl2aWRlIiwiaXNOdWxsIiwiY3VycmVudE51bWJlciIsImlzRW1wdHkiLCIkYnJvYWRjYXN0IiwidG9wT2ZOdW1TdGFjayIsImxlbmd0aCIsInRlbXAiLCJwdXNoIiwiTnVtYmVyIiwiaXNJbnRlZ2VyIiwiZGVjaW1hbENvdW50ZXIiLCJkZWNpbWFsU3RyaW5nIiwidG9TdHJpbmciLCJkb3RQbGFjZSIsImJlZm9yZURvdCIsImRlY2ltYWxCcmVha3BvaW50IiwiaSIsImlzTmFOIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJwYXJzZUNhbGN1bGF0aW9uIiwibGFzdE9wIiwiY3VycmVudE9wIiwicHJvY2Vzc09wZXJhdGlvbiIsIm9wT2JqZWN0IiwiZmxhZ3MiLCJsYWJlbCIsInJlc3VsdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUFBLFFBQVFDLE1BQVIsQ0FBZSxNQUFmLEVBQ0VDLE9BREYsQ0FDVSx1QkFEVixFQUNtQyxDQUFDLFlBQUQsRUFBZSxhQUFmLEVBQThCLFVBQVVDLFVBQVYsRUFBc0JDLFdBQXRCLEVBQW1DOztBQUVsR0MsTUFBS0MsTUFBTCxDQUFZO0FBQ1hDLFVBQVEsV0FERztBQUVYQyxhQUFXO0FB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LEVBQWlDNUMsTUFBakM7QUFFQSxHQVZNLE1BVUEsSUFBSTBDLFNBQVNFLEtBQVQsS0FBbUIsWUFBdkIsRUFBcUM7O0FBRTNDcEMsb0JBQWlCa0MsU0FBU0UsS0FBMUIsRUFBaUM1QyxNQUFqQztBQUVBLEdBSk0sTUFJQTs7QUFFTixPQUFJMEIsT0FBTzFCLE9BQU9tQixhQUFkLENBQUosRUFBa0M7O0FBRWpDbkIsV0FBT0csV0FBUCxDQUFtQnNCLElBQW5CLENBQXdCQyxPQUFPMUIsT0FBT21CLGFBQWQsQ0FBeEI7QUFFQTs7QUFFRG5CLFVBQU93QyxTQUFQLEdBQW1CRSxTQUFTRSxLQUE1Qjs7QUFFQTVDLFVBQU9tQixhQUFQLEdBQXVCLElBQXZCO0FBQ0FyQixnQkFBYSxLQUFiOztBQUVBd0Msb0JBQWlCdEMsTUFBakI7QUFFQTs7QUFFREQsYUFBV0MsTUFBWDtBQUVBLEVBdEVEO0FBd0VBLENBcFVpQyxDQURuQyIsImZpbGUiOiJjb21tb24vc2VydmljZXMvT3BlcmF0aW9uTG9naWMuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKiBnbG9iYWwgbWF0aCAqL1xuXG5hbmd1bGFyLm1vZHVsZShcIm1haW5cIilcblx0LnNlcnZpY2UoXCJPcGVyYXRpb25Mb2dpY1NlcnZpY2VcIiwgW1wiJHJvb3RTY29wZVwiLCBcIlV0aWxTZXJ2aWNlXCIsIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCBVdGlsU2VydmljZSkge1xuXHRcdFxuXHRcdG1hdGguY29uZmlnKHtcblx0XHRcdG51bWJlcjogXCJCaWdOdW1iZXJcIixcblx0XHRcdHByZWNpc2lvbjogMjBcblx0XHR9KTtcblx0XHRcblx0XHRsZXQgZG90RW50ZXJlZCA9IGZhbHNlO1xuXHRcdFxuXHRcdGNvbnN0IHN0YWNrU3RhdGUgPSBmdW5jdGlvbiAoYnVuZGxlKSB7XG5cdFx0XHRcblx0XHRcdGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcblx0XHRcdGNvbnNvbGUubG9nKFwiTlVNIFNUQUNLXCIpO1xuXHRcdFx0Y29uc29sZS5sb2coYnVuZGxlLm51bWJlclN0YWNrKTtcblx0XHRcdGNvbnNvbGUubG9nKFwiT1AgU1RBQ0tcIik7XG5cdFx0XHRjb25zb2xlLmxvZyhidW5kbGUub3BTdGFjayk7XG5cdFx0XHRjb25zb2xlLmxvZyhcIkZVTEwgU1RBQ0tcIik7XG5cdFx0XHRjb25zb2xlLmxvZyhidW5kbGUuc3RhY2spO1xuXHRcdFx0Y29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xuXHRcdFx0XG5cdFx0fTtcblx0XHRcblx0XHRcblx0XHRjb25zdCBvcFZhbHVlID0gZnVuY3Rpb24gKG9wKSB7XG5cdFx0XHRcblx0XHRcdGlmIChvcCA9PT0gXCJhZGRpdGlvblwiIHx8IG9wID09PSBcInN1YnRyYWN0aW9uXCIgfHwgb3AgPT09IFwicmVzdWx0YW50XCIpIHtcblx0XHRcdFx0XG5cdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0XHRcblx0XHRcdH0gZWxzZSBpZiAob3AgPT09IFwibXVsdGlwbGljYXRpb25cIiB8fCBvcCA9PT0gXCJkaXZpc2lvblwiKSB7XG5cdFx0XHRcdFxuXHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XG5cdFx0fTtcblx0XHRcblx0XHRjb25zdCBleGVjdXRlT3BlcmF0aW9uID0gZnVuY3Rpb24gKG9wLCBidW5kbGUpIHtcblx0XHRcdFxuXHRcdFx0bGV0IGN1cnJlbnRPcGVyYXRpb25SZXN1bHQgPSBudWxsO1xuXHRcdFx0bGV0IGRpZ2l0QSA9IG51bGw7XG5cdFx0XHRsZXQgZGlnaXRCID0gbnVsbDtcblx0XHRcdFxuXHRcdFx0aWYgKG9wICE9PSBcInBvc25lZ1wiICYmIG9wICE9PSBcInBlcmNlbnRhZ2VcIikge1xuXHRcdFx0XHRcblx0XHRcdFx0ZGlnaXRCID0gbWF0aC5iaWdudW1iZXIoYnVuZGxlLm51bWJlclN0YWNrLnBvcCgpKTtcblx0XHRcdFx0ZGlnaXRBID0gbWF0aC5iaWdudW1iZXIoYnVuZGxlLm51bWJlclN0YWNrLnBvcCgpKTtcblx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHN3aXRjaCAob3ApIHtcblx0XHRcdFx0XG5cdFx0XHRcdGNhc2UgXCJhZGRpdGlvblwiOlxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGN1cnJlbnRPcGVyYXRpb25SZXN1bHQgPSBtYXRoLmFkZChkaWdpdEEsIGRpZ2l0Qik7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFxuXHRcdFx0XHRjYXNlIFwic3VidHJhY3Rpb25cIjpcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRjdXJyZW50T3BlcmF0aW9uUmVzdWx0ID0gbWF0aC5zdWJ0cmFjdChkaWdpdEEsIGRpZ2l0Qik7XG5cdFx0XHRcdFxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwibXVsdGlwbGljYXRpb25cIjpcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRjdXJyZW50T3BlcmF0aW9uUmVzdWx0ID0gbWF0aC5tdWx0aXBseShkaWdpdEEsIGRpZ2l0Qik7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJkaXZpc2lvblwiOlxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGN1cnJlbnRPcGVyYXRpb25SZXN1bHQgPSBtYXRoLmRpdmlkZShkaWdpdEEsIGRpZ2l0Qik7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFxuXHRcdFx0XHRjYXNlIFwicGVyY2VudGFnZVwiOlxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGlmIChVdGlsU2VydmljZS5pc051bGwoYnVuZGxlLmN1cnJlbnROdW1iZXIpICYmIFV0aWxTZXJ2aWNlLmlzRW1wdHkoYnVuZGxlLm51bWJlclN0YWNrKSkge1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aWYgKCFVdGlsU2VydmljZS5pc051bGwoYnVuZGxlLmN1cnJlbnROdW1iZXIpICYmIFV0aWxTZXJ2aWNlLmlzRW1wdHkoYnVuZGxlLm51bWJlclN0YWNrKSkge1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRjdXJyZW50T3BlcmF0aW9uUmVzdWx0ID0gbWF0aC5kaXZpZGUoYnVuZGxlLmN1cnJlbnROdW1iZXIsIDEwMCk7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGJ1bmRsZS5jdXJyZW50TnVtYmVyID0gY3VycmVudE9wZXJhdGlvblJlc3VsdDtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0JHJvb3RTY29wZS4kYnJvYWRjYXN0KFwibnVtYmVyOmNoYW5nZVwiLCBidW5kbGUuY3VycmVudE51bWJlcik7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoIVV0aWxTZXJ2aWNlLmlzTnVsbChidW5kbGUuY3VycmVudE51bWJlcikgJiYgIVV0aWxTZXJ2aWNlLmlzRW1wdHkoYnVuZGxlLm51bWJlclN0YWNrKSkge1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRjb25zdCB0b3BPZk51bVN0YWNrID0gYnVuZGxlLm51bWJlclN0YWNrW2J1bmRsZS5udW1iZXJTdGFjay5sZW5ndGggLSAxXTtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0Y3VycmVudE9wZXJhdGlvblJlc3VsdCA9IG1hdGgubXVsdGlwbHkodG9wT2ZOdW1TdGFjaywgbWF0aC5kaXZpZGUoYnVuZGxlLmN1cnJlbnROdW1iZXIsIDEwMCkpO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRidW5kbGUuY3VycmVudE51bWJlciA9IG51bGw7XG5cdFx0XHRcdFx0XHRkb3RFbnRlcmVkID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdCRyb290U2NvcGUuJGJyb2FkY2FzdChcIm51bWJlcjpjaGFuZ2VcIiwgY3VycmVudE9wZXJhdGlvblJlc3VsdCk7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XG5cdFx0XHRcdGNhc2UgXCJwb3NuZWdcIjpcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpZiAoVXRpbFNlcnZpY2UuaXNOdWxsKGJ1bmRsZS5jdXJyZW50TnVtYmVyKSkge1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRsZXQgdGVtcCA9IGJ1bmRsZS5udW1iZXJTdGFjay5wb3AoKTtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0dGVtcCAqPSAtMTtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0YnVuZGxlLm51bWJlclN0YWNrLnB1c2godGVtcCk7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdCRyb290U2NvcGUuJGJyb2FkY2FzdChcIm51bWJlcjpjaGFuZ2VcIiwgdGVtcCk7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHRidW5kbGUuY3VycmVudE51bWJlciAqPSAtMTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHQkcm9vdFNjb3BlLiRicm9hZGNhc3QoXCJudW1iZXI6Y2hhbmdlXCIsIGJ1bmRsZS5jdXJyZW50TnVtYmVyKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFxuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGBPcGVyYXRpb24gJHtvcH0gaGFzIG5vdCBiZWVuIGNyZWF0ZWQuYCk7XG5cdFx0XHRcdFxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRpZiAoIU51bWJlci5pc0ludGVnZXIoY3VycmVudE9wZXJhdGlvblJlc3VsdCkpIHtcblx0XHRcdFx0XG5cdFx0XHRcdGlmIChjdXJyZW50T3BlcmF0aW9uUmVzdWx0KSB7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coY3VycmVudE9wZXJhdGlvblJlc3VsdCk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0bGV0IGRlY2ltYWxDb3VudGVyID0gMDtcblx0XHRcdFx0XHRjb25zdCBkZWNpbWFsU3RyaW5nID0gY3VycmVudE9wZXJhdGlvblJlc3VsdC50b1N0cmluZygpO1xuXHRcdFx0XHRcdGxldCBkb3RQbGFjZSA9IG51bGw7XG5cdFx0XHRcdFx0bGV0IGJlZm9yZURvdCA9IDA7XG5cdFx0XHRcdFx0Y29uc3QgZGVjaW1hbEJyZWFrcG9pbnQgPSAxNDtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGRlY2ltYWxTdHJpbmcubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0aWYgKGRlY2ltYWxTdHJpbmdbaV0gPT09IFwiLlwiKSB7XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRkb3RQbGFjZSA9IGk7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIWlzTmFOKGRlY2ltYWxTdHJpbmdbaV0pKSB7XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRiZWZvcmVEb3QgKz0gMTtcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aWYgKCFVdGlsU2VydmljZS5pc051bGwoZG90UGxhY2UpKSB7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSBkb3RQbGFjZSArIDE7IGkgPCBkZWNpbWFsU3RyaW5nLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRkZWNpbWFsQ291bnRlciArPSAxO1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpZiAoZGVjaW1hbENvdW50ZXIgPiBkZWNpbWFsQnJlYWtwb2ludCAmJiBiZWZvcmVEb3QgPT09IDEpIHtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0Y3VycmVudE9wZXJhdGlvblJlc3VsdCA9IHBhcnNlRmxvYXQoY3VycmVudE9wZXJhdGlvblJlc3VsdCkudG9GaXhlZChkZWNpbWFsQnJlYWtwb2ludCk7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGJ1bmRsZS5udW1iZXJTdGFjay5wdXNoKGN1cnJlbnRPcGVyYXRpb25SZXN1bHQpO1xuXHRcdFx0XG5cdFx0XHQkcm9vdFNjb3BlLiRicm9hZGNhc3QoXCJudW1iZXI6Y2hhbmdlXCIsIGN1cnJlbnRPcGVyYXRpb25SZXN1bHQpO1xuXHRcdFx0XG5cdFx0fTtcblx0XHRcblx0XHRjb25zdCBwYXJzZUNhbGN1bGF0aW9uID0gZnVuY3Rpb24gKGJ1bmRsZSkge1xuXHRcdFx0XG5cdFx0XHRpZiAoIVV0aWxTZXJ2aWNlLmlzRW1wdHkoYnVuZGxlLm9wU3RhY2spKSB7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAoYnVuZGxlLm51bWJlclN0YWNrLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRsZXQgbGFzdE9wID0gYnVuZGxlLm9wU3RhY2tbYnVuZGxlLm9wU3RhY2subGVuZ3RoIC0gMV07XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aWYgKG9wVmFsdWUoYnVuZGxlLmN1cnJlbnRPcCkgPCBvcFZhbHVlKGxhc3RPcCkpIHtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0d2hpbGUgKGJ1bmRsZS5vcFN0YWNrLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdGV4ZWN1dGVPcGVyYXRpb24obGFzdE9wLCBidW5kbGUsIG51bGwpO1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0YnVuZGxlLm9wU3RhY2sucG9wKCk7XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRsYXN0T3AgPSBidW5kbGUub3BTdGFja1tidW5kbGUub3BTdGFjay5sZW5ndGggLSAxXTtcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGlmICghKGJ1bmRsZS5jdXJyZW50T3AgPT09IFwicmVzdWx0YW50XCIpKSB7XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRidW5kbGUub3BTdGFjay5wdXNoKGJ1bmRsZS5jdXJyZW50T3ApO1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdH0gZWxzZSBpZiAob3BWYWx1ZShidW5kbGUuY3VycmVudE9wKSA+IG9wVmFsdWUobGFzdE9wKSkge1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRidW5kbGUub3BTdGFjay5wdXNoKGJ1bmRsZS5jdXJyZW50T3ApO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChvcFZhbHVlKGJ1bmRsZS5jdXJyZW50T3ApID09PSBvcFZhbHVlKGxhc3RPcCkpIHtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0ZXhlY3V0ZU9wZXJhdGlvbihsYXN0T3AsIGJ1bmRsZSwgbnVsbCk7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGJ1bmRsZS5vcFN0YWNrLnBvcCgpO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRpZiAoIShidW5kbGUuY3VycmVudE9wID09PSBcInJlc3VsdGFudFwiKSkge1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0YnVuZGxlLm9wU3RhY2sucHVzaChidW5kbGUuY3VycmVudE9wKTtcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0YnVuZGxlLm9wU3RhY2sucHVzaChidW5kbGUuY3VycmVudE9wKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFxuXHRcdFx0XHRidW5kbGUub3BTdGFjay5wdXNoKGJ1bmRsZS5jdXJyZW50T3ApO1xuXHRcdFx0XHRcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0c3RhY2tTdGF0ZShidW5kbGUpO1xuXHRcdFx0XG5cdFx0fTtcblx0XHRcblx0XHR0aGlzLnByb2Nlc3NPcGVyYXRpb24gPSBmdW5jdGlvbiAob3BPYmplY3QsIGJ1bmRsZSwgZmxhZ3MpIHtcblx0XHRcdFxuXHRcdFx0aWYgKG9wT2JqZWN0LmxhYmVsID09PSBcImNsZWFyXCIpIHtcblx0XHRcdFx0XG5cdFx0XHRcdC8vIFJlc2V0IGJvYXJkXG5cdFx0XHRcdGRvdEVudGVyZWQgPSBmYWxzZTtcblx0XHRcdFx0YnVuZGxlLm51bWJlclN0YWNrLmxlbmd0aCA9IDA7XG5cdFx0XHRcdGJ1bmRsZS5vcFN0YWNrLmxlbmd0aCA9IDA7XG5cdFx0XHRcdGJ1bmRsZS5zdGFjay5sZW5ndGggPSAwO1xuXHRcdFx0XHRcblx0XHRcdFx0YnVuZGxlLnJlc3VsdCA9IG51bGw7XG5cdFx0XHRcdGJ1bmRsZS5jdXJyZW50TnVtYmVyID0gbnVsbDtcblx0XHRcdFx0YnVuZGxlLmN1cnJlbnRPcCA9IG51bGw7XG5cdFx0XHRcdFxuXHRcdFx0XHQkcm9vdFNjb3BlLiRicm9hZGNhc3QoXCJudW1iZXI6Y2hhbmdlXCIsIDApO1xuXHRcdFx0XHRcblx0XHRcdH0gZWxzZSBpZiAob3BPYmplY3QubGFiZWwgPT09IFwiZG90XCIpIHtcblx0XHRcdFx0XG5cdFx0XHRcdGlmICghZG90RW50ZXJlZCkge1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGlmIChVdGlsU2VydmljZS5pc051bGwoYnVuZGxlLmN1cnJlbnROdW1iZXIpKSB7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGJ1bmRsZS5jdXJyZW50TnVtYmVyID0gYCR7MH0uYDtcblx0XHRcdFx0XHRcdGRvdEVudGVyZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0YnVuZGxlLmN1cnJlbnROdW1iZXIgPSBgJHtidW5kbGUuY3VycmVudE51bWJlcn0uYDtcblx0XHRcdFx0XHRcdGRvdEVudGVyZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdCRyb290U2NvcGUuJGJyb2FkY2FzdChcIm51bWJlcjpjaGFuZ2VcIiwgYnVuZGxlLmN1cnJlbnROdW1iZXIpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRcblx0XHRcdH0gZWxzZSBpZiAob3BPYmplY3QubGFiZWwgPT09IFwicG9zbmVnXCIpIHtcblx0XHRcdFx0XG5cdFx0XHRcdGlmIChVdGlsU2VydmljZS5pc051bGwoYnVuZGxlLmN1cnJlbnROdW1iZXIpICYmIFV0aWxTZXJ2aWNlLmlzRW1wdHkoYnVuZGxlLm51bWJlclN0YWNrKSkge1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0ZXhlY3V0ZU9wZXJhdGlvbihvcE9iamVjdC5sYWJlbCwgYnVuZGxlKTtcblx0XHRcdFx0XG5cdFx0XHR9IGVsc2UgaWYgKG9wT2JqZWN0LmxhYmVsID09PSBcInBlcmNlbnRhZ2VcIikge1xuXHRcdFx0XHRcblx0XHRcdFx0ZXhlY3V0ZU9wZXJhdGlvbihvcE9iamVjdC5sYWJlbCwgYnVuZGxlKTtcblx0XHRcdFx0XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKE51bWJlcihidW5kbGUuY3VycmVudE51bWJlcikpIHtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRidW5kbGUubnVtYmVyU3RhY2sucHVzaChOdW1iZXIoYnVuZGxlLmN1cnJlbnROdW1iZXIpKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0YnVuZGxlLmN1cnJlbnRPcCA9IG9wT2JqZWN0LmxhYmVsO1xuXHRcdFx0XHRcblx0XHRcdFx0YnVuZGxlLmN1cnJlbnROdW1iZXIgPSBudWxsO1xuXHRcdFx0XHRkb3RFbnRlcmVkID0gZmFsc2U7XG5cdFx0XHRcdFxuXHRcdFx0XHRwYXJzZUNhbGN1bGF0aW9uKGJ1bmRsZSk7XG5cdFx0XHRcdFxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRzdGFja1N0YXRlKGJ1bmRsZSk7XG5cdFx0XHRcblx0XHR9O1xuXHRcdFxuXHR9XSk7XG4iXX0=