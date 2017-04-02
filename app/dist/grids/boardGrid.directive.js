"use strict";

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

			var digitBoxFontSize = parseInt($(digitBox).css('font-size'));
			var digitBoxFontPadding = parseInt($(digitBox).css('padding'));

			var maxWidth = $(".boardGrid").width() - digitBoxFontPadding * 2;

			scope.$watch(function () {

				return digitBox.width();
			}, function (newVal, oldVal) {

				if (newVal > maxWidth) {

					digitBoxFontSize -= 1;

					digitBox.css({

						fontSize: digitBoxFontSize + "px"

					});
				}
			});
		}
	};
}]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyaWRzL2JvYXJkR3JpZC5kaXJlY3RpdmUuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImRpcmVjdGl2ZSIsIkJvYXJkR3JpZFNlcnZpY2UiLCJyZXN0cmljdCIsInRlbXBsYXRlVXJsIiwibGluayIsInNjb3BlIiwiZWxlbWVudCIsImF0dHIiLCJkaXNwbGF5TnVtYmVyIiwiZ2V0Q3VycmVudE51bWJlciIsIiR3YXRjaCIsIm5ld1ZhbCIsImRpZ2l0Qm94IiwiJCIsImRpZ2l0Qm94Rm9udFNpemUiLCJwYXJzZUludCIsImNzcyIsImRpZ2l0Qm94Rm9udFBhZGRpbmciLCJtYXhXaWR0aCIsIndpZHRoIiwib2xkVmFsIiwiZm9udFNpemUiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxRQUFRQyxNQUFSLENBQWUsT0FBZixFQUNFQyxTQURGLENBQ1ksYUFEWixFQUMyQixDQUFDLGtCQUFELEVBQXFCLFVBQVVDLGdCQUFWLEVBQTRCOztBQUUxRSxRQUFPOztBQUVOQyxZQUFVLEdBRko7QUFHTkMsZUFBYSwrQkFIUDtBQUlOQyxNQUpNLGdCQUlBQyxLQUpBLEVBSU9DLE9BSlAsRUFJZ0JDLElBSmhCLEVBSXNCOztBQUUzQkYsU0FBTUcsYUFBTixHQUFzQlAsaUJBQWlCUSxnQkFBakIsRUFBdEI7O0FBRUFKLFNBQU1LLE1BQU4sQ0FBYSxZQUFZOztBQUV4QixXQUFPVCxpQkFBaUJRLGdCQUFqQixFQUFQO0FBRUEsSUFKRCxFQUlHLFVBQVVFLE1BQVYsRUFBa0I7O0FBRXBCTixVQUFNRyxhQUFOLEdBQXNCRyxNQUF0QjtBQUVBLElBUkQ7O0FBVUEsT0FBSUMsV0FBV0MsRUFBRSxXQUFGLENBQWY7O0FBRUEsT0FBSUMsbUJBQW1CQyxTQUFTRixFQUFFRCxRQUFGLEVBQVlJLEdBQVosQ0FBZ0IsV0FBaEIsQ0FBVCxDQUF2QjtBQUNBLE9BQUlDLHNCQUFzQkYsU0FBU0YsRUFBRUQsUUFBRixFQUFZSSxHQUFaLENBQWdCLFNBQWhCLENBQVQsQ0FBMUI7O0FBRUEsT0FBSUUsV0FBV0wsRUFBRSxZQUFGLEVBQWdCTSxLQUFoQixLQUEwQkYsc0JBQXNCLENBQS9EOztBQUVBWixTQUFNSyxNQUFOLENBQWEsWUFBWTs7QUFFeEIsV0FBT0UsU0FBU08sS0FBVCxFQUFQO0FBR0EsSUFMRCxFQUtHLFVBQVVSLE1BQVYsRUFBa0JTLE1BQWxCLEVBQTBCOztBQUU1QixRQUFJVCxTQUFTTyxRQUFiLEVBQXVCOztBQUV0QkoseUJBQW9CLENBQXBCOztBQUVBRixjQUFTSSxHQUFULENBQWE7O0FBRVpLLGdCQUFVUCxtQkFBbUI7O0FBRmpCLE1BQWI7QUFNQTtBQUVELElBbkJEO0FBcUJBO0FBOUNLLEVBQVA7QUFrREEsQ0FwRHlCLENBRDNCIiwiZmlsZSI6ImdyaWRzL2JvYXJkR3JpZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuYW5ndWxhci5tb2R1bGUoXCJncmlkc1wiKVxuXHQuZGlyZWN0aXZlKFwiZGhCb2FyZEdyaWRcIiwgW1wiQm9hcmRHcmlkU2VydmljZVwiLCBmdW5jdGlvbiAoQm9hcmRHcmlkU2VydmljZSkge1xuXHRcdFxuXHRcdHJldHVybiB7XG5cdFx0XHRcblx0XHRcdHJlc3RyaWN0OiBcIkVcIixcblx0XHRcdHRlbXBsYXRlVXJsOiBcImdyaWRzL2JvYXJkR3JpZC50ZW1wbGF0ZS5odG1sXCIsXG5cdFx0XHRsaW5rIChzY29wZSwgZWxlbWVudCwgYXR0cikge1xuXHRcdFx0XHRcblx0XHRcdFx0c2NvcGUuZGlzcGxheU51bWJlciA9IEJvYXJkR3JpZFNlcnZpY2UuZ2V0Q3VycmVudE51bWJlcigpO1xuXHRcdFx0XHRcblx0XHRcdFx0c2NvcGUuJHdhdGNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRyZXR1cm4gQm9hcmRHcmlkU2VydmljZS5nZXRDdXJyZW50TnVtYmVyKCk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH0sIGZ1bmN0aW9uIChuZXdWYWwpIHtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRzY29wZS5kaXNwbGF5TnVtYmVyID0gbmV3VmFsO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0XG5cdFx0XHRcdGxldCBkaWdpdEJveCA9ICQoXCIjZGlnaXRCb3hcIik7XG5cdFx0XHRcblx0XHRcdFx0bGV0IGRpZ2l0Qm94Rm9udFNpemUgPSBwYXJzZUludCgkKGRpZ2l0Qm94KS5jc3MoJ2ZvbnQtc2l6ZScpKTtcblx0XHRcdFx0bGV0IGRpZ2l0Qm94Rm9udFBhZGRpbmcgPSBwYXJzZUludCgkKGRpZ2l0Qm94KS5jc3MoJ3BhZGRpbmcnKSk7XG5cdFx0XHRcdFxuXHRcdFx0XHRsZXQgbWF4V2lkdGggPSAkKFwiLmJvYXJkR3JpZFwiKS53aWR0aCgpIC0gZGlnaXRCb3hGb250UGFkZGluZyAqIDI7XG5cdFx0XHRcdFxuXHRcdFx0XHRzY29wZS4kd2F0Y2goZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHJldHVybiBkaWdpdEJveC53aWR0aCgpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdFxuXHRcdFx0XHR9LCBmdW5jdGlvbiAobmV3VmFsLCBvbGRWYWwpIHtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpZiAobmV3VmFsID4gbWF4V2lkdGgpIHtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0ZGlnaXRCb3hGb250U2l6ZSAtPSAxO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRkaWdpdEJveC5jc3Moe1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0Zm9udFNpemU6IGRpZ2l0Qm94Rm9udFNpemUgKyBcInB4XCJcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0fSlcblx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9O1xuXHRcdFxuXHR9XSk7XG4iXX0=
