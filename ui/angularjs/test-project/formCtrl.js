angular.module('adminApp', []).controller('userCtrl', function($scope) {
  $scope.usersData = [];

  $scope.submitUser = function() {
    var userObj = {
      fname: $scope.firstname,
      lname: $scope.lastname,
      age: $scope.age
    };
    console.log('user Obj===', userObj);
      //alert('submit click');
     $scope.usersData.push(userObj);
     $scope.firstname = '';
     $scope.lastname = '';
     $scope.age = '';
     console.log('user Array::', $scope.usersData);
  };

});
