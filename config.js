/**
 * RequireJS Configuration file
 * @version: 0.1
 */

require.config({
	basePath: "./",
	paths: {
		//application
		"app": "app",
		"config": "config",

		//controllers
		"indexController": "controllers/index",
		"testController": "controllers/test",

		//libraries
		"jquery": "libraries/jquery-1.11.1",
		"ko": "libraries/knockout-3.1.0",
		"bootstrap": "libraries/bootstrap",
		"text": "libraries/text",
		"i18n": "libraries/i18n",
		"domReady": "libraries/domReady",
		"infuser": "libraries/infuser-amd",
		"koext": "libraries/koExternalTemplateEngine-amd",
		"TrafficCop": "libraries/TrafficCop",
		//"pager": "libraries/pager.min",
		"sammy": "libraries/sammy",

		//models
		"indexModel": "models/index",
		"pagerModel": "models/pager",

		//viewModels
		"indexViewModel": "viewmodels/index",

		//views
		"indexView": "views/index.html",
		"testView": "views/test.html"
	},
	shim: {
		"bootstrap": {
			deps: ["jquery"]
		},
		"knockout": {
			deps: ["jquery"]
		}
	}
});

console.info("config ready!");