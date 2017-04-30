"use strict";

angular.module("auxiliary")
	.directive("dhAuxiliary", ["CentralDataService", function (CentralDataService) {
		
		return {
			
			restrict: "E",
			scope: {aux: "<"},
			templateUrl: "aux/auxiliary.template.html",
			link (scope, element, attr) {
				
				element.on("click", function () {
					
					CentralDataService.storeCurrentOp(scope.aux);
					
				})
				
			}
			
			
		};
		
	}]);

