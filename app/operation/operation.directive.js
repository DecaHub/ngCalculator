"use strict";

angular.module("operations")
	.directive("dhOperation", ["CentralDataService", function (CentralDataService) {
		
		return {
			
			restrict: "E",
			scope: {op: "<"},
			templateUrl: "operation/operation.template.html",
			link (scope, element, attr) {
				
				element.on("click", function () {
					
					CentralDataService.storeCurrentOp(scope.op);
					
				});
				
				
			}
		};
		
	}]);
