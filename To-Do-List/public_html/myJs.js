/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var app = angular.module("myModule",["ngMaterial","firebase"]);

app.controller("myCtrl",function($scope,$firebaseObject){
    var ref = new Firebase("https://myto-dolist.firebaseio.com/");

    var syncObject  = $firebaseObject(ref);
    syncObject.$bindTo($scope, "user");
    
   $scope.task = "";
   $scope.tasks = [];
   $scope.addTask = function(task){
   $scope.task = "";
   $scope.tasks.push(task);
   };
  
   $scope.deleteTask = function(task){
  var index = $scope.tasks.indexOf(task);
  $scope.tasks.splice(index, 1);
  if($scope.tasks.length === 0)
      $scope.doneTasks.pop();
};

$scope.doneTasks = [];
$scope.moveTask = function(task){
$scope.doneTasks.push(task);
   };
       
});

