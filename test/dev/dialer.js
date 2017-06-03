"use strict";

let tc = require("./test-constants");

exports.dialer = function (opString) {
	
	let cleanedOpString = opString.replace(/[ ]+/g, "");
	
	let gashapon = cleanedOpString.split("");
	
	while (gashapon.length > 0) {
		
		let char = gashapon.shift();
		
		if (isNaN(char)) {
			
			if (char === "(") {
				
				char += gashapon.shift();
				char += gashapon.shift();
				
			}
			
			tc.ops.get(char).click();
			
		} else {
			
			tc.numbers.get(char).click();
			
		}
		
	}
	
};
