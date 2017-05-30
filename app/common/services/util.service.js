"use strict";

angular.module("main")
	.service("UtilService", [function () {
		
		this.isEmpty = function (arr) {
			
			return arr.length === 0;
			
		};
		
		this.isNull = function (val) {
			
			return val === null;
			
		};
		
	}]);