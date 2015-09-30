/**
 * - title
 * - content
 * - isActive
 */

var tab = {
	title: '',
	content: null,
	isActive: false
};

function tabDirective() {
	return {
		transclude: true,
		require: ['?^tabset', 'tab'],
		scope: {
			title: '@',
			onactivate: '&'
		},
		templateUrl: 'tpl/tab.html',
		controller: 'TabController as ctrl',
		link: function ($scope, $element, $attrs, ctrls) {
			var tabset, tab;
			[tabset, tab] = ctrls;

			tabset.register(tab);
		}
	};
}

function TabController () {
	var ctrl = this;

	ctrl.foo = function () {

	};
}

angular.module('app').directive('tab', tabDirective).controller('TabController', TabController);