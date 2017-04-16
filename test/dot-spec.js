const tc = require("./test-constants");

let useDot = function (digitBox, numbers, ops) {
	
	describe("Use dot", function () {
		
		it(".", function () {
			
			ops.get("dot").click();
			
			expect(digitBox.getText()).toEqual("0.");
			
		});
		
		it(". . . .", function () {
			
			ops.get("dot").click();
			ops.get("dot").click();
			ops.get("dot").click();
			ops.get("dot").click();
			
			expect(digitBox.getText()).toEqual("0.");
			
		});
		
		it("0 . 2 5", function () {
			
			numbers.get("0").click();
			ops.get("dot").click();
			numbers.get("2").click();
			numbers.get("5").click();
			
			expect(digitBox.getText()).toEqual("0.25");
			
		});
		
		it(". 2 5", function () {
			
			ops.get("dot").click();
			numbers.get("2").click();
			numbers.get("5").click();
			
			expect(digitBox.getText()).toEqual("0.25");
			
		});
		
		it(". . . 2 5", function () {
			
			ops.get("dot").click();
			ops.get("dot").click();
			ops.get("dot").click();
			numbers.get("2").click();
			numbers.get("5").click();
			
			expect(digitBox.getText()).toEqual("0.25");
			
		});
		
		it(". 2 5 . . .", function () {
			
			ops.get("dot").click();
			numbers.get("2").click();
			numbers.get("5").click();
			ops.get("dot").click();
			ops.get("dot").click();
			ops.get("dot").click();
			
			expect(digitBox.getText()).toEqual("0.25");
			
		});
		
		it(". 2 5 . 2 5 . 2 5 .", function () {
			
			ops.get("dot").click();
			numbers.get("2").click();
			numbers.get("5").click();
			ops.get("dot").click();
			numbers.get("2").click();
			numbers.get("5").click();
			ops.get("dot").click();
			numbers.get("2").click();
			numbers.get("5").click();
			ops.get("dot").click();
			
			expect(digitBox.getText()).toEqual("0.252525");
			
		});
		
		it(". 2 5 clear . 2 5 clear . 2 5 .", function () {
			
			ops.get("dot").click();
			numbers.get("2").click();
			numbers.get("5").click();
			ops.get("clear").click();
			ops.get("dot").click();
			numbers.get("2").click();
			numbers.get("5").click();
			ops.get("clear").click();
			ops.get("dot").click();
			numbers.get("2").click();
			numbers.get("5").click();
			ops.get("dot").click();
			
			expect(digitBox.getText()).toEqual("0.25");
			
		});
		
		it(".25 + .85 = 1.1", function () {
			
			ops.get("dot").click();
			numbers.get("2").click();
			numbers.get("5").click();
			ops.get("add").click();
			ops.get("dot").click();
			numbers.get("8").click();
			numbers.get("5").click();
			ops.get("equal").click();
			
			expect(digitBox.getText()).toEqual("1.1");
			
		});
		
		it(".25 + .85 - 9.97 * .2 = -0.894", function () {
			
			ops.get("dot").click();
			numbers.get("2").click();
			numbers.get("5").click();
			ops.get("add").click();
			ops.get("dot").click();
			numbers.get("8").click();
			numbers.get("5").click();
			ops.get("minus").click();
			numbers.get("9").click();
			ops.get("dot").click();
			numbers.get("9").click();
			numbers.get("7").click();
			ops.get("times").click();
			ops.get("dot").click();
			numbers.get("2").click();
			ops.get("equal").click();
			
			expect(digitBox.getText()).toEqual("-0.894");
			
		});
		
	});
	
};


describe("ngCalculator: Using the dot", function () {
	
	beforeEach(function () {
		
		browser.get("http://localhost:3000/");
		
	});
	
	useDot(tc.digitBox, tc.numbers, tc.ops);
	
});
