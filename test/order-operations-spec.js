const tc = require("./test-constants");
const dialer = require("./dialer").dialer;

let performAdditions = function (digitBox, numbers, ops) {
	
	describe("Perform operations in right order", function () {
		
		it("2 + 3 * 4 * 10 = 122", function () {
			
			dialer("2 + 3 * 4 * 10 =");
			
			expect(digitBox.getText()).toEqual("122");
			
		});
		
		it("2 + 3 * 4 * 10 + should get 122", function () {
			
			dialer("2 + 3 * 4 * 10 +");
			
			expect(digitBox.getText()).toEqual("122");
			
		});
		
		it("2 + 3 * 4 * 10 - should get 122", function () {
			
			dialer("2 + 3 * 4 * 10 -");
			
			expect(digitBox.getText()).toEqual("122");
			
		});
		
		it("2 + 3 * 4 * 10 * should get 120", function () {
			
			dialer("2 + 3 * 4 * 10 *");
			
			expect(digitBox.getText()).toEqual("120");
			
		});
		
		it("2 + 3 * 4 * 10 - 10 / 2 * 4 = 102", function () {
			
			dialer("2 + 3 * 4 * 10 - 10 / 2 * 4 =");
			
			expect(digitBox.getText()).toEqual("102");
			
		});
		
	});
	
};


describe("ngCalculator: Order of operations", function () {
	
	beforeEach(function () {
		
		browser.get("http://localhost:3000/");
		
	});
	
	performAdditions(tc.digitBox, tc.numbers, tc.ops);
	
});
