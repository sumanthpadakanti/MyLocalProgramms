angular.module('adminApp', []).controller('userCtrl', function($scope) {
	
		$scope.usersData = [
	    {
	        sno: 1,
	        fname: 'Bujji',
	        lname: 'balaga',
	        age: 28
	    },
	    {
	        sno: 2,
	        fname: 'vamsi',
	        lname: 's',
	        age: 22
	    },
	    {
	        sno: 3,
	        fname: 'sumanth',
	        lname: 'a',
	        age: 25
	    },
	    {
	        sno: 4,
	        fname: 'mahesh',
	        lname: 'b',
	        age: 23
	    }
	];

});
