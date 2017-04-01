"use strict";

angular.module("grids")
	.directive("dhNumberGrid", function () {
		
		return {
			
			restrict: "E",
			templateUrl: "grids/numberGrid.template.html",
			scope: {numbers: "<"}
			
		};
		
	});
