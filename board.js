class Board {

    constructor() {
        this.cells = [
            ["*", "*", "*", "*", "*", "*", "*", "\n"],
            ["*", "*", "*", "*", "*", "*", "*", "\n"],
            ["*", "*", "*", "*", "*", "*", "*", "\n"]
        ];
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