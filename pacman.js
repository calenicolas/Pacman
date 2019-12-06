class Pacman {

    constructor(observador) {
        this.x = 0;
        this.y = 0;

        this.observador = observador;
    }

    moveRight() {
        this.x = this.x + 1;
    }

    moveLeft() {
        this.x = this.x - 1;
    }

    moveUp() {
        this.y = this.y + 1;
    }

    moveDown() {
        this.y = this.y - 1;
    }

    goUp(nextPosition){
        nextPosition.pacmanComingFromAbove(this);
    }
    
    goRight(nextPosition){
        nextPosition.pacmanComingFromLeft(this);
    }

    goDown(nextPosition){
        nextPosition.pacmanComingFromTop(this);
    }

    goLeft(nextPosition){
        nextPosition.pacmanComingFromRight(this);
    }

    getPosition() {
        return {
            x: this.x,
            y: this.y
        };
    }
}

module.exports = Pacman;