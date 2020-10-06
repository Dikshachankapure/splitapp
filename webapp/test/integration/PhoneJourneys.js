jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"products/test/integration/NavigationJourneyPhone",
		"products/test/integration/NotFoundJourneyPhone",
		"products/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});