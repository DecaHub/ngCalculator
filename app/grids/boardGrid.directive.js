"use strict";

/* global $ */

angular.module("grids")
	.directive("dhBoardGrid", ["BoardGridService", function (BoardGridService) {
		
		return {
			
			restrict: "E",
			templateUrl: "grids/boardGrid.template.html",
			link (scope, element, attr) {
				
				scope.displayNumber = BoardGridService.getCurrentNumber();
				
				scope.$watch(function () {
					
					return BoardGridService.getCurrentNumber();
					
				}, function (newVal) {
					
					scope.displayNumber = newVal;
					
				});
				
				const digitBox = $("#digitBox");
			
				let digitBoxFontSize = parseInt($(digitBox).css("font-size"), 10);
				const digitBoxFontPadding = parseInt($(digitBox).css("padding"), 10);
				
				const maxWidth = $(".boardGrid").width() - (digitBoxFontPadding * 2);
				
				scope.$watch(function () {
					
					return digitBox.width();
					
					
				}, function (newVal, oldVal) {
					
					if (newVal > maxWidth) {
						
						digitBoxFontSize -= 1;
						
						digitBox.css({fontSize: `${digitBoxFontSize}px`});
						
					}
					
				});
				
			}
			
		};
		
	}]);
