"use strict";

angular.module("main")
	.service("CentralDataService", function () {
		
		let core = this;
		
		core.currentDigit = undefined;
		core.currentOp = undefined;
		
		core.numberStack = [];
		core.opStack = [];
		
		this.storeCurrentNumber = function (num) {
			
			core.currentDigit = num;
			core.numberStack.push(num.data);
			
			console.log(core.currentDigit.data);
			console.log(core.numberStack);
			
		};
		
		this.storeCurrentOp = function (op) {
			
			core.currentOp = op;
			core.opStack.push(op.label);
			
			console.log(core.currentOp.symbol);
			console.log(core.opStack);
			
		};
		
	});