const Pacman = require ("./pacman.js");
const Board = require ("./board.js");

const board = new Board();


const pacman = new Pacman();
pacman.moveUp();
const position = pacman.getPosition();


const drawnBoard = board.drawPacmanAt(position.x, position.y);

console.log(drawnBoard)