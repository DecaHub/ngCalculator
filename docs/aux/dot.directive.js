"use strict";

angular.module("auxiliary").directive("dhDot", ["BoardGridService", function (BoardGridService) {

	return {
		link: function link(scope, element, attr) {

			element.on("click", function () {

				scope.$apply(function () {

					BoardGridService.appendDigit(".");
				});
			});
		}
	};
}]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1eC9kb3QuZGlyZWN0aXZlLmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJkaXJlY3RpdmUiLCJCb2FyZEdyaWRTZXJ2aWNlIiwibGluayIsInNjb3BlIiwiZWxlbWVudCIsImF0dHIiLCJvbiIsIiRhcHBseSIsImFwcGVuZERpZ2l0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsUUFBUUMsTUFBUixDQUFlLFdBQWYsRUFDRUMsU0FERixDQUNZLE9BRFosRUFDcUIsQ0FBQyxrQkFBRCxFQUFxQixVQUFVQyxnQkFBVixFQUE0Qjs7QUFFcEUsUUFBTztBQUVOQyxNQUZNLGdCQUVEQyxLQUZDLEVBRU1DLE9BRk4sRUFFZUMsSUFGZixFQUVxQjs7QUFHMUJELFdBQVFFLEVBQVIsQ0FBVyxPQUFYLEVBQW9CLFlBQVk7O0FBRS9CSCxVQUFNSSxNQUFOLENBQWEsWUFBWTs7QUFFeEJOLHNCQUFpQk8sV0FBakIsQ0FBNkIsR0FBN0I7QUFFQSxLQUpEO0FBTUEsSUFSRDtBQVVBO0FBZkssRUFBUDtBQW1CQSxDQXJCbUIsQ0FEckIiLCJmaWxlIjoiYXV4L2RvdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuYW5ndWxhci5tb2R1bGUoXCJhdXhpbGlhcnlcIilcblx0LmRpcmVjdGl2ZShcImRoRG90XCIsIFtcIkJvYXJkR3JpZFNlcnZpY2VcIiwgZnVuY3Rpb24gKEJvYXJkR3JpZFNlcnZpY2UpIHtcblx0XHRcblx0XHRyZXR1cm4ge1xuXHRcdFx0XG5cdFx0XHRsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRyKSB7XG5cdFx0XHRcdFxuXHRcdFx0XHRcblx0XHRcdFx0ZWxlbWVudC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRzY29wZS4kYXBwbHkoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRCb2FyZEdyaWRTZXJ2aWNlLmFwcGVuZERpZ2l0KFwiLlwiKTtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHR9KVxuXHRcdFx0XHRcblx0XHRcdH1cblx0XHRcdFxuXHRcdH1cblx0XHRcblx0fV0pOyJdfQ==