"use strict";

angular.module("auxiliary")
	.directive("dhPercentage", ["BoardGridService", function (BoardGridService) {
		
		return {
			
			link (scope, element, attr) {
				
				element.on("click", function () {
					
					scope.$apply(function () {
						
						BoardGridService.setCurrentOperation("percentage");
						
					})
					
					
				});
				
			}
			
		};
		
	}]);
