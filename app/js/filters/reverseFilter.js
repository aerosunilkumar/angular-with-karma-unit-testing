var app = angular.module("app");

app.filter("reverseFilter", [
  function() {
    return function(string) {
      return string
        .split("")
        .reverse()
        .join("");
    };
  }
]);
