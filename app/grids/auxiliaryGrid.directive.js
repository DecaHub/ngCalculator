"use strict";

angular.module("grids")
	.directive("dhAuxGrid", function () {
		
		return {
			
			restrict: "E",
			templateUrl: "grids/auxiliaryGrid.template.html"
			
		};
		
	});
