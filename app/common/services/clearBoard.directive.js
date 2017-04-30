"use strict";

angular.module("auxiliary")
	.directive("clearBoard", ["BoardGridService", function (BoardGridService) {
		
		return {
			
			link (scope, element, attr) {
				
				element.on("click", function () {
					
					scope.$apply(function () {
						
						BoardGridService.clearBoard();
						
					});
					
				});
				
			}
			
		};
		
	}]);
