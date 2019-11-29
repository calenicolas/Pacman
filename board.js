const Cell = require("./cell");

class Board {

    constructor() {
        this.cells = [];

        for (let y = 1; y > -2; y--){
            for (let x = -3; x < 4; x++){
                const cell = new Cell(x, y);
                this.cells.push(cell);
            }
        }

        
    }

    drawPacmanAt(x, y) {

        let output = '';

        this.cells.forEach((cell) => {
            
            output = output + ' ' + cell.drawPacman(x, y);
        });

        return output;
    }
}

module.exports = Board;