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
				
				const digitBox = $("#digitBox");
				const digitBoxFontPadding = parseInt($(digitBox).css("padding"), 10);
				let digitBoxFontSize = parseInt($(digitBox).css("font-size"), 10);
				
				const maxWidth = $(".boardGrid").width() - (digitBoxFontPadding * 2);
				
				scope.$on("number:change", function (event, data) {
					
					console.log(`number:change: ${data}`);
					
					scope.displayNumber = data;
					
					digitBox.html(scope.displayNumber);
					
					$rootScope.$broadcast("digitBox:change");
					
				});
				
				scope.$on("digitBox:change", function (event) {
					
					if (scope.displayNumber.toString().length === 1) {
						
						digitBoxFontSize = 48;
						
						digitBox.css({fontSize: `${digitBoxFontSize}px`});
						
						return;
					}
					
					while (digitBox.width() > maxWidth) {
						
						digitBoxFontSize -= 1;
						
						digitBox.css({fontSize: `${digitBoxFontSize}px`});
						
						
					}
					
				});
				
			}
			
		};
		
	}]);
