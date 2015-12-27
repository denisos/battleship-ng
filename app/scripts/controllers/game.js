'use strict';

/**
 * @ngdoc function
 * @name battleshipApp.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the battleshipApp Game
 */
(function() {

angular.module('battleshipApp')
  .controller('GameCtrl', GameCtrl);

  GameCtrl.$inject = ['$scope', 'GameService'];

  function GameCtrl($scope, GameService) {
    var vm = this;
    var player1 = GameService.game.players[0];
    var player2 = GameService.game.players[1];

    // view model data
    vm.p1 = {name: player1.name,
             shipBoard: player1.getShipBoard(),
             shotBoard: player1.getShotBoard()};

    vm.p2 = {name: player2.name,
             shipBoard: player2.getShipBoard(),
             shotBoard: player2.getShotBoard()};

    vm.game = GameService.game;
    
    // public api
    vm.fire = fire;

    function fire(row, col) {
        GameService.shoot({x:row, y:col}); 
    }

  }

})();
