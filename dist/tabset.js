/**
 * - collection of tabs
 * - on click behaviour -> show current tab and hide other
 * - switch between tabs -> buttons that map to a tab list
 *
 * [ tab one ] [ tab two ]
 *
 * [tabone *] [tabtwo]
 *
 * - active tab
 * - deactivate any other tabs
 */

'use strict';

(function (module) {
	function tabsetDirective() {
		return {
			link: linker
		};

		function linker($scope, $element, $attrs) {}
	}

	function TabSetController() {
		var tabset = this;

		tabset.tabList = [];
		tabset.register = function (tab) {
			tabset.tabList.push(tab);
		};
	}

	module.directive('tabset', tabsetDirective).controller('TabSetController', TabSetController);
})(angular.module('app'));
/*var tabset = {
	tabs: [Object, Object],
	tabClickHandler: Function
};*/