const tc = require("./test-constants");
const dialer = require("./dialer").dialer;

let performMultiplications = function (digitBox, numbers, ops) {
	
	describe("Perform multiplications", function () {
		
		it("2 * 2 = 4", function () {
			
			dialer("2 * 2 =");
			
			expect(digitBox.getText()).toEqual("4");
			
		});
		
		it("85 * 63 = 5355", function () {

			dialer("85 * 63 = ");
			
			expect(digitBox.getText()).toEqual("5355");

		});

		it("86 * 64 = 5504", function () {

			dialer("86 * 64 =");

			expect(digitBox.getText()).toEqual("5504");

		});

		it("85 * 63 * 80 * 62 = 26560800", function () {

			dialer("85 * 63 * 80 * 62 =");

			expect(digitBox.getText()).toEqual("26560800");

		});

		it("85 * 63 * 80 * 62 = 26560800", function () {

			dialer("85 * 63 * 80 * 62 =");

			expect(digitBox.getText()).toEqual("26560800");

		});

		it("85 * 63 * 80 * (-)62 = -26560800", function () {

			dialer("85 * 63 * 80 * (-)62 =");

			expect(digitBox.getText()).toEqual("-26560800");

		});

		it("(-)85 * (-)63 * (-)80 * (-)62 = -26560800", function () {

			dialer("(-)85 * (-)63 * (-)80 * (-)62 =");

			expect(digitBox.getText()).toEqual("-26560800");

		});

		it("(-)25 * 25 = 625", function () {

			dialer("(-)25 * 25 =");

			expect(digitBox.getText()).toEqual("625");

		});

		it("25 * (-)25 = -625", function () {

			dialer("25 * (-)25 =");

			expect(digitBox.getText()).toEqual("-625");

		});
		
	});
	
};


describe("ngCalculator: Basic Multiplication", function () {
	
	beforeEach(function () {
		
		browser.get("http://localhost:3000/");
		
	});
	
	performMultiplications(tc.digitBox, tc.numbers, tc.ops);
	
});
