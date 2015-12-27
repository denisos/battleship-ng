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
  .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['$scope', '$location', 'GameService'];

  function MainCtrl($scope, $location, GameService) {
    var vm = this; 

    // public data
    vm.game = GameService.game;
    vm.count = 0;
    vm.player = createDefaultPlayer();

    // public api
    vm.hasMorePlayers = hasMorePlayers;
    vm.nextPlayer = nextPlayer;
    vm.playGame = playGame;

    // private functions
    function hasMorePlayers() {
        return vm.count < GameService.game.numPlayers;
      }

    function nextPlayer() {
        if (! isPlayerValid(vm.player)) {
            vm.error = true;
            return;         
        }

        // add a player to the game
        GameService.addPlayer(vm.player);

        // move on to next player and reset error and old player data
        vm.count++;
        vm.error = false;
        vm.player = createDefaultPlayer();
    }

    function isPlayerValid(player) {
        var pos = vm.player.shipPositions.split(',');
        if (vm.player.name.trim().length < 0 || pos.length != GameService.game.numShips * 2) {   
            return false;
        }

        if (! GameService.isPlayerValid(vm.player)) {
            return false;           
        }       
        return true;
    }

    // start the game proper and go to the game page
    function playGame() {
        GameService.startGame();

        $location.path('/game');
    }

    function createDefaultPlayer() {
        return {name:'', shipPositions: '0,1,1,2,2,4'};
    }

  }

})();