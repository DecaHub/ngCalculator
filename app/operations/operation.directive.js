"use strict";

angular.module("operations")
	.directive("dhOperation", function () {
		
		return {
			
			restrict: "E",
			scope: {op: "<"},
			templateUrl: "operations/operation.template.html"
			
		};
		
	});
