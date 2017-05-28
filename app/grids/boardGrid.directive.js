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
				
				let getWidth = function (el) {
					
					let cs = getComputedStyle(el);
					
					let paddingX = parseFloat(cs.paddingLeft) * 2;
					let borderX = parseFloat(cs.borderLeftWidth) * 2;
					
					return el.getBoundingClientRect().width - paddingX - borderX;
					
				};
				
				const digitBox = element[0].querySelector("#digitBox");
				
				const digitBoxFontPadding = parseInt(digitBox.style.padding = 10);
				let digitBoxFontSize = parseInt(digitBox.style.fontSize = 10);
				
				const maxWidth = getWidth(element[0]) - (digitBoxFontPadding * 2);
				
				scope.$on("number:change", function (event, data) {
					
					console.log(`number:change: ${data}`);
					console.log(data.toString());
					
					scope.displayNumber = data;
					
					digitBox.innerHTML = scope.displayNumber.toString();
					
					$rootScope.$broadcast("digitBox:change");
					
				});
				
				scope.$on("digitBox:change", function (event) {
					
					if (scope.displayNumber.toString().length === 1) {
						
						digitBoxFontSize = 48;
						
						digitBox.style.fontSize = `${digitBoxFontSize}px`;
						
						return;
					}
				
					while (getWidth(digitBox) > maxWidth) {
						
						digitBoxFontSize -= 1;
						
						digitBox.style.fontSize = `${digitBoxFontSize}px`;
						
					}
					
				});
				
			}
			
		};
		
	}]);
