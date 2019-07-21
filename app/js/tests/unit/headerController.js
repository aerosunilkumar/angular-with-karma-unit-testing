describe("Testing Angular Js Test Suite", function() {
  beforeEach(function() {
    module("app");
  });
  describe("Testing Angular Js Controller", function() {
    describe("Testing Angular Js Header Controller", function() {
      var scope = {};
      var ctrl;
      var defaultTitle = "";
      beforeEach(function() {
        inject(function($controller) {
          ctrl = $controller("header", { $scope: scope });
          defaultTitle = "Its Title From Header";
        });
      });

      afterEach(function() {
        //clean up for each
      });

      it("Testing : title is Defined and initilized with default value", function() {
        expect(scope.title).toBeDefined();
        expect(scope.title).toBe(defaultTitle);
      });

      it("Testing : updateTitle functionality", function() {
        expect(scope.updateTitle).toBeDefined();
        var newTitleForTest = "New Title";
        scope.updateTitle(newTitleForTest);
        expect(scope.title).toBe(newTitleForTest);
      });
    });
  });
});
