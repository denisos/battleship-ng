
'use strict';

/**
 * @ngdoc function
 * @name battleshipApp.factory:Player
 * @description
 * represents a game board for displaying your ships or remembering your shots
 * each player has 2 boards:
 *  1. their ships
 *  2. their shot made
 *
 *  usage:
 *   var gb = new Player('jane', '1,2');
 *   gb.receiveShot({x:8, y:9});
 */
(function() {

angular.module('battleshipApp')
    .factory('Player', Player);

    Player.$inject = ['GameBoard'];

    function Player(GameBoard) { 

        var Player = function(name, shipPositions, boardSize) {
            var _this = this,
                positions = shipPositions.split(',');

            this.name = name;
            this.shipPositions = shipPositions;

            // each player has 2 boards
            this.shipBoard = new GameBoard(boardSize);  // my ships and their shots
            this.shotBoard = new GameBoard(boardSize);  // shots I made


            // plot the ships
            for (var i=0; i < positions.length; i = i+2) {
                var x = parseInt(positions[i], 10);
                var y = parseInt(positions[i+1], 10);

                // to-do: add a ship type instead of hardcding ship object here
                _this.shipBoard.plotShip({x:x, y:y, width: 1, length: 2, type: 'basic'});
            }       
        };

        // handle a shot from an opponent
        // @param {object} shot  {x:0, y:1}   
        // @return {object} shot {x:0, y:1, type:'Hit/Miss'} 
        Player.prototype.receiveShot = function(shot) {
            return this.shipBoard.receiveShot(shot);
        }

        // record result of a shot you made
        // @param {object} shot  {x:0, y:1, type:'H/M'}   ()
        Player.prototype.recordShot = function(shot) {
          return this.shotBoard.recordShot(shot);
        }

        // are all my ships sunk?
        // @return true/false
        Player.prototype.isAllShipsSunk = function() {
          return this.shipBoard.isAllShipsSunk();   
        }


        Player.prototype.getShipBoard = function() {
          return this.shipBoard.board;
        }

        Player.prototype.getShotBoard = function() {
          return this.shotBoard.board;
        }

        return Player;
    }

})();