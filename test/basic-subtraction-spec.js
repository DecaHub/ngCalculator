let tc = require("./test-constants");


let performSubtraction = function (digitBox, numbers, ops) {
	
	describe("Perform subtractions", function () {
		
		it("2 - 2 = 0", function () {
			
			numbers.get("2").click();
			ops.get("minus").click();
			numbers.get("2").click();
			ops.get("equal").click();
			
			expect(digitBox.getText()).toEqual("0");
			
		});
		
		it("85 - 63 = 22", function () {

			numbers.get("8").click();
			numbers.get("5").click();
			ops.get("minus").click();
			numbers.get("6").click();
			numbers.get("3").click();
			ops.get("equal").click();

			expect(digitBox.getText()).toEqual("22");

		});

		it("86 - 64 = 150", function () {

			numbers.get("8").click();
			numbers.get("6").click();
			ops.get("minus").click();
			numbers.get("6").click();
			numbers.get("4").click();
			ops.get("minus").click();

			expect(digitBox.getText()).toEqual("22");

		});

		it("85 - 63 - 80 - 62 = -120", function () {

			numbers.get("8").click();
			numbers.get("5").click();
			ops.get("minus").click();
			numbers.get("6").click();
			numbers.get("3").click();
			ops.get("minus").click();
			numbers.get("8").click();
			numbers.get("0").click();
			ops.get("minus").click();
			numbers.get("6").click();
			numbers.get("2").click();
			ops.get("minus").click();

			expect(digitBox.getText()).toEqual("-120");

		});

		it("85 - 63 - 80 - 62 = -120", function () {

			numbers.get("8").click();
			numbers.get("5").click();
			ops.get("minus").click();
			numbers.get("6").click();
			numbers.get("3").click();
			ops.get("minus").click();
			numbers.get("8").click();
			numbers.get("0").click();
			ops.get("minus").click();
			numbers.get("6").click();
			numbers.get("2").click();
			ops.get("equal").click();

			expect(digitBox.getText()).toEqual("-120");

		});

		it("85 - 63 - 80 - (-)62 = -4", function () {

			numbers.get("8").click();
			numbers.get("5").click();
			ops.get("minus").click();
			numbers.get("6").click();
			numbers.get("3").click();
			ops.get("minus").click();
			numbers.get("8").click();
			numbers.get("0").click();
			ops.get("minus").click();
			ops.get("posneg").click();
			numbers.get("6").click();
			numbers.get("2").click();
			ops.get("equal").click();

			expect(digitBox.getText()).toEqual("-4");

		});

		it("(-)85 - (-)63 - (-)80 - (-)62 = -128", function () {

			ops.get("posneg").click();
			numbers.get("8").click();
			numbers.get("5").click();
			ops.get("minus").click();
			ops.get("posneg").click();
			numbers.get("6").click();
			numbers.get("3").click();
			ops.get("minus").click();
			ops.get("posneg").click();
			numbers.get("8").click();
			numbers.get("0").click();
			ops.get("minus").click();
			ops.get("posneg").click();
			numbers.get("6").click();
			numbers.get("2").click();
			ops.get("equal").click();

			expect(digitBox.getText()).toEqual("-130");

		});

		it("(-)25 - 25 = 0", function () {

			ops.get("posneg").click();
			numbers.get("2").click();
			numbers.get("5").click();
			ops.get("minus").click();
			numbers.get("2").click();
			numbers.get("5").click();
			ops.get("equal").click();

			expect(digitBox.getText()).toEqual("0");

		});

		it("25 - (-)25 = -50", function () {

			numbers.get("2").click();
			numbers.get("5").click();
			ops.get("minus").click();
			ops.get("posneg").click();
			numbers.get("2").click();
			numbers.get("5").click();
			ops.get("equal").click();

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