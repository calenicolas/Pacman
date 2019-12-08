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
      //posicion de x e y
      var position = pacman.getPosition();

      var cell = board.giveMeCellAt(position.x, position.y + 1);
      console.log(cell);
      pacman.goUp(cell);
    }

    if (key.name === "down") {
      //posicion de x e y
      var position = pacman.getPosition();

      var cell = board.giveMeCellAt(position.x, position.y - 1);
      console.log(cell);
      pacman.goDown(cell);
    }

    if (key.name === "left") {
      //posicion de x e y
      var position = pacman.getPosition();

      var cell = board.giveMeCellAt(position.x - 1, position.y);
      console.log(cell);
      pacman.goLeft(cell);
    }

    if (key.name === "right") {
      //posicion de x e y
      var position = pacman.getPosition();

      var cell = board.giveMeCellAt(position.x + 1, position.y);
      console.log(cell);
      pacman.goRight(cell);
    }

    drawBoard(board, pacman);
  }
});

function drawBoard(board, pacman) {

  const position = pacman.getPosition();
  const drawnBoard = board.drawPacmanAt(position.x, position.y);

  console.log(drawnBoard);
}