class Board {

    constructor() {
        this.cells = [];

        for (let x = 0; x < 7; x++){
            for (let y = 0; y < 3; y++){
                const cell = new Cell(x, y);
                this.cells.push(cell);
            }
        }

        console.log(this.cells)
    }

    drawPacmanAt(x, y) {
        this.cells[-y + 1][x + 3] = "O"
        return this.drawCells();
    }

    drawCells() {
        let output = '';
        this.cells.forEach(function(row) {
            row.forEach(function(cellContent) {
                output = output + " " + cellContent;
            });
        });

        return output;
    }
}

module.exports = Board;