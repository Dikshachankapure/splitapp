jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Categories in the list
// * All 3 Categories have at least one Products

sap.ui.require([
	"sap/ui/test/Opa5",
	"products/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"products/test/integration/pages/App",
	"products/test/integration/pages/Browser",
	"products/test/integration/pages/Master",
	"products/test/integration/pages/Detail",
	"products/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "products.view."
	});

	sap.ui.require([
		"products/test/integration/MasterJourney",
		"products/test/integration/NavigationJourney",
		"products/test/integration/NotFoundJourney",
		"products/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});