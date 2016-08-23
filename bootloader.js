/**
 * Bootloader
 * @version: 0.1
 */

require(["config"], function(){
	require(["jquery", "ko", "domReady!"], function($, ko) {
		console.info("domReady!");
		console.info("knockout ready!");

		require(["app"], function(App) {
			window.App = App;
			window.App.start();
		});
	});
});