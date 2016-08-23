/**
 * Index Model
 * @version: 0.1
 */

define(["jquery", "ko"], function($, ko) {
	var Index = function() {
		var self = this;

		self.name = ko.observable();
	};

	console.info("Index model initialized.");
	return Index;
});