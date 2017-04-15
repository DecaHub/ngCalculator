"use strict";

/* global $ */

angular.module("grids").directive("dhBoardGrid", ["BoardGridService", function (BoardGridService) {

	return {

		restrict: "E",
		templateUrl: "grids/boardGrid.template.html",
		link: function link(scope, element, attr) {

			scope.displayNumber = BoardGridService.getCurrentNumber();

			scope.$watch(function () {

				return BoardGridService.getCurrentNumber();
			}, function (newVal) {

				scope.displayNumber = newVal;
			});

			var digitBox = $("#digitBox");

			var digitBoxFontSize = parseInt($(digitBox).css("font-size"), 10);
			var digitBoxFontPadding = parseInt($(digitBox).css("padding"), 10);

			var maxWidth = $(".boardGrid").width() - digitBoxFontPadding * 2;

			scope.$watch(function () {

				return digitBox.width();
			}, function (newVal, oldVal) {

				if (scope.displayNumber.toString().length === 1) {

					digitBoxFontSize = 48;

					digitBox.css({ fontSize: digitBoxFontSize + "px" });

					return;
				}

				while (newVal > maxWidth) {

					digitBoxFontSize -= 1;

					digitBox.css({ fontSize: digitBoxFontSize + "px" });

					newVal = digitBox.width();
				}
			});
		}
	};
}]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyaWRzL2JvYXJkR3JpZC5kaXJlY3RpdmUuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImRpcmVjdGl2ZSIsIkJvYXJkR3JpZFNlcnZpY2UiLCJyZXN0cmljdCIsInRlbXBsYXRlVXJsIiwibGluayIsInNjb3BlIiwiZWxlbWVudCIsImF0dHIiLCJkaXNwbGF5TnVtYmVyIiwiZ2V0Q3VycmVudE51bWJlciIsIiR3YXRjaCIsIm5ld1ZhbCIsImRpZ2l0Qm94IiwiJCIsImRpZ2l0Qm94Rm9udFNpemUiLCJwYXJzZUludCIsImNzcyIsImRpZ2l0Qm94Rm9udFBhZGRpbmciLCJtYXhXaWR0aCIsIndpZHRoIiwib2xkVmFsIiwidG9TdHJpbmciLCJsZW5ndGgiLCJmb250U2l6ZSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUFBLFFBQVFDLE1BQVIsQ0FBZSxPQUFmLEVBQ0VDLFNBREYsQ0FDWSxhQURaLEVBQzJCLENBQUMsa0JBQUQsRUFBcUIsVUFBVUMsZ0JBQVYsRUFBNEI7O0FBRTFFLFFBQU87O0FBRU5DLFlBQVUsR0FGSjtBQUdOQyxlQUFhLCtCQUhQO0FBSU5DLE1BSk0sZ0JBSUFDLEtBSkEsRUFJT0MsT0FKUCxFQUlnQkMsSUFKaEIsRUFJc0I7O0FBRTNCRixTQUFNRyxhQUFOLEdBQXNCUCxpQkFBaUJRLGdCQUFqQixFQUF0Qjs7QUFFQUosU0FBTUssTUFBTixDQUFhLFlBQVk7O0FBRXhCLFdBQU9ULGlCQUFpQlEsZ0JBQWpCLEVBQVA7QUFFQSxJQUpELEVBSUcsVUFBVUUsTUFBVixFQUFrQjs7QUFFcEJOLFVBQU1HLGFBQU4sR0FBc0JHLE1BQXRCO0FBRUEsSUFSRDs7QUFVQSxPQUFNQyxXQUFXQyxFQUFFLFdBQUYsQ0FBakI7O0FBRUEsT0FBSUMsbUJBQW1CQyxTQUFTRixFQUFFRCxRQUFGLEVBQVlJLEdBQVosQ0FBZ0IsV0FBaEIsQ0FBVCxFQUF1QyxFQUF2QyxDQUF2QjtBQUNBLE9BQU1DLHNCQUFzQkYsU0FBU0YsRUFBRUQsUUFBRixFQUFZSSxHQUFaLENBQWdCLFNBQWhCLENBQVQsRUFBcUMsRUFBckMsQ0FBNUI7O0FBRUEsT0FBTUUsV0FBV0wsRUFBRSxZQUFGLEVBQWdCTSxLQUFoQixLQUEyQkYsc0JBQXNCLENBQWxFOztBQUVBWixTQUFNSyxNQUFOLENBQWEsWUFBWTs7QUFFeEIsV0FBT0UsU0FBU08sS0FBVCxFQUFQO0FBR0EsSUFMRCxFQUtHLFVBQVVSLE1BQVYsRUFBa0JTLE1BQWxCLEVBQTBCOztBQUc1QixRQUFJZixNQUFNRyxhQUFOLENBQW9CYSxRQUFwQixHQUErQkMsTUFBL0IsS0FBMEMsQ0FBOUMsRUFBaUQ7O0FBRWhEUix3QkFBbUIsRUFBbkI7O0FBRUFGLGNBQVNJLEdBQVQsQ0FBYSxFQUFDTyxVQUFhVCxnQkFBYixPQUFELEVBQWI7O0FBRUE7QUFDQTs7QUFFRCxXQUFPSCxTQUFTTyxRQUFoQixFQUEwQjs7QUFFekJKLHlCQUFvQixDQUFwQjs7QUFFQUYsY0FBU0ksR0FBVCxDQUFhLEVBQUNPLFVBQWFULGdCQUFiLE9BQUQsRUFBYjs7QUFFQUgsY0FBU0MsU0FBU08sS0FBVCxFQUFUO0FBRUE7QUFFRCxJQTNCRDtBQTZCQTtBQXRESyxFQUFQO0FBMERBLENBNUR5QixDQUQzQiIsImZpbGUiOiJncmlkcy9ib2FyZEdyaWQuZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGdsb2JhbCAkICovXG5cbmFuZ3VsYXIubW9kdWxlKFwiZ3JpZHNcIilcblx0LmRpcmVjdGl2ZShcImRoQm9hcmRHcmlkXCIsIFtcIkJvYXJkR3JpZFNlcnZpY2VcIiwgZnVuY3Rpb24gKEJvYXJkR3JpZFNlcnZpY2UpIHtcblx0XHRcblx0XHRyZXR1cm4ge1xuXHRcdFx0XG5cdFx0XHRyZXN0cmljdDogXCJFXCIsXG5cdFx0XHR0ZW1wbGF0ZVVybDogXCJncmlkcy9ib2FyZEdyaWQudGVtcGxhdGUuaHRtbFwiLFxuXHRcdFx0bGluayAoc2NvcGUsIGVsZW1lbnQsIGF0dHIpIHtcblx0XHRcdFx0XG5cdFx0XHRcdHNjb3BlLmRpc3BsYXlOdW1iZXIgPSBCb2FyZEdyaWRTZXJ2aWNlLmdldEN1cnJlbnROdW1iZXIoKTtcblx0XHRcdFx0XG5cdFx0XHRcdHNjb3BlLiR3YXRjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0cmV0dXJuIEJvYXJkR3JpZFNlcnZpY2UuZ2V0Q3VycmVudE51bWJlcigpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHR9LCBmdW5jdGlvbiAobmV3VmFsKSB7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0c2NvcGUuZGlzcGxheU51bWJlciA9IG5ld1ZhbDtcblx0XHRcdFx0XHRcblx0XHRcdFx0fSk7XG5cdFx0XHRcdFxuXHRcdFx0XHRjb25zdCBkaWdpdEJveCA9ICQoXCIjZGlnaXRCb3hcIik7XG5cdFx0XHRcblx0XHRcdFx0bGV0IGRpZ2l0Qm94Rm9udFNpemUgPSBwYXJzZUludCgkKGRpZ2l0Qm94KS5jc3MoXCJmb250LXNpemVcIiksIDEwKTtcblx0XHRcdFx0Y29uc3QgZGlnaXRCb3hGb250UGFkZGluZyA9IHBhcnNlSW50KCQoZGlnaXRCb3gpLmNzcyhcInBhZGRpbmdcIiksIDEwKTtcblx0XHRcdFx0XG5cdFx0XHRcdGNvbnN0IG1heFdpZHRoID0gJChcIi5ib2FyZEdyaWRcIikud2lkdGgoKSAtIChkaWdpdEJveEZvbnRQYWRkaW5nICogMik7XG5cdFx0XHRcdFxuXHRcdFx0XHRzY29wZS4kd2F0Y2goZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHJldHVybiBkaWdpdEJveC53aWR0aCgpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdFxuXHRcdFx0XHR9LCBmdW5jdGlvbiAobmV3VmFsLCBvbGRWYWwpIHtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpZiAoc2NvcGUuZGlzcGxheU51bWJlci50b1N0cmluZygpLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRkaWdpdEJveEZvbnRTaXplID0gNDg7XG5cblx0XHRcdFx0XHRcdGRpZ2l0Qm94LmNzcyh7Zm9udFNpemU6IGAke2RpZ2l0Qm94Rm9udFNpemV9cHhgfSk7XG5cblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0d2hpbGUgKG5ld1ZhbCA+IG1heFdpZHRoKSB7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGRpZ2l0Qm94Rm9udFNpemUgLT0gMTtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0ZGlnaXRCb3guY3NzKHtmb250U2l6ZTogYCR7ZGlnaXRCb3hGb250U2l6ZX1weGB9KTtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0bmV3VmFsID0gZGlnaXRCb3gud2lkdGgoKTtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0fSk7XG5cdFx0XHRcdFxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0fTtcblx0XHRcblx0fV0pO1xuIl19
