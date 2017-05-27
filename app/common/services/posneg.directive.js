"use strict";

angular.module("auxiliary")
	.directive("dhPosneg", ["BoardGridService", function (BoardGridService) {
		
		return {
			
			link(scope, element, attr) {
				
				element.on("click", function () {
					
					scope.$apply(function () {
						
						// BoardGridService.flipSign();
						
					})
					
				});
				
			}
			
		};
		
	}]);
