"use strict";

angular.module("auxiliary")
	.directive("dhAuxiliary", function () {
		
		return {
			
			restrict: "E",
			templateUrl: "aux/auxiliary.template.html",
			scope: {aux: "<"}
			
		};
		
	});

