let tc = require("./test-constants");
const dialer = require("./dialer").dialer;

let performSubtraction = function (digitBox, numbers, ops) {
	
	describe("Perform subtractions", function () {
		
		it("2 - 2 = 0", function () {
			
			dialer("2 - 2 =");
			
			expect(digitBox.getText()).toEqual("0");
			
		});
		
		it("85 - 63 = 22", function () {

			dialer("85 - 63 =");

			expect(digitBox.getText()).toEqual("22");

		});

		it("86 - 64 = 150", function () {

			dialer("86 - 64 =");

			expect(digitBox.getText()).toEqual("22");

		});

		it("85 - 63 - 80 - 62 = -120", function () {

			dialer("85 - 63 - 80 - 62 =");

			expect(digitBox.getText()).toEqual("-120");

		});

		it("85 - 63 - 80 - 62 = -120", function () {

			dialer("85 - 63 - 80 - 62 =");

			expect(digitBox.getText()).toEqual("-120");

		});

		it("85 - 63 - 80 - (-)62 = -4", function () {

			dialer("85 - 63 - 80 - (-)62 =");

			expect(digitBox.getText()).toEqual("-4");

		});

		it("(-)85 - (-)63 - (-)80 - (-)62 = -128", function () {

			dialer("(-)85 - (-)63 - (-)80 - (-)62 =");

			expect(digitBox.getText()).toEqual("-130");

		});

		it("(-)25 - 25 = 0", function () {

			dialer("(-)25 - 25 = 0");

			expect(digitBox.getText()).toEqual("0");

		});

		it("25 - (-)25 = -50", function () {

			dialer("25 - (-)25 =");
			
			expect(digitBox.getText()).toEqual("-50");

		});
		
	});
	
};


describe("ngCalculator: Basic Subtraction", function () {
	
	beforeEach(function () {
		
		browser.get("http://localhost:3000/");
		
	});
	
	performSubtraction(tc.digitBox, tc.numbers, tc.ops);
	
});