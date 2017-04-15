const tc = require("./test-constants");

console.log("Basic Input Test");

let individualNumericButtons = function (digitBox, numbers) {
	
	describe("Pressing individual numeric buttons", function () {
		
		for (let i = 0; i < numbers.size; i++) {
			
			let num = i.toString();
			
			it(`should press ${num} and get ${num}`, function () {
				
				numbers.get(num).click();
				
				expect(digitBox.getText()).toEqual(num);
				
			});
			
		}
		
	});
	
};

let sequenceNumericButtons = function (digitBox) {
	
	describe("Pressing sequence of numeric buttons", function () {
		
		it(`should create the number 157 in the display`, function () {
			
			let sequence = [1, 5, 7];
			
			for (let i = 0; i < sequence.length; i++) {
				
				let num = sequence[i].toString();
				
				element(by.id(num)).click();
				
			}
			
			expect(digitBox.getText()).toEqual("157");
			
		});
		
		it(`should create the number 65019 in the display`, function () {
			
			let sequence = [6, 5, 0, 1, 9];
			
			for (let i = 0; i < sequence.length; i++) {
				
				let num = sequence[i].toString();
				
				element(by.id(num)).click();
				
			}
			
			expect(digitBox.getText()).toEqual("65019");
			
		});
		
		it(`should create the number 627154535019 in the display`, function () {
			
			let sequence = [6, 2, 7, 1, 5, 4, 5, 3, 5, 0, 1, 9];
			
			for (let i = 0; i < sequence.length; i++) {
				
				let num = sequence[i].toString();
				
				element(by.id(num)).click();
				
			}
			
			expect(digitBox.getText()).toEqual("627154535019");
			
		});
		
		it(`should create the number -157 in the display`, function () {
			
			let sequence = [1, 5, 7];
			
			for (let i = 0; i < sequence.length; i++) {
				
				let num = sequence[i].toString();
				
				element(by.id(num)).click();
				
			}
			
			element(by.id("posneg")).click();
			
			expect(digitBox.getText()).toEqual("-157");
			
		});
		
		it(`should create the number -157 in the display`, function () {
			
			let sequence = [1, 5, 7];
			
			for (let i = 0; i < sequence.length; i++) {
				
				let num = sequence[i].toString();
				
				element(by.id(num)).click();
				
				if (i == 1) {
					
					element(by.id("posneg")).click();
					
				}
				
			}
			
			expect(digitBox.getText()).toEqual("-157");
			
		});
		
		it(`should create the number -157 in the display`, function () {
			
			let sequence = [1, 5, 7];
			
			for (let i = 0; i < sequence.length; i++) {
				
				let num = sequence[i].toString();
				
				element(by.id(num)).click();
				
			}
			
			element(by.id("posneg")).click();
			
			expect(digitBox.getText()).toEqual("-157");
			
		});
		
		it(`should create the number 157 in the display`, function () {
			
			let sequence = [1, 5, 7];
			
			for (let i = 0; i < sequence.length; i++) {
				
				let num = sequence[i].toString();
				
				element(by.id(num)).click();
				
				if (i == 0) {
					
					element(by.id("posneg")).click();
					
				}
				
			}
			
			element(by.id("posneg")).click();
			
			expect(digitBox.getText()).toEqual("157");
			
		});
		
	})
	
};


describe("ngCalculator: Basic Input", function () {
	
	beforeEach(function () {
		
		browser.get("http://localhost:3000/");
		
	});
	
	individualNumericButtons(tc.digitBox, tc.numbers);
	sequenceNumericButtons(tc.digitBox);
	
});
