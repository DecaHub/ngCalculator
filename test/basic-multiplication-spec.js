const tc = require("./test-constants");

let performMultiplications = function (digitBox, numbers, ops) {
	
	describe("Perform multiplications", function () {
		
		it("2 * 2 = 4", function () {
			
			numbers.get("2").click();
			ops.get("times").click();
			numbers.get("2").click();
			ops.get("equal").click();
			
			expect(digitBox.getText()).toEqual("4");
			
		});
		
		it("85 * 63 = 5355", function () {

			numbers.get("8").click();
			numbers.get("5").click();
			ops.get("times").click();
			numbers.get("6").click();
			numbers.get("3").click();
			ops.get("equal").click();

			expect(digitBox.getText()).toEqual("5355");

		});

		it("86 * 64 = 5504", function () {

			numbers.get("8").click();
			numbers.get("6").click();
			ops.get("times").click();
			numbers.get("6").click();
			numbers.get("4").click();
			ops.get("add").click();

			expect(digitBox.getText()).toEqual("5504");

		});

		it("85 * 63 * 80 * 62 = 26560800", function () {

			numbers.get("8").click();
			numbers.get("5").click();
			ops.get("times").click();
			numbers.get("6").click();
			numbers.get("3").click();
			ops.get("times").click();
			numbers.get("8").click();
			numbers.get("0").click();
			ops.get("times").click();
			numbers.get("6").click();
			numbers.get("2").click();
			ops.get("times").click();

			expect(digitBox.getText()).toEqual("26560800");

		});

		it("85 * 63 * 80 * 62 = 26560800", function () {

			numbers.get("8").click();
			numbers.get("5").click();
			ops.get("times").click();
			numbers.get("6").click();
			numbers.get("3").click();
			ops.get("times").click();
			numbers.get("8").click();
			numbers.get("0").click();
			ops.get("times").click();
			numbers.get("6").click();
			numbers.get("2").click();
			ops.get("equal").click();

			expect(digitBox.getText()).toEqual("26560800");

		});

		it("85 * 63 * 80 * (-)62 = -26560800", function () {

			numbers.get("8").click();
			numbers.get("5").click();
			ops.get("times").click();
			numbers.get("6").click();
			numbers.get("3").click();
			ops.get("times").click();
			numbers.get("8").click();
			numbers.get("0").click();
			ops.get("times").click();
			ops.get("posneg").click();
			numbers.get("6").click();
			numbers.get("2").click();
			ops.get("equal").click();

			expect(digitBox.getText()).toEqual("-26560800");

		});

		it("(-)85 * (-)63 * (-)80 * (-)62 = -26560800", function () {

			ops.get("posneg").click();
			numbers.get("8").click();
			numbers.get("5").click();
			ops.get("times").click();
			ops.get("posneg").click();
			numbers.get("6").click();
			numbers.get("3").click();
			ops.get("times").click();
			ops.get("posneg").click();
			numbers.get("8").click();
			numbers.get("0").click();
			ops.get("times").click();
			ops.get("posneg").click();
			numbers.get("6").click();
			numbers.get("2").click();
			ops.get("equal").click();

			expect(digitBox.getText()).toEqual("-26560800");

		});

		it("(-)25 * 25 = 625", function () {

			ops.get("posneg").click();
			numbers.get("2").click();
			numbers.get("5").click();
			ops.get("times").click();
			numbers.get("2").click();
			numbers.get("5").click();
			ops.get("equal").click();

			expect(digitBox.getText()).toEqual("625");

		});

		it("25 * (-)25 = -625", function () {

			numbers.get("2").click();
			numbers.get("5").click();
			ops.get("times").click();
			ops.get("posneg").click();
			numbers.get("2").click();
			numbers.get("5").click();
			ops.get("equal").click();

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
