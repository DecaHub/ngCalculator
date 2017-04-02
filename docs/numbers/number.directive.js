"use strict";

angular.module("numbers").directive("dhNumber", ["BoardGridService", function (BoardGridService) {

	return {

		restrict: "E",
		scope: { digit: "<" },
		templateUrl: "numbers/number.template.html",
		link: function link(scope, element, attr) {

			element.on("click", function () {

				scope.$apply(function () {

					BoardGridService.appendDigit(scope.digit);
				});
			});
		}
	};
}]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm51bWJlcnMvbnVtYmVyLmRpcmVjdGl2ZS5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiZGlyZWN0aXZlIiwiQm9hcmRHcmlkU2VydmljZSIsInJlc3RyaWN0Iiwic2NvcGUiLCJkaWdpdCIsInRlbXBsYXRlVXJsIiwibGluayIsImVsZW1lbnQiLCJhdHRyIiwib24iLCIkYXBwbHkiLCJhcHBlbmREaWdpdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLFFBQVFDLE1BQVIsQ0FBZSxTQUFmLEVBQ0VDLFNBREYsQ0FDWSxVQURaLEVBQ3dCLENBQUMsa0JBQUQsRUFBcUIsVUFBVUMsZ0JBQVYsRUFBNEI7O0FBRXZFLFFBQU87O0FBRU5DLFlBQVUsR0FGSjtBQUdOQyxTQUFPLEVBQUNDLE9BQU8sR0FBUixFQUhEO0FBSU5DLGVBQWEsOEJBSlA7QUFLTkMsTUFMTSxnQkFLQUgsS0FMQSxFQUtPSSxPQUxQLEVBS2dCQyxJQUxoQixFQUtzQjs7QUFFM0JELFdBQVFFLEVBQVIsQ0FBVyxPQUFYLEVBQW9CLFlBQVk7O0FBRS9CTixVQUFNTyxNQUFOLENBQWEsWUFBWTs7QUFFeEJULHNCQUFpQlUsV0FBakIsQ0FBNkJSLE1BQU1DLEtBQW5DO0FBRUEsS0FKRDtBQU1BLElBUkQ7QUFVQTtBQWpCSyxFQUFQO0FBcUJBLENBdkJzQixDQUR4QiIsImZpbGUiOiJudW1iZXJzL251bWJlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuYW5ndWxhci5tb2R1bGUoXCJudW1iZXJzXCIpXG5cdC5kaXJlY3RpdmUoXCJkaE51bWJlclwiLCBbXCJCb2FyZEdyaWRTZXJ2aWNlXCIsIGZ1bmN0aW9uIChCb2FyZEdyaWRTZXJ2aWNlKSB7XG5cdFx0XG5cdFx0cmV0dXJuIHtcblx0XHRcdFxuXHRcdFx0cmVzdHJpY3Q6IFwiRVwiLFxuXHRcdFx0c2NvcGU6IHtkaWdpdDogXCI8XCJ9LFxuXHRcdFx0dGVtcGxhdGVVcmw6IFwibnVtYmVycy9udW1iZXIudGVtcGxhdGUuaHRtbFwiLFxuXHRcdFx0bGluayAoc2NvcGUsIGVsZW1lbnQsIGF0dHIpIHtcblx0XHRcdFx0XG5cdFx0XHRcdGVsZW1lbnQub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0c2NvcGUuJGFwcGx5KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0Qm9hcmRHcmlkU2VydmljZS5hcHBlbmREaWdpdChzY29wZS5kaWdpdCk7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcblx0XHRcdFx0fSlcblx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9O1xuXHRcdFxuXHR9XSk7XG4iXX0=