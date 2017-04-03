"use strict";

angular.module("numbers")
	.directive("dhNumber", ["BoardGridService", function (BoardGridService) {
		
		return {
			
			restrict: "E",
			scope: {digit: "<"},
			templateUrl: "numbers/number.template.html",
			link (scope, element, attr) {
				
				element.on("click", function () {
					
					scope.$apply(function () {
						
						BoardGridService.appendDigit(scope.digit);
						
					});
					
				});
				
			}
			
		};
		
	}]);
