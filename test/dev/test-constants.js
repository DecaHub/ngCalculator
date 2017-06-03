"use strict";

let numbers = new Map();
let ops = new Map();

let numbersStrings = [
	
	"zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"

];

for (let i = 0; i < numbersStrings.length; i++) {
	
	numbers.set(i.toString(), element(by.id(i.toString())));
	
}

ops.set(".", element(by.id("dot")));

ops.set("+", element(by.id("addition")));
ops.set("-", element(by.id("subtraction")));
ops.set("*", element(by.id("multiplication")));
ops.set("/", element(by.id("division")));
ops.set("=", element(by.id("resultant")));

ops.set("C", element(by.id("clear")));
ops.set("(+)", element(by.id("posneg")));
ops.set("(-)", element(by.id("posneg")));
ops.set("%", element(by.id("percentage")));

module.exports = {
	
	digitBox: element(by.id('digitBox')),
	numbers,
	ops
	
};