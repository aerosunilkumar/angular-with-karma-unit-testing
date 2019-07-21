var app = angular.module("app");

app.service("commonService", [
  function() {
    this.getDefaultTitle = function() {
      return "Angular Testing Basic Application";
    };
  }
]);
