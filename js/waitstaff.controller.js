angular.module('waitstaff',[
    ])
.controller('WaitstaffController', ['$scope', function($scope){

	$scope.count = 0;
	$scope.subtotal = 0;
	$scope.tip = 0;

	var tipTotals = [];
	$scope.tipTotals = tipTotals;

	$scope.submitOrder = function() {
		$scope.count += 1;
		$scope.tax = $scope.price * ($scope.taxRate/100);
		$scope.subtotal = $scope.price + $scope.tax;
		$scope.tip = $scope.price * ($scope.tipPercentage/100);
		$scope.tipTotals.push($scope.tip);
	}

	$scope.calculateTipTotal = function() {
		var tipTotal = 0;
		for (var i=0; i<$scope.tipTotals.length; i++) {
			tipTotal+=tipTotals[i];
		}
		return tipTotal;
	}

	$scope.cancel = function() {
		$scope.price = '';
		$scope.tipPercentage = '';
		$scope.taxRate = '';
	}

	$scope.reset = function() {
		$scope.price = '';
		$scope.tipPercentage = '';
		$scope.taxRate = '';
		$scope.count = 0;
		$scope.subtotal = 0;
		$scope.tip = 0;
		$scope.tax = 0;
		var tipTotals = [];
		$scope.tipTotals = tipTotals;
	}
}]);