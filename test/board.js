const should = require ("should");
const Board = require ("../board.js")
const Pacman = require ("../pacman")
describe ("creando un board", function() {
 
    it("el board en el medio tiene un pacman", function() {

        const expectedPosition = {
            x: 0,
            y: 0
        }

        const pacman = new Pacman ();

        const actualPosition = pacman.getPosition(); 
        should(actualPosition).be.eql(expectedPosition);
    })

    it("el board tiene pelotitas chicas", function() {

        const expectedElement = new PelotaChica;

        PelotaChica.getPosition();

        const 
        
    })

})