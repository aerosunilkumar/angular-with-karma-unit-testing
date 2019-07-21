var app = angular.module("app");

app.factory("commonFactory", [
  function() {
    var serviceFactory = {};
    serviceFactory.getDefaultTitle = function() {
      return "Angular Testing Basic Application";
    };

    return serviceFactory;
  }
]);
