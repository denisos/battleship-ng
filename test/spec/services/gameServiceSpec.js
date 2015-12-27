'use strict';

describe('Service: GameService', function () {

  // load the main module
  beforeEach(module('battleshipApp'));



  it('should have certain date and methods api', inject(function (GameService) {
    expect(GameService.game).toBeDefined();
    expect(GameService.addPlayer).toBeDefined();
    expect(GameService.isPlayerValid).toBeDefined();
    expect(GameService.startGame).toBeDefined();
  }));

  it('should successfully add valid player', inject(function (GameService) {
    var p1 = {name:'Denis', shipPositions: '1,2,0'};

    expect(GameService.game.players.length).toBe(0);

    GameService.addPlayer(p1);

    expect(GameService.game.players.length).toBe(1);
    expect(GameService.game.players[0].name).toBe(p1.name);
//    expect(GameService.game.players[0].shipPositions).toEqual([1,2,0]);

  }));  

});