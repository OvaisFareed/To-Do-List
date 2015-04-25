/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var app = angular.module("module1",[]);
app.controller('SimpleArrayCtrl', ['$scope', function SimpleArrayCtrl($scope) {
  // fruits
  $scope.fruits = ['apple', 'orange', 'pear', 'naartjie'];

  // selected fruits
  $scope.selection = ['apple', 'pear'];

  // toggle selection for a given fruit by name
  $scope.toggleSelection = function toggleSelection(fruitName) {
    var idx = $scope.selection.indexOf(fruitName);

    // is currently selected
    if (idx > -1) {
      $scope.selection.splice(idx, 1);
    }

    // is newly selected
    else {
      $scope.selection.push(fruitName);
    }
  };
}]);

