"use strict";

angular.module("operations")
	.directive("dhOperation", ["BoardGridService", function (BoardGridService) {
		
		return {
			
			restrict: "E",
			scope: {op: "<"},
			templateUrl: "operations/operation.template.html",
			link (scope, element, attr) {
				
				element.on("click", function () {
					
					scope.$apply(function () {
						
						BoardGridService.setCurrentOperation(scope.op.label);
						
					});
					
				});
				
				
			}
		};
		
	}]);
