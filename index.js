const readline = require('readline');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

const Pacman = require ("./pacman.js");
const Board = require ("./board.js");

const board = new Board();

const pacman = new Pacman();

drawBoard(board, pacman);

process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit();
  } else {
    if(key.name === "up") {

        pacman.moveUp();
    }

    if(key.name === "down") {

        pacman.moveDown();
    }

    drawBoard(board, pacman);
  }
});

function drawBoard(board, pacman) {

    const position = pacman.getPosition();
    const drawnBoard = board.drawPacmanAt(position.x, position.y);

    console.clear();
    console.log(drawnBoard);
}
