"use strict";

angular.module("numbers")
	.directive("dhNumber", function () {
		
		return {
			
			restrict: "E",
			scope: {digit: "<"},
			templateUrl: "numbers/number.template.html"
			
		};
		
	});
