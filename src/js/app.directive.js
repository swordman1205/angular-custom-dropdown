'use strict';

app.directive('selectPicker', [function() {
    return {
        restrict: 'E',
        require: 'ngModel',
        scope: {
            selectValue: '&selectOption',
            data: '=options',
            displayField: '@',
            emptyText: '@'
        },
        template: 
        	'<div class="select-picker col-xs-3">' + 
           	'<div class="form-group selector" ng-click="isDropdown = !isDropdown">' +
            '<input type="text" class="form-control" placeholder="adsfadsf" ng-model="selected" ng-click="openDropDown()" disabled>' +
            '<i class="fa fa-angle-down arrow"></i>' +
            '</div>' +
            '<ul class="list-group" ng-if="isDropdown">' +
            '<li class="list-group-item" ng-repeat="item in data" ng-click="selectItem(item)">{{ displayField? item[displayField] : item }}</li>' +
            '</ul>' +
            '</div>'
        ,
        link: function(scope, iElement, iAttrs, ngModelController) {        	

        	init();

        	function init() {
        		if (ngModelController.$viewValue) {        			
	        		scope.selected = scope.displayField? ngModelController.$viewValue[scope.displayField] : ngModelController.$viewValue;
	        		ngModelController.$setViewValue(scope.data[0]);
        		} else {
					iElement[0].querySelectorAll('input[type="text"]')[0].placeholder = scope.emptyText;
        		}
        	}

            function updateModel(item) {
            	var text = scope.displayField? item[scope.displayField] : item;
            	scope.selected = text;
            	ngModelController.$setViewValue(item);
                scope.isDropdown = false;
            }

            scope.selectItem = function(item) {
                updateModel(item);
                scope.selectValue({ value: item });
            }

            scope.openDropDown = function() {
                scope.isDropdown = true; 
            }
        }
    };
}]);
