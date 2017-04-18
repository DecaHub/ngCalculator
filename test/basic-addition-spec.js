const tc = require("./test-constants");
const dialer = require("./dialer").dialer;

let performAdditions = function (digitBox, numbers, ops) {
	
	describe("Perform additions", function () {
		
		it("2 + 2 = 4", function () {
			
		dialer("2 + 2 =");
			
			expect(digitBox.getText()).toEqual("4");
			
		});
		
		it("85 + 63 = 148", function () {
			
			dialer("85 + 63 =");
			
			expect(digitBox.getText()).toEqual("148");
			
		});
		
		it("86 + 64 = 150", function () {
			
			dialer("86 + 64 =");
			
			expect(digitBox.getText()).toEqual("150");
			
		});
		
		it("85 + 63 + 80 + 62 = 290", function () {
			
			dialer("85 + 63 + 80 + 62 =");
			
			expect(digitBox.getText()).toEqual("290");
			
		});
		
		it("85 + 63 + 80 + 62 = 290", function () {
			
			dialer("85 + 63 + 80 + 62 =");
			
			expect(digitBox.getText()).toEqual("290");
			
		});
		
		it("85 + 63 + 80 + (-)62 = -166", function () {
			
			dialer("85 + 63 + 80 + (-)62 =");
			
			expect(digitBox.getText()).toEqual("-166");
			
		});
		
		it("(-)85 + (-)63 + (-)80 + (-)62 = -42", function () {
			
			dialer("(-)85 + (-)63 + (-)80 + (-)62 =");
			
			expect(digitBox.getText()).toEqual("-40");
			
		});
		
		it("(-)25 + 25 = 50", function () {
			
			dialer("(-)25 + 25 =");
			
			expect(digitBox.getText()).toEqual("50");
			
		});
		
		it("25 + (-)25 = 0", function () {
			
			dialer("25 + (-)25 =");
			
			expect(digitBox.getText()).toEqual("0");
			
		});
		
	});
	
};


describe("ngCalculator: Basic Addition", function () {
	
	beforeEach(function () {
		
		browser.get("http://localhost:3000/");
		
	});
	
	performAdditions(tc.digitBox, tc.numbers, tc.ops);
	
});
