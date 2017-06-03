const tc = require("./test-constants");
const dialer = require("./dialer").dialer;

console.log("Basic Input Test");

let individualNumericButtons = function (digitBox) {
	
	describe("Pressing individual numeric buttons", function () {
		
		for (let i = 0; i < 10; i++) {
			
			let num = i.toString();
			
			it(`should press ${num} and get ${num}`, function () {
				
				dialer(num);
				
				expect(digitBox.getText()).toEqual(num);
				
			});
			
		}
		
	});
	
};

let sequenceNumericButtons = function (digitBox) {
	
	describe("Pressing sequence of numeric buttons", function () {
		
		it(`should create the number 157 in the display`, function () {
			
			let sequence = [1, 5, 7];
			
			dialer("157");
			
			expect(digitBox.getText()).toEqual("157");
			
		});
		
		it(`should create the number 65019 in the display`, function () {
			
			dialer("65019");
			
			expect(digitBox.getText()).toEqual("65019");
			
		});
		
		it(`should create the number 627154535019 in the display`, function () {
			
			dialer("627154535019");
			
			expect(digitBox.getText()).toEqual("627154535019");
			
		});
		
		it(`should create the number -157 in the display`, function () {
			
			dialer("157(-)");
			
			expect(digitBox.getText()).toEqual("-157");
			
		});
		
		it(`should create the number -157 in the display`, function () {
			
			dialer("1(-)57");

			expect(digitBox.getText()).toEqual("-157");

		});
		
		it(`should create the number -157 in the display`, function () {
			
			dialer("15(-)7");
			
			expect(digitBox.getText()).toEqual("-157");
			
		});

		it(`should create the number 157 in the display`, function () {
			
			dialer("157(-)(+)");
			
			expect(digitBox.getText()).toEqual("157");

		});
		
	})
	
};


describe("ngCalculator: Basic Input", function () {
	
	beforeEach(function () {
		
		browser.get("http://localhost:8080/");
		
	});
	
	individualNumericButtons(tc.digitBox, tc.numbers);
	sequenceNumericButtons(tc.digitBox);
	
});
