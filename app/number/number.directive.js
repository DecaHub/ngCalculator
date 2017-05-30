"use strict";

angular.module("numbers")
	.directive("dhNumber", ["CentralDataService", function (CentralDataService) {
		
		return {
			
			restrict: "E",
			scope: {digit: "<"},
			templateUrl: "number/number.template.html",
			link (scope, element, attr) {
				
				element.on("click", function () {
					
					CentralDataService.storeCurrentNumber(scope.digit);
					
				});
				
			}
			
		};
		
	}]);
