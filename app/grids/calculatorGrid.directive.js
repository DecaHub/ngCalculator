"use strict";

angular.module("grids")
	.directive("dhCalculatorGrid", ["$document", function ($document) {
		
		return {
			
			restrict: "E",
			templateUrl: "grids/calculatorGrid.template.html",
			link: function (scope, element, attr) {
				
				let startX = 0;
				let startY = 0;
				let x = 0;
				let y = 0;
				
				let board = element.find("dh-board-grid");
				
				function mousemove (event) {
					
					y = event.pageY - startY;
					x = event.pageX - startX;
					
					element.css({
						
						top: y + "px",
						left: x + "px"
						
					});
					
				}
				
				function mouseup () {
					
					$document.off("mousemove", mousemove);
					$document.off("mouseup", mouseup);
					
				}
				
				board.css({
					
					cursor: "pointer"
					
				});
				
				element.css({
					
					/**
					 * Must make the position of the element relative for the
					 * resizing to occur. It is a direct style declaration on
					 * the DOM element, not through a class.
					 */
					position: "relative",
					
				});
				
				board.on("mousedown", function (event) {
					
					event.preventDefault();
					
					startX = event.pageX - x;
					startY = event.pageY - y;
					
					$document.on("mousemove", mousemove);
					$document.on("mouseup", mouseup);
					
				});
				
			}
		};
		
	}]);
