"use strict";

const NumberGridController = function (NumbersService) {
	
	const vm = this;
	
	vm.numbers = NumbersService.getNumbers();
	
};

NumberGridController.$inject = ["NumbersService"];

angular.module("grids")
	.directive("dhNumberGrid", function () {
		
		return {
			
			restrict: "E",
			templateUrl: "grids/numberGrid.template.html",
			scope: {numbers: "<"},
			controller: NumberGridController,
			controllerAs: "numGrid"
			
		};
		
	});
