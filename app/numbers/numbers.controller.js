"use strict";

const NumbersController = function () {
	
	console.log("NumberController called.");

	this.numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
	
};

NumbersController.$inject = [];

angular.module("numbers")
	.controller("NumbersController", NumbersController);
