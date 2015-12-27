'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('battleshipApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should put game on scope', function () {
    expect(MainCtrl.game).toBeDefined();
  });

  it('should put player on scope', function () {
    expect(MainCtrl.player).toBeDefined();
  });  

  it('should start count at zero', function () {
    expect(MainCtrl.count).toBe(0);
  });  

});
