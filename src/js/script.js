/*jslint eqeqeq: true, undef: true */
/*global $, window, console, alert */

var Template = Template || {};

Template = (function() {
	// PRIVATE VARIABLES

	// PRIVATE FUNCTIONS

	// PUBLIC METHODS
	return {
		init: function() {
			// DOM ready
		},
		pageInit: function() {
			// page load
		}
	};
}());

// ON DOM READY
$(function() {
	Template.init();
});

// ON PAGE LOAD
$(window).load(function() {
	Template.pageInit();
});