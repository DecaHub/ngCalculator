"use strict";

const NumberGridController = function (NumbersService, AuxiliaryService) {
	
	const vm = this;
	
	vm.numbers = NumbersService.getNumbers();
	
	vm.dot = AuxiliaryService.getDot();
	
};

NumberGridController.$inject = ["NumbersService", "AuxiliaryService"];

angular.module("grids")
	.directive("dhNumberGrid", function () {
		
		return {
			
			restrict: "E",
			templateUrl: "grids/numberGrid.template.html",
			controller: NumberGridController,
			controllerAs: "numGrid"
			
		};
		
	});
