"use strict";

angular.module("grids")
	.directive("dhCalculatorGrid", ["$document", function ($document) {
		
		return {
			
			restrict: "E",
			templateUrl: "grids/calculatorGrid.template.html",
			link (scope, element, attr) {
				
				let startX = 0;
				let startY = 0;
				let posX = 0;
				let posY = 0;
				
				const board = element.find("dh-board-grid");
				
				const mousemove = function (event) {
					
					posY = event.pageY - startY;
					posX = event.pageX - startX;
					
					element.css({
						
						top: `${posY}px`,
						left: `${posX}px`
						
					});
					
				};
				
				const mouseup = function () {
					
					$document.off("mousemove", mousemove);
					$document.off("mouseup", mouseup);
					
				};
				
				board.css({cursor: "pointer"});
				
				element.css({
					
					/**
					 * Must make the position of the element relative for the
					 * resizing to occur. It is a direct style declaration on
					 * the DOM element, not through a class.
					 */
					position: "relative"
					
				});
				
				board.on("mousedown", function (event) {
					
					event.preventDefault();
					
					startX = event.pageX - posX;
					startY = event.pageY - posY;
					
					$document.on("mousemove", mousemove);
					$document.on("mouseup", mouseup);
					
				});
				
			}
		};
		
	}]);
