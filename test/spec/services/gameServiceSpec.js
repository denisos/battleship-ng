'use strict';

describe('Service: GameService', function () {

  // load the main module
  beforeEach(module('battleshipApp'));



  it('should expose a game property', inject(function (GameService) {
    expect(GameService.game).toBeDefined();
  }));

  it('should successfully add valid player', inject(function (GameService) {
    var p1 = {name:'Denis', shipPositions: '1,2,0'};

    expect(GameService.game.players.length).toBe(0);

    GameService.addPlayer(p1);

    expect(GameService.game.players.length).toBe(1);
    expect(GameService.getShooter().name).toBe(p1.name);

  }));  

  it('should successfully reset', inject(function (GameService) {
    var p1 = {name:'Denis', shipPositions: '1,2,0'};
    GameService.addPlayer(p1);
    expect(GameService.game.players.length).toBe(1);

    GameService.reset();

    expect(GameService.game.players.length).toBe(0);
  }));  

  it('should shoot and change turn', inject(function (GameService) {
    // to-do
  })); 

  it('should return true if player is valid', inject(function (GameService) {
    // isPlayerValid
  })); 

  it('should return false if player is invalid', inject(function (GameService) {
    // isPlayerValid
  })); 

});