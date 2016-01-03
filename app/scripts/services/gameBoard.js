
'use strict';

/**
 * @ngdoc function
 * @name battleshipApp.factory:GameBoard
 * @description
 * represents a game board for displaying your ships or remembering your shots
 * usage:
 *     var gb = new GameBoard();
 *     gb.plotShip({x:8, y:9});
 */
(function() {

angular.module('battleshipApp')
  .factory('GameBoard', GameBoard);

  function GameBoard() {
    var GameBoard = function(size) {
        this.width = size || 10;
        this.height = size || 10;
        this.ships = 0;
        this.shipHits = 0;

        this.board = [];
        for (var i=0; i < this.width; i++) {
            this.board[i] = [];

            for (var j=0; j < this.height; j++) {
                this.board[i][j] = '_';
            }
        }

    };

    // plot ship on the matrix
    // @param {array} shipPositions
    GameBoard.prototype.plotShip = function(ship) {
        this.board[ship.x][ship.y] = 'S';
        this.board[ship.x+1][ship.y] = 'S';

        this.ships++;
    }

    // handle a shot from an opponent
    // @param {object} shot  {x:0, y:1}   
    // @return {object} shot {x:0, y:1, type:'Hit/Miss/Dup'} 
    GameBoard.prototype.receiveShot = function(shot) {
        var shotOutcome = this.board[shot.x][shot.y];

        // is it a hit
        if (shotOutcome === 'S') {
            shot.type = 'H';

            this.shipHits++;  // increment ship hits

            return shot;
        }

        // is it a miss
        // could rtrack misses too
        if (shotOutcome !== 'S') {
            shot.type = 'M';
            return shot;
        } 

    }

    // record result of a shot you made
    // @param {object} shot  {x:0, y:1, type:'H/M/D'}   ()
    GameBoard.prototype.recordShot = function(shot) {
        this.board[shot.x][shot.y] = shot.type;
    }

    // are all ships sunk?
    // @return true/false
    GameBoard.prototype.isAllShipsSunk = function() {
        return this.shipHits >= this.ships * 2;   // assume ship length aways 2
    }

    return GameBoard;
  }

})();