"use strict";

angular.module("grids")
	.directive("dhOperationGrid", function () {
		
		return {
			
			restrict: "E",
			templateUrl: "grids/operationGrid.template.html"
			
		}
		
	});