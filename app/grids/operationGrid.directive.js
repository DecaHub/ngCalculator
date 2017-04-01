"use strict";

const OperationGridController = function (OperationsService) {
	
	const vm = this;
	
	vm.operations = OperationsService.getOperations();
	
};

OperationGridController.$inject = ["OperationsService"];

angular.module("grids")
	.directive("dhOperationGrid", function () {
		
		return {
			
			controller: OperationGridController,
			controllerAs: "opGrid",
			restrict: "E",
			templateUrl: "grids/operationGrid.template.html"
			
		};
		
	});
