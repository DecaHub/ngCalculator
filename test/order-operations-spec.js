const tc = require("./test-constants");

let performAdditions = function (digitBox, numbers, ops) {
	
	describe("Perform operations in right order", function () {
		
		it("2 + 3 * 4 * 10 = 122", function () {
			
			numbers.get("2").click();
			ops.get("add").click();
			numbers.get("3").click();
			ops.get("times").click();
			numbers.get("4").click();
			ops.get("times").click();
			numbers.get("1").click();
			numbers.get("0").click();
			ops.get("equal").click();
			
			expect(digitBox.getText()).toEqual("122");
			
		});
		
		it("2 + 3 * 4 * 10 + should get 122", function () {
			
			numbers.get("2").click();
			ops.get("add").click();
			numbers.get("3").click();
			ops.get("times").click();
			numbers.get("4").click();
			ops.get("times").click();
			numbers.get("1").click();
			numbers.get("0").click();
			ops.get("add").click();
			
			expect(digitBox.getText()).toEqual("122");
			
		});
		
		it("2 + 3 * 4 * 10 - should get 122", function () {
			
			numbers.get("2").click();
			ops.get("add").click();
			numbers.get("3").click();
			ops.get("times").click();
			numbers.get("4").click();
			ops.get("times").click();
			numbers.get("1").click();
			numbers.get("0").click();
			ops.get("minus").click();
			
			expect(digitBox.getText()).toEqual("122");
			
		});
		
		it("2 + 3 * 4 * 10 * should get 120", function () {
			
			numbers.get("2").click();
			ops.get("add").click();
			numbers.get("3").click();
			ops.get("times").click();
			numbers.get("4").click();
			ops.get("times").click();
			numbers.get("1").click();
			numbers.get("0").click();
			ops.get("times").click();
			
			expect(digitBox.getText()).toEqual("120");
			
		});
		
		it("2 + 3 * 4 * 10 - 10 / 2 * 4 = 102", function () {
			
			numbers.get("2").click();
			ops.get("add").click();
			numbers.get("3").click();
			ops.get("times").click();
			numbers.get("4").click();
			ops.get("times").click();
			numbers.get("1").click();
			numbers.get("0").click();
			ops.get("minus").click();
			numbers.get("1").click();
			numbers.get("0").click();
			ops.get("over").click();
			numbers.get("2").click();
			ops.get("times").click();
			numbers.get("4").click();
			ops.get("equal").click();
			
			expect(digitBox.getText()).toEqual("102");
			
		});
		
	});
	
};


describe("ngCalculator: Order of operations", function () {
	
	beforeEach(function () {
		
		browser.get("http://localhost:3000/");
		
	});
	
	performAdditions(tc.digitBox, tc.numbers, tc.ops);
	
});
