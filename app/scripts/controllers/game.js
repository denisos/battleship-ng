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

    vm.p1 = {name: player1.name};
    vm.p2 = {name: player2.name};

    vm.game = GameService.game;
    
    vm.p1.shipBoard = player1.getShipBoard();
    vm.p1.shotBoard = player1.getShotBoard();


    // api
    vm.fire = fire;

    function fire(row, col) {
        GameService.shoot({x:row, y:col}); 
    }

  }

})();
