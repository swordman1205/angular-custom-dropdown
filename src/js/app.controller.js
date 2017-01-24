'use strict';

app.controller("MainCtrl", [ function() {
	var self = this;

	angular.extend(self, {
		data: [{
		    id: 1,
		    name: "Low"
		}, {
		    id: 2,
		    name: "Normal"
		}, {
		    id: 3,
		    name: "High"
		}, {
		    id: 4,
		    name: "Urgent"
		}, {
		    id: 5,
		    name: "Immediate"
		}],
		selected: null,
		selectValue: selectValue
	});

	function selectValue(value) {
		console.log(value);
	}
}]);
