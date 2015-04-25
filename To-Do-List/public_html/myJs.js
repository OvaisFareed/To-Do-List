/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var app = angular.module("myModule",[]);

app.controller("myCtrl",function($scope){
   $scope.task = "";
   $scope.tasks = [];
   $scope.addTask = function(task){
          $scope.task = "";
       $scope.tasks.push(task);
   };
  
   $scope.deleteTask = function(task){
  var index = $scope.tasks.indexOf(task);
  $scope.tasks.splice(index, 1);     
};

$scope.doneTasks = [];
$scope.moveTask = function(task){
$scope.doneTasks.push(task);
   };
       
});

