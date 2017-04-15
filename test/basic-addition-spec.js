const tc = require("./test-constants");

let performAdditions = function (digitBox, numbers, ops) {
	
	describe("Perform additions", function () {
		
		it("2 + 2 = 4", function () {
			
			numbers.get("2").click();
			ops.get("add").click();
			numbers.get("2").click();
			ops.get("equal").click();
			
			expect(digitBox.getText()).toEqual("4");
			
		});
		
		it("85 + 63 = 148", function () {
			
			numbers.get("8").click();
			numbers.get("5").click();
			ops.get("add").click();
			numbers.get("6").click();
			numbers.get("3").click();
			ops.get("equal").click();
			
			expect(digitBox.getText()).toEqual("148");
			
		});
		
		it("86 + 64 = 150", function () {
			
			numbers.get("8").click();
			numbers.get("6").click();
			ops.get("add").click();
			numbers.get("6").click();
			numbers.get("4").click();
			ops.get("add").click();
			
			expect(digitBox.getText()).toEqual("150");
			
		});
		
		it("85 + 63 + 80 + 62 = 290", function () {
			
			numbers.get("8").click();
			numbers.get("5").click();
			ops.get("add").click();
			numbers.get("6").click();
			numbers.get("3").click();
			ops.get("add").click();
			numbers.get("8").click();
			numbers.get("0").click();
			ops.get("add").click();
			numbers.get("6").click();
			numbers.get("2").click();
			ops.get("add").click();
			
			expect(digitBox.getText()).toEqual("290");
			
		});
		
		it("85 + 63 + 80 + 62 = 290", function () {
			
			numbers.get("8").click();
			numbers.get("5").click();
			ops.get("add").click();
			numbers.get("6").click();
			numbers.get("3").click();
			ops.get("add").click();
			numbers.get("8").click();
			numbers.get("0").click();
			ops.get("add").click();
			numbers.get("6").click();
			numbers.get("2").click();
			ops.get("equal").click();
			
			expect(digitBox.getText()).toEqual("290");
			
		});
		
		it("85 + 63 + 80 + (-)62 = -166", function () {
			
			numbers.get("8").click();
			numbers.get("5").click();
			ops.get("add").click();
			numbers.get("6").click();
			numbers.get("3").click();
			ops.get("add").click();
			numbers.get("8").click();
			numbers.get("0").click();
			ops.get("add").click();
			ops.get("posneg").click();
			numbers.get("6").click();
			numbers.get("2").click();
			ops.get("equal").click();
			
			expect(digitBox.getText()).toEqual("-166");
			
		});
		
		it("(-)85 + (-)63 + (-)80 + (-)62 = -42", function () {
			
			ops.get("posneg").click();
			numbers.get("8").click();
			numbers.get("5").click();
			ops.get("add").click();
			ops.get("posneg").click();
			numbers.get("6").click();
			numbers.get("3").click();
			ops.get("add").click();
			ops.get("posneg").click();
			numbers.get("8").click();
			numbers.get("0").click();
			ops.get("add").click();
			ops.get("posneg").click();
			numbers.get("6").click();
			numbers.get("2").click();
			ops.get("equal").click();
			
			expect(digitBox.getText()).toEqual("-40");
			
		});
		
		it("(-)25 + 25 = 50", function () {
			
			ops.get("posneg").click();
			numbers.get("2").click();
			numbers.get("5").click();
			ops.get("add").click();
			numbers.get("2").click();
			numbers.get("5").click();
			ops.get("equal").click();
			
			expect(digitBox.getText()).toEqual("50");
			
		});
		
		it("25 + (-)25 = 0", function () {
			
			numbers.get("2").click();
			numbers.get("5").click();
			ops.get("add").click();
			ops.get("posneg").click();
			numbers.get("2").click();
			numbers.get("5").click();
			ops.get("equal").click();
			
			expect(digitBox.getText()).toEqual("0");
			
		});
		
	});
	
};


describe("ngCalculator: Basic Addition", function () {
	
	beforeEach(function () {
		
		browser.get("http://localhost:3000/");
		
	});
	
	performAdditions(tc.digitBox, tc.numbers, tc.ops);
	
});
