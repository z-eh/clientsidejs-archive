/**
 * Index ViewModel
 * @version: 0.1
 */

define(["jquery", "ko", "indexModel"], function($, ko, Index) {
	var indexViewModel = function() {
		var self = this;

		self.model = new Index();
	};

	console.info("Index viewmodel initialized.");
	return indexViewModel;
});