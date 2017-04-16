const tc = require("./test-constants");

let performClearing = function (digitBox, numbers, ops) {
	
	describe("Perform board clearing", function () {
		
		it("2 + 2 = 4 then clear and get 0", function () {
			
			numbers.get("2").click();
			ops.get("add").click();
			numbers.get("2").click();
			ops.get("equal").click();
			ops.get("clear").click();
			
			expect(digitBox.getText()).toEqual("0");
			
		});
		
		it("2 + 2 = 4 then clear, then 5 * 2 = 10", function () {
			
			numbers.get("2").click();
			ops.get("add").click();
			numbers.get("2").click();
			ops.get("equal").click();
			ops.get("clear").click();
			numbers.get("5").click();
			ops.get("times").click();
			numbers.get("2").click();
			ops.get("equal").click();
			
			expect(digitBox.getText()).toEqual("10");
			
		});
		
		
		it("2 + then clear and get 0", function () {
			
			numbers.get("2").click();
			ops.get("add").click();
			ops.get("clear").click();
			
			
			expect(digitBox.getText()).toEqual("0");
			
		});
		
		it("2 + 10 then clear and get 0", function () {
			
			numbers.get("2").click();
			ops.get("add").click();
			numbers.get("1").click();
			numbers.get("0").click();
			ops.get("clear").click();
			
			
			expect(digitBox.getText()).toEqual("0");
			
		});
		
		it("should get 0", function () {
			
			ops.get("clear").click();
			ops.get("clear").click();
			ops.get("clear").click();
			ops.get("clear").click();
			ops.get("clear").click();
			
			
			expect(digitBox.getText()).toEqual("0");
			
		});
		
		it("85 +, clear, then 63", function () {

			numbers.get("8").click();
			numbers.get("5").click();
			ops.get("add").click();
			ops.get("clear").click();
			numbers.get("6").click();
			numbers.get("3").click();

			expect(digitBox.getText()).toEqual("63");

		});
		
	});
	
};


describe("ngCalculator: Clear Board", function () {
	
	beforeEach(function () {
		
		browser.get("http://localhost:3000/");
		
	});
	
	performClearing(tc.digitBox, tc.numbers, tc.ops);
	
});
