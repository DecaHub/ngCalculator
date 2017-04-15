const tc = require("./test-constants");

let performDivisions = function (digitBox, numbers, ops) {
	
	describe("Perform divisions", function () {
		
		it("2 / 2 = 1", function () {
			
			numbers.get("2").click();
			ops.get("over").click();
			numbers.get("2").click();
			ops.get("equal").click();
			
			expect(digitBox.getText()).toEqual("1");
			
		});
		
		it("85 / 63 = 1.34920634920635", function () {

			numbers.get("8").click();
			numbers.get("5").click();
			ops.get("over").click();
			numbers.get("6").click();
			numbers.get("3").click();
			ops.get("equal").click();

			expect(digitBox.getText()).toEqual("1.34920634920635");

		});

		it("86 / 64 = 1.34375", function () {

			numbers.get("8").click();
			numbers.get("6").click();
			ops.get("over").click();
			numbers.get("6").click();
			numbers.get("4").click();
			ops.get("add").click();

			expect(digitBox.getText()).toEqual("1.34375");

		});

		it("85 / 63 / 80 / 62 = 0.00027201740911", function () {

			numbers.get("8").click();
			numbers.get("5").click();
			ops.get("over").click();
			numbers.get("6").click();
			numbers.get("3").click();
			ops.get("over").click();
			numbers.get("8").click();
			numbers.get("0").click();
			ops.get("over").click();
			numbers.get("6").click();
			numbers.get("2").click();
			ops.get("over").click();

			expect(digitBox.getText()).toEqual("0.00027201740911");

		});

		it("85 / 63 / 80 / 62 = 0.00027201740911", function () {

			numbers.get("8").click();
			numbers.get("5").click();
			ops.get("over").click();
			numbers.get("6").click();
			numbers.get("3").click();
			ops.get("over").click();
			numbers.get("8").click();
			numbers.get("0").click();
			ops.get("over").click();
			numbers.get("6").click();
			numbers.get("2").click();
			ops.get("equal").click();

			expect(digitBox.getText()).toEqual("0.00027201740911");

		});

		it("85 / 63 / 80 / (-)62 = -0.00027201740911", function () {

			numbers.get("8").click();
			numbers.get("5").click();
			ops.get("over").click();
			numbers.get("6").click();
			numbers.get("3").click();
			ops.get("over").click();
			numbers.get("8").click();
			numbers.get("0").click();
			ops.get("over").click();
			ops.get("posneg").click();
			numbers.get("6").click();
			numbers.get("2").click();
			ops.get("equal").click();

			expect(digitBox.getText()).toEqual("-0.00027201740911");

		});

		it("(-)85 / (-)63 / (-)80 / (-)62 = -0.00027201740911", function () {

			ops.get("posneg").click();
			numbers.get("8").click();
			numbers.get("5").click();
			ops.get("over").click();
			ops.get("posneg").click();
			numbers.get("6").click();
			numbers.get("3").click();
			ops.get("over").click();
			ops.get("posneg").click();
			numbers.get("8").click();
			numbers.get("0").click();
			ops.get("over").click();
			ops.get("posneg").click();
			numbers.get("6").click();
			numbers.get("2").click();
			ops.get("equal").click();

			expect(digitBox.getText()).toEqual("-0.00027201740911");

		});

		it("(-)25 / 25 = 1", function () {

			ops.get("posneg").click();
			numbers.get("2").click();
			numbers.get("5").click();
			ops.get("over").click();
			numbers.get("2").click();
			numbers.get("5").click();
			ops.get("equal").click();

			expect(digitBox.getText()).toEqual("1");

		});

		it("25 / (-)25 = -1", function () {

			numbers.get("2").click();
			numbers.get("5").click();
			ops.get("over").click();
			ops.get("posneg").click();
			numbers.get("2").click();
			numbers.get("5").click();
			ops.get("equal").click();

			expect(digitBox.getText()).toEqual("-1");

		});

	});
	
};


describe("ngCalculator: Basic Division", function () {
	
	beforeEach(function () {
		
		browser.get("http://localhost:3000/");
		
	});
	
	performDivisions(tc.digitBox, tc.numbers, tc.ops);
	
});
