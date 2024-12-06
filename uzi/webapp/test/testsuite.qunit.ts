export default {
	name: "QUnit test suite for the UI5 Application: uzi",
	defaults: {
		page: "ui5://test-resources/com/uzi/Test.qunit.html?testsuite={suite}&test={name}",
		qunit: {
			version: 2
		},
		sinon: {
			version: 1
		},
		ui5: {
			language: "EN",
			theme: "sap_horizon"
		},
		coverage: {
			only: "com/uzi/",
			never: "test-resources/com/uzi/"
		},
		loader: {
			paths: {
				"com/uzi": "../"
			}
		}
	},
	tests: {
		"unit/unitTests": {
			title: "Unit tests for uzi"
		},
		"integration/opaTests": {
			title: "Integration tests for uzi"
		}
	}
};
