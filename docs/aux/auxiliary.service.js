"use strict";

angular.module("auxiliary").service("AuxiliaryService", function () {

	var createAuxData = function createAuxData(_symbol, _label) {

		return {

			symbol: _symbol,
			label: _label

		};
	};

	var _aux = [];

	_aux.push(createAuxData("C", "clear"));
	_aux.push(createAuxData("+/−", "posneg"));
	_aux.push(createAuxData("%", "percentage"));

	var _dot = createAuxData(".", "dot");

	this.getAux = function () {

		return _aux;
	};

	this.getDot = function () {

		return _dot;
	};
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1eC9hdXhpbGlhcnkuc2VydmljZS5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwic2VydmljZSIsImNyZWF0ZUF1eERhdGEiLCJfc3ltYm9sIiwiX2xhYmVsIiwic3ltYm9sIiwibGFiZWwiLCJfYXV4IiwicHVzaCIsIl9kb3QiLCJnZXRBdXgiLCJnZXREb3QiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxRQUFRQyxNQUFSLENBQWUsV0FBZixFQUNFQyxPQURGLENBQ1Usa0JBRFYsRUFDOEIsWUFBWTs7QUFFeEMsS0FBTUMsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFVQyxPQUFWLEVBQW1CQyxNQUFuQixFQUEyQjs7QUFFaEQsU0FBTzs7QUFFTkMsV0FBUUYsT0FGRjtBQUdORyxVQUFPRjs7QUFIRCxHQUFQO0FBT0EsRUFURDs7QUFXQSxLQUFNRyxPQUFPLEVBQWI7O0FBRUFBLE1BQUtDLElBQUwsQ0FBVU4sY0FBYyxHQUFkLEVBQW1CLE9BQW5CLENBQVY7QUFDQUssTUFBS0MsSUFBTCxDQUFVTixjQUFjLEtBQWQsRUFBcUIsUUFBckIsQ0FBVjtBQUNBSyxNQUFLQyxJQUFMLENBQVVOLGNBQWMsR0FBZCxFQUFtQixZQUFuQixDQUFWOztBQUVBLEtBQU1PLE9BQU9QLGNBQWMsR0FBZCxFQUFtQixLQUFuQixDQUFiOztBQUVBLE1BQUtRLE1BQUwsR0FBYyxZQUFZOztBQUV6QixTQUFPSCxJQUFQO0FBRUEsRUFKRDs7QUFNQSxNQUFLSSxNQUFMLEdBQWMsWUFBWTs7QUFFekIsU0FBT0YsSUFBUDtBQUVBLEVBSkQ7QUFNQSxDQWxDRiIsImZpbGUiOiJhdXgvYXV4aWxpYXJ5LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuYW5ndWxhci5tb2R1bGUoXCJhdXhpbGlhcnlcIilcblx0LnNlcnZpY2UoXCJBdXhpbGlhcnlTZXJ2aWNlXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRcblx0XHRjb25zdCBjcmVhdGVBdXhEYXRhID0gZnVuY3Rpb24gKF9zeW1ib2wsIF9sYWJlbCkge1xuXHRcdFx0XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcblx0XHRcdFx0c3ltYm9sOiBfc3ltYm9sLFxuXHRcdFx0XHRsYWJlbDogX2xhYmVsXG5cdFx0XHRcdFxuXHRcdFx0fTtcblx0XHRcdFxuXHRcdH07XG5cdFx0XG5cdFx0Y29uc3QgX2F1eCA9IFtdO1xuXHRcdFxuXHRcdF9hdXgucHVzaChjcmVhdGVBdXhEYXRhKFwiQ1wiLCBcImNsZWFyXCIpKTtcblx0XHRfYXV4LnB1c2goY3JlYXRlQXV4RGF0YShcIisv4oiSXCIsIFwicG9zbmVnXCIpKTtcblx0XHRfYXV4LnB1c2goY3JlYXRlQXV4RGF0YShcIiVcIiwgXCJwZXJjZW50YWdlXCIpKTtcblx0XHRcblx0XHRjb25zdCBfZG90ID0gY3JlYXRlQXV4RGF0YShcIi5cIiwgXCJkb3RcIik7XG5cdFx0XG5cdFx0dGhpcy5nZXRBdXggPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcblx0XHRcdHJldHVybiBfYXV4O1xuXHRcdFx0XG5cdFx0fTtcblx0XHRcblx0XHR0aGlzLmdldERvdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFxuXHRcdFx0cmV0dXJuIF9kb3Q7XG5cdFx0XHRcblx0XHR9O1xuXHRcdFxuXHR9KTtcbiJdfQ==