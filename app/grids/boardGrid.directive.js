"use strict";

angular.module("grids")
	.directive("dhBoardGrid", ["BoardGridService", function (BoardGridService) {
		
		return {
			
			restrict: "E",
			templateUrl: "grids/boardGrid.template.html",
			link (scope, element, attr) {
				
				scope.displayNumber = BoardGridService.getCurrentNumber();
				
				scope.$watch(function () {
					
					return BoardGridService.getCurrentNumber();
					
				}, function (newVal) {
					
					scope.displayNumber = newVal;
					
				})
				
			}
			
		};
		
	}]);
