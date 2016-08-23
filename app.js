/**
 * Application
 */

define(["jquery", "infuser", "ko", "koext", "sammy"], function($, infuser, ko, koext, Sammy) {
	var App = function() {
		var self = this;

		self.renderView = function (view, viewModel) {
			$("#main-container").html(view);
			var viewElement = $("#main-container .behind-view");
			ko.applyBindings(viewModel, viewElement[0]);
		};

		self.router = Sammy(function(){
			this.get("#/", function() {			
				require(["indexController"], function(indexController) {
					if(typeof(window.indexController) == "undefined") {
						window.indexController = new indexController();
					}
					window.indexController.exec();
				});
			});

			this.get('#/test', function() {
				require(["testController"], function(testController) {
					if(typeof(window.testController) == "undefined") {
						window.testController = new testController();
					}
					window.testController.exec();
				});
			});
		});

		self.start = function() {
			infuser.defaults.templateUrl = "templates";
			self.router.run("#/");
			console.info("Application started.");
		};
	};

	console.info("Application initialized.");
	return new App();
});