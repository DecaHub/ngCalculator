"use strict";

const NumbersController = function () {
	
	console.log("NumberController called.");

	this.numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	
};

NumbersController.$inject = [];

angular.module("numbers")
	.controller("NumbersController", NumbersController);
