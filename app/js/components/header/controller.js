var app = angular.module("app");

app.controller("header", [
  "$rootScope",
  "$scope",
  function($rootScope, $scope) {
    $scope.title = "Its Title From Header";
    $scope.ngInt = function() {
      debugger;
    };
    $scope.updateTitle = function(newTitle) {
      $scope.title = newTitle;
    };
  }
]);
