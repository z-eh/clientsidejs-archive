/**
 * Test controller
 * @version: 0.1
 */

define(["jquery", "ko", "text!testView"], function($, ko, testView) {
	var testController = function() {
		var self = this;

		self.view = testView;
		self.viewModel = null;

		self.exec = function() {
			window.App.renderView(self.view, self.viewModel);
			console.info("testController executed.");
		};
	};

	return testController;
});