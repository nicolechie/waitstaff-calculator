angular.module('waitstaff',[
    ])
.controller('WaitstaffController', ['$scope', function($scope){
// This will be the controller variables
var vm = this;
	vm.count = 0;
	vm.subtotal = 0;
	vm.tip = 0;

	var tipTotals = [];
	vm.tipTotals = tipTotals;

// This will be the controller methods
vm.submitOrder = submitOrder;
vm.cancel = cancel;
vm.reset = reset;
vm.calculateTipTotal = calculateTipTotal;

activate();

	function activate() {
		vm.taxRate=5;
	}

	function submitOrder() {
		vm.count += 1;
		vm.tax = vm.price * (vm.taxRate/100);
		vm.subtotal = vm.price + vm.tax;
		vm.tip = vm.price * (vm.tipPercentage/100);
		vm.tipTotals.push(vm.tip);
	}

	 function calculateTipTotal() {
		var tipTotal = 0;
		for (var i=0; i<vm.tipTotals.length; i++) {
			tipTotal+=tipTotals[i];
		}
		return tipTotal;
	}

	function cancel () {
		vm.price = '';
		vm.tipPercentage = '';
		vm.taxRate = '';
	}

	function reset() {
		vm.price = '';
		vm.tipPercentage = '';
		vm.taxRate = '';
		vm.count = 0;
		vm.subtotal = 0;
		vm.tip = 0;
		vm.tax = 0;
		var tipTotals = [];
		vm.tipTotals = tipTotals;
	}
}]);