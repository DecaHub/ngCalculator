"use strict";

angular.module("main")
	.service("CentralDataService", function () {
		
		this.storeCurrentNumber = function (num) {
			
			console.log(num);
			
		};
		
		this.storeCurrentOp = function (op) {
			
			console.log(op);
			
		};
		
	});