describe("Testing Angular Js Test Suite", function() {
  beforeEach(function() {
    module("app");
  });
  describe("Testing Angular Js Controller", function() {
    describe("Testing Angular Js Content Controller", function() {
      var scope = {},
        commonProvider = {},
        commonService = {},
        commonFactory = {},
        ctrl = {};
      var defaultTitle = "";
      beforeEach(function() {
        inject(function($controller) {
          ctrl = $controller("content", {
            $scope: scope,
            commonProvider: commonProvider,
            commonService: commonService,
            commonFactory: commonFactory
          });
          defaultTitle = "Its Title From Content";
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
