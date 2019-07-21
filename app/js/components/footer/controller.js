var app = angular.module("app");

app.controller("footer", [
  "$rootScope",
  "$scope",
  function($rootScope, $scope) {
    $scope.title = "Its Title From Footer";
    $scope.updateTitle = function(newTitle) {
      $scope.title = newTitle;
    };
  }
]);
