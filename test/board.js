const should = require ("should");
const Board = require ("../board.js")
const Pacman = require ("../pacman")
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
});