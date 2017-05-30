"use strict";

angular.module("auxiliary")
	.directive("dhDot", ["CentralDataService", function (CentralDataService) {
		
		return {
			
			link (scope, element, attr) {
				
				element.on("click", function () {
					
					CentralDataService.storeCurrentNumber(".");
					
				});
				
			}
			
		};
		
	}]);
