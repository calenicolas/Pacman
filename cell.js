class Cell {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    pacmanComingFromAbove(pacman) {
        pacman.moveUp();
    }

    pacmanComingFromLeft(pacman) {
        pacman.moveRight();
    }

    pacmanComingFromTop(pacman) {
        pacman.moveDown();
    }

    pacmanComingFromRight(pacman) {
        pacman.moveLeft();
    }

    equals(x, y) {
        return x === this.x && y === this.y;
    }


    drawPacman(x, y) {

        let saltoDeLinea = "";
        if (this.x === 3) {
            saltoDeLinea = ' \n';
        }


        if (this.x === x && this.y === y) {
            return "O";
        }

        return "*" + saltoDeLinea;
    }
}

module.exports = Cell;