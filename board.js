const Cell = require("./cell");

class Board {

    constructor() {
        this.cells = [];

        for (let y = 0; y < 3; y++){
            for (let x = 0; x < 7; x++){
                const cell = new Cell(x, y);
                this.cells.push(cell);
            }
        }

        console.log(this.cells)
    }

    drawPacmanAt(x, y) {

        let output = '';

        this.cells.forEach((cell) => {
            output = output + cell.drawPacman(x, y);
        });

        return output;
    }
}

module.exports = Board;