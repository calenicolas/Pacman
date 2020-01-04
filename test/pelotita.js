const should = require("should");
const Board = require ("../board.js")
const Cell = require ("../cell")
const Pelotita = require ("../pelotita")
const Pacman = require ("../pacman")



describe('la pelotita', function () {
    it('las pelotitas se dibujan', function () {
        const pacman = new Pacman()
        const pelotita = new Pelotita()
        const board = new Board([
            new Cell(0, 2, pelotita), new Cell(0, 1, pelotita), new Cell(0, 0, pacman)
        ])

        const drawnBoard = board.draw();

        should(drawnBoard).be.eql('**O');
    });

    it("las pelotitas son comidas por el pacman", () => {
        const pacman = new Pacman()
        const pelotita = new Pelotita()
        const board = new Board([
            new Cell(0, 2, pelotita), new Cell(0, 1, pelotita), new Cell(0, 0, pacman)
        ])

        pacman.left();
        const drawnBoard = board.draw();

        should(drawnBoard).be.eql('*O ');
    });
})