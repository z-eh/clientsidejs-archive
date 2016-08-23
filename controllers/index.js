/**
 * Index Controller
 * @version: 0.1
 */

define(["jquery", "ko", "indexModel", "text!indexView", "indexViewModel"], function($, ko, Index, indexView, indexViewModel) {
	var indexController = function() {
		var self = this;

		self.view = indexView;
		self.viewModel = new indexViewModel();

		self.exec = function() {
			window.App.renderView(self.view, self.viewModel);
			console.info("indexController executed.");
		};
	};

	console.info("indexController initialized.");
	return indexController;
});