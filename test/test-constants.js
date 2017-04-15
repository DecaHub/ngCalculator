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
ops.set("equal", element(by.id("resultant")));
ops.set("posneg", element(by.id("posneg")));

module.exports = {
	
	digitBox: element(by.id('digitBox')),
	numbers,
	ops
	
};