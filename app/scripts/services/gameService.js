
'use strict';

/**
 * @ngdoc function
 * @name battleshipApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the battleshipApp
 */
(function() {

angular.module('battleshipApp')
  .service('GameService', GameService);

  GameService.$inject = ['Player'];

  function GameService(Player) {
    this.game = {};
    this.game.numPlayers = 2;
    this.game.numShips = 3;
    this.game.players = [];
    this.game.turn = 0;

    // add a player and their ships to the game
    this.addPlayer = function(player) {
        // make new player
        var newPlayer = new Player(player.name, player.shipPositions);

        this.game.players.push(newPlayer);
    }

    // validations such as: check if ships are correct and name entered
    this.isPlayerValid = function(player) {
        return true;
    }

    // @param {object} shot {x:1, y:2} coordinates
    this.shoot = function(shot) {
        // shoot at shootee
        var shootee = getShootee.call(this),
            shooter = getShooter.call(this),
            result;

        result = shootee.receiveShot(shot);

        // shooter records result
        shooter.recordShot(result);

        // check with the player if all ships are sunk, if so declare winner and end game
        if (shootee.isAllShipsSunk()) {
            this.game.gameOver = true;

            alert("Winner", shooter.name);
        }

        // change turn to the other player
        this.changeTurn();

        return result;
    }

    this.changeTurn = function() {
        this.game.turn = this.game.turn === 1 ? 0 : 1;
    }

    // reset game
    this.reset = function() {
        this.game.players = [];
        this.game.turn = 0;
    }



    // shooter is the player whose turn it is
    function getShooter() {
        return this.game.players[this.game.turn];
    }

    // shootee is not the player whose turn it is
    function getShootee() {
        var turn = this.game.turn === 1 ? 0 : 1;

        return this.game.players[turn];
    }


  }

})();