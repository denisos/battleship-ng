'use strict';

describe('Service: GameBoard', function () {

  // load the main module
  beforeEach(module('battleshipApp'));

  it('should successfully create a board with correct dimensions passed', inject(function (GameBoard) {
    var gb = new GameBoard(8);
    expect(gb.ships).toEqual(0);
    expect(gb.shipHits).toEqual(0);

    expect(gb.width).toEqual(8);
    expect(gb.height).toEqual(8);
    expect(gb.board[0][0]).toEqual('_');
    expect(gb.board[7][7]).toEqual('_');

    expect(gb.ships).toEqual(0);
    expect(gb.shipHits).toEqual(0);
  }));  

  it('should successfully create a board with correct default dimensions', inject(function (GameBoard) {
    var gb = new GameBoard();
    expect(gb.width).toEqual(10);
    expect(gb.height).toEqual(10);
    expect(gb.board[0][0]).toEqual('_');
    expect(gb.board[9][9]).toEqual('_');

    expect(gb.ships).toEqual(0);
    expect(gb.shipHits).toEqual(0);
  })); 

  // plot ships
  it('should successfully plot a ship top left', inject(function (GameBoard) {
    var gb = new GameBoard();
    gb.plotShip({x:0, y:1});
    expect(gb.board[0][1]).toEqual('S');
    expect(gb.board[1][1]).toEqual('S');

    expect(gb.ships).toEqual(1);
    expect(gb.shipHits).toEqual(0);
    expect(gb.isAllShipsSunk()).toEqual(false);    
  })); 

  it('should successfully plot a ship bottom right', inject(function (GameBoard) {
    var gb = new GameBoard();
    gb.plotShip({x:8, y:9});
    expect(gb.board[8][9]).toEqual('S');
    expect(gb.board[9][9]).toEqual('S');

    expect(gb.ships).toEqual(1);

    // plot another ship
    gb.plotShip({x:2, y:1});
    expect(gb.board[2][1]).toEqual('S');
    expect(gb.board[3][1]).toEqual('S');
    expect(gb.ships).toEqual(2);  
    expect(gb.shipHits).toEqual(0);
    expect(gb.isAllShipsSunk()).toEqual(false);        
  })); 

  // shots
  it ('should successfuly receive a shot and identify as a miss', inject(function(GameBoard) {
    var gb = new GameBoard();
    gb.plotShip({x:0, y:1});
    
    var outcome = gb.receiveShot({x:0, y:9});

    expect(outcome.type).toEqual('M');
    expect(gb.ships).toEqual(1);  
    expect(gb.shipHits).toEqual(0);
    expect(gb.isAllShipsSunk()).toEqual(false);  
  }));

  it ('should successfuly receive 2 shot hits and identify both as a hit and allShipsSunk true', inject(function(GameBoard) {
    var gb = new GameBoard();
    gb.plotShip({x:0, y:1});

    var outcome = gb.receiveShot({x:1, y:1});
    expect(outcome.type).toEqual('H');
    expect(gb.ships).toEqual(1);  
    expect(gb.shipHits).toEqual(1);
    expect(gb.isAllShipsSunk()).toEqual(false);  

    outcome = gb.receiveShot({x:0, y:1});
    expect(outcome.type).toEqual('H');
    expect(gb.ships).toEqual(1);  
    expect(gb.shipHits).toEqual(2);
    expect(gb.isAllShipsSunk()).toEqual(true);   
       
  }));


});
