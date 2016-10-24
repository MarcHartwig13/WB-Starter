requirejs.config({
	baseUrl: requireThemePath+'js',
	paths: {
		'fitvids': '_lib/jquery.fitvids.min',
		'fontfaceobserver': '_lib/fontfaceobserver.min',
		'idealimageslider': '_lib/idealimageslider.min',
		'jquery': '_lib/jquery.min',
		'modernizr': '_lib/modernizr-custom.min',
		'picturefill': '_lib/picturefill.min',
		'global': 'global.min',
		'home': 'home.min',
	},
	shim: {
		'fitvids': {
			deps: ['jquery'],
		},
		'global': {
			deps: ['jquery'],
		},
		'home': {
			deps: ['global', 'jquery'],
		},
	},
	urlArgs: "v=" + ((requireDevMode) ? (new Date()).getTime() : requireVersion),
});

// Global functions and scripts

// setup font events (don't forget to change variable in package.json)
(function(w) {
	if (w.document.documentElement.className.indexOf("fonts_loaded") > -1){
		return;
	} else if (requireFontEvents === true) {
		requirejs(['fontfaceobserver'], function() {
			// examples:
			var eaves = new w.FontFaceObserver("MrEavesXLSanRRegular");
			var eaves_italic = new w.FontFaceObserver("MrEavesXLModBkIRegular");
			
			w.Promise.all([eaves.check(), eaves_italic.check()]).then(function(){
				w.document.documentElement.className += " fonts_loaded";
			});
		});
	}
}(this));

if (requireSection === 'home') {
	requirejs(['home']);
} else {
	requirejs(['global']);
}

// Get page-specific modules
function requirePageSpecificModule(moduleName) {
	switch(moduleName) {
		/*
		// EXAMPLES
		case 'formValidator':
			requirejs(['formValidator']);
			break;
		case 'fitvids':
			requirejs(['fitvids'], function() {
				var jq = jQuery;
				
				jq('.video').fitVids();
			});
			break;
		case 'idealSlider':
			requirejs(['idealSlider'], function() {
				var idealSlider = new IdealImageSlider.Slider({
					selector: '.body_gallery_wrapper',
					interval: 4000,
					transitionDuration: 1000,
					effect: 'fade',
				});
				idealSlider.start();
			});
			break;
		*/
	}
}

//requirejs(["modernizr"]);

//requirejs(["picturefill"]);

/*
// check if element has class
function hasClass(element, class) {
	return (' '+element.className+' ').indexOf(' '+class+' ') > -1;
}
*/

// remove no-js class for when Javascript is enabled
document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/g, '') + ' js ';