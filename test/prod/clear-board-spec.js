const tc = require("./test-constants");
const dialer = require("./dialer").dialer;

let performClearing = function (digitBox, numbers, ops) {
	
	describe("Perform board clearing", function () {
		
		it("2 + 2 = 4 then clear and get 0", function () {
			
			dialer("2 + 2 = 4 C");
			
			expect(digitBox.getText()).toEqual("0");
			
		});
		
		it("2 + 2 = 4 then clear, then 5 * 2 = 10", function () {
			
			dialer("2 + 2 = 4 C 5 * 2 = ");
			
			expect(digitBox.getText()).toEqual("10");
			
		});
		
		
		it("2 + then clear and get 0", function () {
			
			dialer("2 + C ");
			
			expect(digitBox.getText()).toEqual("0");
			
		});
		
		it("2 + 10 then clear and get 0", function () {
			
			dialer("2 + 10 C");
			
			
			expect(digitBox.getText()).toEqual("0");
			
		});
		
		it("should get 0", function () {
			
			dialer("CCCC");
			
			expect(digitBox.getText()).toEqual("0");
			
		});
		
		it("85 +, clear, then 63", function () {

			dialer("85 + C 63");

			expect(digitBox.getText()).toEqual("63");

		});
		
	});
	
};


describe("ngCalculator: Clear Board", function () {
	
	beforeEach(function () {
		
		browser.get("http://localhost:8080/");
		
	});
	
	performClearing(tc.digitBox, tc.numbers, tc.ops);
	
});
