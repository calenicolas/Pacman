const should = require ("should");
const Board = require ("../board.js")
const Cell = require ("../cell")
const Wall = require ("../wall")
describe ("creando un board", function() {
    it("el board dibuja a un pacman en la posicion dada", function() {

        const board = new Board();

        const x = 0,
              y = 1;

        const drawnBoard = board.drawPacmanAt(x, y);

        should(drawnBoard).be.eql(
            ` * * * O * * * \n` +
            ` * * * * * * * \n` +
            ` * * * * * * * \n`
        );
    });

    it("el board dibuja a un pacman en la posicion dada", function() {

        const board = new Board();

        const x = 1,
              y = -1;

        const drawnBoard = board.drawPacmanAt(x, y);

        should(drawnBoard).be.eql(
            ` * * * * * * * \n` +
            ` * * * * * * * \n` +
            ` * * * * O * * \n`
        );
    });

    it("el board nos pasa la celda que queremos", function() {

        const board = new Board();

        const x = 2,
              y = -1;

        const cell = board.giveMeCellAt(x, y);

        should(cell).be.eql(new Cell(x, y));
           
    });

    it("el board nos pasa una celda que no existe", function() {

        const board = new Board();

        const x = 45,
              y = -1;

        const cell = board.giveMeCellAt(x, y);

        should(cell).be.eql(new Wall());
           
    });


    it("el board no se pincha cuando vamos a la derecha", function() {

        const board = new Board();

        const x = 3,
              y = 1;

        const drawnBoard = board.drawPacmanAt(x, y);

        should(drawnBoard).be.eql(
            ` * * * * * * O \n` +
            ` * * * * * * * \n` +
            ` * * * * * * * \n`
        );
    });
});