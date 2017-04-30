"use strict";

/**
 * The purpose of OperationsService is to give data to the operation buttons. 
 */

angular.module("operations")
	.service("OperationsService", function () {
		
		const createOperationData = function (_symbol, _label) {
			
			return {
				
				symbol: _symbol,
				label: _label
				
			};
			
		};
		
		const _operations = [];
		
		_operations.push(createOperationData("÷", "division"));
		_operations.push(createOperationData("×", "multiplication"));
		_operations.push(createOperationData("−", "subtraction"));
		_operations.push(createOperationData("+", "addition"));
		_operations.push(createOperationData("=", "resultant"));
		
		this.getOperations = function () {
			
			return _operations;
			
		};
		
	});
