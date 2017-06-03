const tc = require("./test-constants");
const dialer = require("./dialer").dialer;

let performDivisions = function (digitBox, numbers, ops) {
	
	describe("Perform divisions", function () {
		
		it("2 / 2 = 1", function () {
			
			dialer("2 / 2 =");
			
			expect(digitBox.getText()).toEqual("1");
			
		});
		
		it("85 / 63 = 1.34920634920635", function () {

			dialer("85 / 63 =");

			expect(digitBox.getText()).toEqual("1.34920634920635");

		});

		it("86 / 64 = 1.34375", function () {

			dialer("86 / 64 =");

			expect(digitBox.getText()).toEqual("1.34375");

		});

		it("85 / 63 / 80 / 62 = 0.00027201740911", function () {

			dialer("85 / 63 / 80 / 62 =");

			expect(digitBox.getText()).toEqual("0.00027201740911");

		});

		it("85 / 63 / 80 / 62 = 0.00027201740911", function () {

			dialer("85 / 63 / 80 / 62 =");

			expect(digitBox.getText()).toEqual("0.00027201740911");

		});

		it("85 / 63 / 80 / (-)62 = -0.00027201740911", function () {

			dialer("85 / 63 / 80 / (-)62 =");

			expect(digitBox.getText()).toEqual("-0.00027201740911");

		});

		it("(-)85 / (-)63 / (-)80 / (-)62 = -0.00027201740911", function () {

			dialer("(-)85 / (-)63 / (-)80 / (-)62 =");

			expect(digitBox.getText()).toEqual("-0.00027201740911");

		});

		it("(-)25 / 25 = 1", function () {

			dialer("(-)25 / 25 =");

			expect(digitBox.getText()).toEqual("1");

		});

		it("25 / (-)25 = -1", function () {

			dialer("25 / (-)25 =");

			expect(digitBox.getText()).toEqual("-1");

		});
		
		it("25 / 0 = Infinity", function () {
			
			dialer("25 / 0 =");
			
			expect(digitBox.getText()).toEqual("Infinity");
			
		});
		
		it("2 + 89 * 3 - 100 / 25 / 0 = -Infinity", function () {
			
			dialer("2 + 89 * 3 - 100 / 25 / 0 =");
			
			expect(digitBox.getText()).toEqual("-Infinity");
			
		});

	});
	
};


describe("ngCalculator: Basic Division", function () {
	
	beforeEach(function () {
		
		browser.get("http://localhost:8080/");
		
	});
	
	performDivisions(tc.digitBox, tc.numbers, tc.ops);
	
});
