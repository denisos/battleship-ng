# battleship-ng

An angularjs 1.4.8 implementation of the battleship game. No server side, just 2 players player on same device.

To play:
* run 'grunt serve' 
* then on page presented enter player 1 name and ships 
* then enter player 2 and ships 
* then click "Play Battleship" button
* each player has 2 boards, 1 for ships, the other to record their shots
* to shoot click a cell on the Shots Board
* then the other player clicks on their Shots Board
* and you go back and forth 
* (note: the player whose turn it is has a green highlight around their shots table)


This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

## to-dos
* Create one (or two) directives to display ship and shot boards
* Improve how to report winner
* Add support for different ship sizes
* Add Ship object
* Improve calculation for when all ships sunk (based on ship sizes)