class Cell {

    constructor(x, y, contenido) {
        this.x = x;
        this.y = y;
        this.contenido = contenido;
        console.log(contenido);
    }

    draw(){
        console.log(this.contenido);
     
        return this.contenido.draw()
        
    }

    pacmanComingFromTop(pacman) {
        pacman.moveDown();
    }

    pacmanComingFromRight(pacman) {
        pacman.moveLeft();
    }

    pacmanComingFromAbove(pacman) {
        pacman.moveUp();
    }

    pacmanComingFromLeft(pacman) {
        pacman.moveRight();
    }

    equals(x, y) {
        return x === this.x && y === this.y;
    }

    drawPacman(x, y) {

        let saltoDeLinea = "";
        if(this.x === 3) {
            saltoDeLinea = ' \n' ;
        }

        if(this.x === x && this.y === y){
            return "O" + saltoDeLinea;
        }

        return "*" + saltoDeLinea;
    }
}

module.exports = Cell;
