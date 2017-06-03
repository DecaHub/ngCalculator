const tc = require("./test-constants");
const dialer = require("./dialer").dialer;


let useDot = function (digitBox, numbers, ops) {
	
	describe("Use dot", function () {
		
		it(".", function () {
			
			dialer(".");
			
			expect(digitBox.getText()).toEqual("0.");
			
		});
		
		it(". . . .", function () {
			
			dialer(". . . .");
			
			expect(digitBox.getText()).toEqual("0.");
			
		});
		
		it("0 . 2 5", function () {
			
			dialer("0 . 2 5");
			
			expect(digitBox.getText()).toEqual("0.25");
			
		});
		
		it(". 2 5", function () {
			
			dialer(". 2 5");
			
			expect(digitBox.getText()).toEqual("0.25");
			
		});
		
		it(". . . 2 5", function () {
			
			dialer(". . . 2 5");
			
			expect(digitBox.getText()).toEqual("0.25");
			
		});
		
		it(". 2 5 . . .", function () {
			
			dialer(". 2 5 . . .");
			
			expect(digitBox.getText()).toEqual("0.25");
			
		});
		
		it(". 2 5 . 2 5 . 2 5 .", function () {
			
			dialer(". 2 5 . 2 5 . 2 5 .");
			
			expect(digitBox.getText()).toEqual("0.252525");
			
		});
		
		it(". 2 5 clear . 2 5 clear . 2 5 .", function () {
			
			dialer(". 2 5 C . 2 5 C . 2 5 .");
			
			expect(digitBox.getText()).toEqual("0.25");
			
		});
		
		it(".25 + .85 = 1.1", function () {
			
			dialer(".25 + .85 = ");
			
			expect(digitBox.getText()).toEqual("1.1");
			
		});
		
		it(".25 + .85 - 9.97 * .2 = -0.894", function () {
			
			dialer(".25 + .85 - 9.97 * .2 =");
			
			expect(digitBox.getText()).toEqual("-0.894");
			
		});
		
	});
	
};


describe("ngCalculator: Using the dot", function () {
	
	beforeEach(function () {
		
		browser.get("https://decahub.github.io/ngCalculator/");
		
	});
	
	useDot(tc.digitBox, tc.numbers, tc.ops);
	
});
