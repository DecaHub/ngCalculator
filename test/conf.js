let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
	
	framework: "jasmine",
	jasmineNodeOpts: {
		
		print: function () {}
		
	},
	seleniumAddress: "http://localhost:4444/wd/hub",
	specs: [
		"basic-input-spec.js",
		"basic-addition-spec.js",
		"basic-subtraction-spec.js",
		"basic-multiplication-spec.js",
		"basic-division-spec.js",
		"clear-board-spec.js"
	],
	
	onPrepare: function () {
		
		jasmine.getEnv().addReporter(new SpecReporter({
			spec: {
				displayStacktrace: true
			}
		}));
		
	},
	
};
