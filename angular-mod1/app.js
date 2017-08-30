(function() {
	'use strict';

	angular.module('CheckMuchApp', [])
	.controller('CheckerController', CheckMuchController);

	CheckMuchController.$inject = ['$scope'];
	function CheckMuchController($scope) {

		$scope.LunchMenu = "";
		$scope.message = "";
		$scope.customStyle = {};

		$scope.CheckIt = function() {
			var arrayLunch = $scope.LunchMenu.split(",");
			var arrayLunchClear = [];

			for (var i=0; i < arrayLunch.length; i++) {
				var currString = arrayLunch[i].trim();
				if (currString != "") {
					arrayLunchClear[arrayLunchClear.length] = currString;
				}
			}

			if (arrayLunchClear.length == 0) {
				$scope.message = "Please enter data first";
				$scope.customStyle.style = {'border':'solid 1px red', 'color':'red'};
			} else if (arrayLunchClear.length <= 3) {
				$scope.message = "Enjoy!";
				$scope.customStyle.style = {'border':'solid 1px green', 'color':'green'};
			} else {
				$scope.message = "Too much!";
				$scope.customStyle.style = {'border':'solid 1px green', 'color':'green'};
			}
		}

	};

})();