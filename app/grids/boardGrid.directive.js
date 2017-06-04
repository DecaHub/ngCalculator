"use strict";

/* global $ */

angular.module("grids")
	.directive("dhBoardGrid", ["CentralDataService", "$rootScope", function (CentralDataService, $rootScope) {
		
		return {
			
			restrict: "E",
			templateUrl: "grids/boardGrid.template.html",
			link (scope, element, attr) {
				
				// Initial board value is zero
				scope.displayNumber = 0;
				
				const defaultFontSize = 300;
				
				const getWidth = function (el) {
					
					const cs = getComputedStyle(el);
					
					const paddingX = parseFloat(cs.paddingLeft) * 2;
					const borderX = parseFloat(cs.borderLeftWidth) * 2;
					
					return el.getBoundingClientRect().width - paddingX - borderX;
					
				};
				
				const digitBox = element[0].querySelector("#digitBox");
				
				const digitBoxFontPadding = parseInt(digitBox.style.padding = 10, 10);
				let digitBoxFontSize = parseInt(digitBox.style.fontSize = 10, 10);
				
				const maxWidth = getWidth(element[0]) - (digitBoxFontPadding * 2);
				
				scope.$on("number:change", function (event, data) {
					
					scope.displayNumber = data;
					
					digitBox.innerHTML = scope.displayNumber.toString();
					
					$rootScope.$broadcast("digitBox:change");
					
				});
				
				scope.$on("digitBox:change", function (event) {
					
					if (scope.displayNumber.toString().length === 1) {
						
						digitBoxFontSize = defaultFontSize;
						
						digitBox.style.fontSize = `${digitBoxFontSize}%`;
						
						return;
						
					}
				
					while (getWidth(digitBox) > maxWidth) {
						
						digitBoxFontSize -= 5;
						
						digitBox.style.fontSize = `${digitBoxFontSize}%`;
						
					}
					
				});
				
			}
			
		};
		
	}]);
