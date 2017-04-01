"use strict";

angular.module("grids")
	.directive("dhBoardGrid", function () {
		
		return {
			
			restrict: "E",
			templateUrl: "grids/boardGrid.template.html"
			
		};
		
	});
