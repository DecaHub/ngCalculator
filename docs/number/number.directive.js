"use strict";

angular.module("numbers").directive("dhNumber", ["CentralDataService", function (CentralDataService) {

	return {

		restrict: "E",
		scope: { digit: "<" },
		templateUrl: "number/number.template.html",
		link: function link(scope, element, attr) {

			element.on("click", function () {

				CentralDataService.storeCurrentNumber(scope.digit);
			});
		}
	};
}]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm51bWJlci9udW1iZXIuZGlyZWN0aXZlLmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJkaXJlY3RpdmUiLCJDZW50cmFsRGF0YVNlcnZpY2UiLCJyZXN0cmljdCIsInNjb3BlIiwiZGlnaXQiLCJ0ZW1wbGF0ZVVybCIsImxpbmsiLCJlbGVtZW50IiwiYXR0ciIsIm9uIiwic3RvcmVDdXJyZW50TnVtYmVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsUUFBUUMsTUFBUixDQUFlLFNBQWYsRUFDRUMsU0FERixDQUNZLFVBRFosRUFDd0IsQ0FBQyxvQkFBRCxFQUF1QixVQUFVQyxrQkFBVixFQUE4Qjs7QUFFM0UsUUFBTzs7QUFFTkMsWUFBVSxHQUZKO0FBR05DLFNBQU8sRUFBQ0MsT0FBTyxHQUFSLEVBSEQ7QUFJTkMsZUFBYSw2QkFKUDtBQUtOQyxNQUxNLGdCQUtBSCxLQUxBLEVBS09JLE9BTFAsRUFLZ0JDLElBTGhCLEVBS3NCOztBQUUzQkQsV0FBUUUsRUFBUixDQUFXLE9BQVgsRUFBb0IsWUFBWTs7QUFFL0JSLHVCQUFtQlMsa0JBQW5CLENBQXNDUCxNQUFNQyxLQUE1QztBQUVBLElBSkQ7QUFNQTtBQWJLLEVBQVA7QUFpQkEsQ0FuQnNCLENBRHhCIiwiZmlsZSI6Im51bWJlci9udW1iZXIuZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmFuZ3VsYXIubW9kdWxlKFwibnVtYmVyc1wiKVxuXHQuZGlyZWN0aXZlKFwiZGhOdW1iZXJcIiwgW1wiQ2VudHJhbERhdGFTZXJ2aWNlXCIsIGZ1bmN0aW9uIChDZW50cmFsRGF0YVNlcnZpY2UpIHtcblx0XHRcblx0XHRyZXR1cm4ge1xuXHRcdFx0XG5cdFx0XHRyZXN0cmljdDogXCJFXCIsXG5cdFx0XHRzY29wZToge2RpZ2l0OiBcIjxcIn0sXG5cdFx0XHR0ZW1wbGF0ZVVybDogXCJudW1iZXIvbnVtYmVyLnRlbXBsYXRlLmh0bWxcIixcblx0XHRcdGxpbmsgKHNjb3BlLCBlbGVtZW50LCBhdHRyKSB7XG5cdFx0XHRcdFxuXHRcdFx0XHRlbGVtZW50Lm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdENlbnRyYWxEYXRhU2VydmljZS5zdG9yZUN1cnJlbnROdW1iZXIoc2NvcGUuZGlnaXQpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9O1xuXHRcdFxuXHR9XSk7XG4iXX0=