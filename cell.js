class Cell{

    constructor(x, y){
        this. x = x;
        this. y = y;

    }

    drawPacman(x, y) {

        let saltoDeLinea = "";
        if(this.x === 6) {
            saltoDeLinea = '/n';
        }

        console.log(this.x, this.y);

        if(this.x === x && this.y === y){
            return " O ";
        }

        return " * " + saltoDeLinea;
    }
}

module.exports = Cell;