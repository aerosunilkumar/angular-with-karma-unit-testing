var app = angular.module("app");

app.provider("commonProvider", function() {
  return {
    $get: function() {
      return {
        getDefaultTitle: function(value) {
          return "Angular Testing Basic Application";
        }
      };
    }
  };
});
