"use strict";

let numbers = new Map();
let ops = new Map();

let numbersStrings = [
	
	"zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"

];

for (let i = 0; i < numbersStrings.length; i++) {
	
	numbers.set(i.toString(), element(by.id(i.toString())));
	
}

ops.set("add", element(by.id("addition")));
ops.set("minus", element(by.id("subtraction")));
ops.set("times", element(by.id("multiplication")));
ops.set("over", element(by.id("division")));
ops.set("equal", element(by.id("resultant")));

ops.set("clear", element(by.id("clear")));
ops.set("posneg", element(by.id("posneg")));
ops.set("percentage", element(by.id("percentage")));

module.exports = {
	
	digitBox: element(by.id('digitBox')),
	numbers,
	ops
	
};