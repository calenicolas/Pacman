const should = require("should");
const Pacman = require("../pacman.js");

describe("creando un pacman", function () {

    it("el pacman se mueve un casillero a la derecha", function() {

        const expectedPosition = {
            x: 1,
            y: 0
        };

        const pacman = new Pacman();

        pacman.moveRight();

        const actualPosition = pacman.getPosition();

        should(actualPosition).be.eql(expectedPosition);
    });

    it("el pacman se mueve un casillero a la derecha", function() {

        const expectedPosition = {
            x: 0,
            y: 0
        };

        const pacman = new Pacman();

        pacman.moveRight();
        pacman.moveLeft();

        const actualPosition = pacman.getPosition();

        should(actualPosition).be.eql(expectedPosition);
    });
});