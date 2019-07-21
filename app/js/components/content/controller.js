var app = angular.module("app");

app.controller("content", [
  "$rootScope",
  "$scope",
  "commonProvider",
  "commonService",
  "commonFactory",
  function($rootScope, $scope, commonProvider, commonService, commonFactory) {
    debugger;
    $scope.title = "Its Title From Content";
    $scope.updateTitle = function(newTitle) {
      $scope.title = newTitle;
    };
  }
]);
