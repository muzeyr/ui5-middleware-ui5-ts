export default {
	name: "QUnit test suite for the UI5 Application: uzi2",
	defaults: {
		page: "ui5://test-resources/com/uzi2/Test.qunit.html?testsuite={suite}&test={name}",
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
			only: "com/uzi2/",
			never: "test-resources/com/uzi2/"
		},
		loader: {
			paths: {
				"com/uzi2": "../"
			}
		}
	},
	tests: {
		"unit/unitTests": {
			title: "Unit tests for uzi2"
		},
		"integration/opaTests": {
			title: "Integration tests for uzi2"
		}
	}
};
