const readline = require('readline');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

const Pacman = require("./pacman.js");
const Board = require("./board.js");
const Cell = require("./cell.js");
const Wall = require('./wall')

const board = new Board();

const pacman = new Pacman();

drawBoard(board, pacman);

process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit();
  } else {
    if (key.name === "up") {

      pacman.goUp(new Wall());
    }

    if (key.name === "down") {

      pacman.moveDown();
    }

    if (key.name === "left") {

      pacman.moveLeft();
    }

    if (key.name === "right") {

      pacman.moveRight();
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
