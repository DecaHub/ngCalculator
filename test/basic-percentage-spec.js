const tc = require("./test-constants");
const dialer = require("./dialer").dialer;

let performPercentage = function (digitBox, numbers, ops) {
	
	describe("Perform calculations with percentage", function () {
		
		it("2 % gets 0.02", function () {
			
			dialer("2 %");
			
			expect(digitBox.getText()).toEqual("0.02");
			
		});
		
		it("2 % % % gets 0.000002", function () {
			
			dialer("2 % % % ");
			
			expect(digitBox.getText()).toEqual("0.000002");
			
		});
		
		it("85 + 63 % = 138.55", function () {

			dialer("85 + 63 % = ");

			expect(digitBox.getText()).toEqual("138.55");

		});

		it("86 % * 64 = 55.04", function () {

			dialer("86 % * 64 =");

			expect(digitBox.getText()).toEqual("55.04");

		});

		it("85 + 63 % + 80 % + 62 = 311.39", function () {

			dialer("85 + 63 % + 80 % + 62 =");

			expect(digitBox.getText()).toEqual("311.39");

		});
		
		it("85 / 63 % + 80 % / 62 = 2.85714285714286", function () {
			
			dialer("85 / 63 % + 80 % =");
			
			expect(digitBox.getText()).toEqual("2.85714285714286");
			
		});
		
		it("85 / 63 % + 80 % / 62 = 1.60778289810548", function () {

			dialer("85 / 63 % + 80 % / 62 =");

			expect(digitBox.getText()).toEqual("1.60778289810548");

		});
		
		it("% gets 0", function () {
			
			dialer("%");
			
			expect(digitBox.getText()).toEqual("0");
			
		});
		
		

		// it("85 + 63 + 80 + 62 = 290", function () {
		//
		// 	dialer("85 + 63 + 80 + 62 =");
		//
		// 	expect(digitBox.getText()).toEqual("290");
		//
		// });
		//
		// it("85 + 63 + 80 + (-)62 = -166", function () {
		//
		// 	dialer("85 + 63 + 80 + (-)62 =");
		//
		// 	expect(digitBox.getText()).toEqual("-166");
		//
		// });
		//
		// it("(-)85 + (-)63 + (-)80 + (-)62 = -42", function () {
		//
		// 	dialer("(-)85 + (-)63 + (-)80 + (-)62 =");
		//
		// 	expect(digitBox.getText()).toEqual("-40");
		//
		// });
		//
		// it("(-)25 + 25 = 50", function () {
		//
		// 	dialer("(-)25 + 25 =");
		//
		// 	expect(digitBox.getText()).toEqual("50");
		//
		// });
		//
		// it("25 + (-)25 = 0", function () {
		//
		// 	dialer("25 + (-)25 =");
		//
		// 	expect(digitBox.getText()).toEqual("0");
		//
		// });
		
	});
	
};


describe("ngCalculator: Basic Percentage", function () {
	
	beforeEach(function () {
		
		browser.get("http://localhost:3000/");
		
	});
	
	performPercentage(tc.digitBox, tc.numbers, tc.ops);
	
});
