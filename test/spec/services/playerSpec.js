'use strict';

describe('Service: Player', function () {

  // load the main module
  beforeEach(module('battleshipApp'));


  it('should successfully create new Player', inject(function (Player) {
    var newPlayer = new Player('jane', '0,1');

    expect(newPlayer.name).toBe('jane');
    expect(newPlayer.shipBoard).toBeDefined();
    expect(newPlayer.shotBoard).toBeDefined();
  }));  

  // use Jasmine spy to confirm Player is passing thru call
  it('should successfully receive a shot and call the ship board', inject(function (Player) {
    var newPlayer = new Player('jane', '0,1'),
        shipBoard = newPlayer.shipBoard,
        shot = {x:1, y:1};

    spyOn(shipBoard, 'receiveShot');

    newPlayer.receiveShot(shot);

    expect(shipBoard.receiveShot).toHaveBeenCalledWith(shot);
  }));  

  // use Jasmine spy to confirm Player is passing thru call
  it('should successfully record a shot and call the shot board', inject(function (Player) {
    var newPlayer = new Player('jane', '0,1'),
        shotBoard = newPlayer.shotBoard,
        shot = {x:1, y:1};

    spyOn(shotBoard, 'recordShot');

    newPlayer.recordShot(shot);

    expect(shotBoard.recordShot).toHaveBeenCalledWith(shot);
  })); 


});