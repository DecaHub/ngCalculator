const dialer = require("./dialer").dialer;
const tc = require("./test-constants");

let performComplexOps = function (digitBox, numbers, ops) {
	
	describe("Perform complex operations", function () {
		
		it("2 + 2 = 4", function () {

			dialer("2 + 2 = 4");

			expect(digitBox.getText()).toEqual("4");

		});

		it(".25 + .85 - 9.97 * .2 = -0.894 = -0.894", function () {

			dialer(".25 + .85 - 9.97 * .2 =");

			expect(digitBox.getText()).toEqual("-0.894");

		});

		it("85.44 * 6244 + 32144 / 85244 / 96 +  should give 533487.36392794018738", function () {

			dialer("85.44 * 6244 + 32144 / 85244 / 96 +");

			expect(digitBox.getText()).toEqual("533487.36392794018738");

		});
		
		
		it("85.44 * 6244 + 32144 / 85244 / 96 + 22455 * 6 * 52 / 852 + 3695 = 545405.32167441906062", function () {

			dialer("85.44 * 6244 + 32144 / 85244 / 96 + 22455 * 6 * 52 / 852 + 3695 =");

			expect(digitBox.getText()).toEqual("545405.32167441906062");

		});
		
	});
	
};


describe("ngCalculator: Complex Operations", function () {
	
	beforeEach(function () {
		
		browser.get("http://localhost:8080/");
		
	});
	
	performComplexOps(tc.digitBox);
	
});
