"use strict";

angular.module("auxiliary")
	.directive("dhPercentage", ["CentralDataService", function (CentralDataService) {
		
		return {
			
			link (scope, element, attr) {
				
				element.on("click", function () {
					
					scope.$apply(function () {
						
						// CentralDataService.storeCurrentOp("percentage");
						// Percentage is an operation
						console.log(`Clicking percentage sign`);
						
					})
					
					
				});
				
			}
			
		};
		
	}]);
