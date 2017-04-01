"use strict";

const AuxGridController = function (AuxiliaryService) {
	
	const vm = this;
	
	this.aux = AuxiliaryService.getAux();
	
};

AuxGridController.$inject = ["AuxiliaryService"];

angular.module("grids")
	.directive("dhAuxGrid", function () {
		
		return {
			
			controller: AuxGridController,
			controllerAs: "auxGrid",
			restrict: "E",
			templateUrl: "grids/auxiliaryGrid.template.html"
			
		};
		
	});
